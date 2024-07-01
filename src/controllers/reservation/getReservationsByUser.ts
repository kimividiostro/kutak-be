import Guest from "../../models/guest";
import Reservation from "../../models/reservation";


const getReservationsForUser = async (req: any, res: any) => {
    const guestId = req.params.guestId;
    if(!guestId) {
        return res.status(400).json({message: "Guest id not provided."});
    }
    const guest = await Guest.findById(guestId);
    if(!guest) {
        return res.status(404).json({message: "Guest with given id was not found."});
    }
    const reservations = await Reservation.find({
        guest
    });
    
    return res.status(200).json(reservations);
}

export default getReservationsForUser;