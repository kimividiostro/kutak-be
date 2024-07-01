import Reservation from "../../models/reservation";
import Restaurant from "../../models/restaurant";


const getReservationsByRestaurant = async (req: any, res: any) => {
    const restaurantId = req.params.restaurantId;
    if(!restaurantId) {
        return res.status(400).json({message: "Restaurant id not provided."});
    }

    const restaurant = await Restaurant.findById(restaurantId);
    if(!restaurant) {
        return res.status(404).json({message: "Restaurant with given id was not found."});
    }

    const reservations = await Reservation.find({
        restaurant
    })

    return res.status(200).json(reservations);
}

export default getReservationsByRestaurant;