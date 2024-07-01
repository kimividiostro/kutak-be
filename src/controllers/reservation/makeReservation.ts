import Reservation from "../../models/reservation";
import Restaurant, { DaysOfWeek } from "../../models/restaurant";
import Guest from '../../models/guest'

const makeReservation = async (req: any, res: any) => {
    const { restaurantId, numberOfPeople, guestId, reservationStart, specialInstructions } = req.body;
    if(
        !restaurantId ||
        !numberOfPeople ||
        !guestId ||
        !reservationStart)
        { return res.status(400).json({message: "Please fill out all required fields."}); }
    
    try {
        const guest = await Guest.findById(guestId);
        if(!guest) {
            return res.status(404).json({message: "Guest with given id was not found."});
        }
        const restaurant = await Restaurant.findById(restaurantId);
        if(!restaurant) {
            return res.status(404).json({message: "Restaurant with given id was not found."});
        }

        const rStart = new Date(reservationStart);
        const rEnd = new Date(rStart.getTime() + 3 * 60 * 60 * 1000); // add 3 hours

        if(!restaurant.workingDays.find(d => d === rStart.getUTCDay())) {
            return res.status(400).json({message: "Selected restaurant does not work on " + DaysOfWeek[rStart.getUTCDay()]});
        }
        
        if(restaurant.workingHoursStart < rStart.getUTCHours() || rEnd.getUTCHours() > restaurant.workingHoursEnd) {
            return res.status(400).json({message: "This restaurant accepts reservations between " + restaurant.workingHoursStart + " and " + (restaurant.workingHoursEnd - 3)});
        }

        const suitableTables = restaurant.tables.filter(t => t.numberOfSeats >= numberOfPeople);
        if(suitableTables.length === 0) {
            return res.status(404).json({message: "There is no table suitable for given number of people."});
        }

        
        let availableTable;
        for(const t of suitableTables) {
            const overlappingReservations = await Reservation.find({
                restaurant,
                table: {tableNumber: t.tableNumber},
                $and: [
                    { reservationStartTime: { $lte: rEnd } },
                    { reservationEndTime: { $gte: rStart } }
                ]
            });

            if(overlappingReservations?.length === 0) {
                availableTable = t;
                break;
            }
        }
        if(!availableTable){
            return res.status(404).json({message: "There are no available tables for that period."});
        }

        const reservation = new Reservation({
            guest,
            restaurant,
            numberOfPeople,
            table: availableTable,
            reservationStart: rStart,
            reservationEnd: rEnd,
            specialInstructions
        })
        await reservation.save();

        return res.status(200).json({message: "Reservation successfully created!", reservation});
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({message: "Something went wrong. Check input data and try again."});
    }
}

export default makeReservation;