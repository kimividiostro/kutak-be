import Guest from "../../models/guest";
import Reservation from "../../models/reservation";


const getReservationsForUser = async (req: any, res: any) => {
    const guestId = req.params.guestId;
    const guest = await Guest.findById(guestId);
    if(!guest) {
        return res.status(404).json({message: "User with given id was not found."});
    }
    const reservations = await Reservation.find({
        guest
    });
    
    return res.status(200).json(reservations);
}

export default getReservationsForUser;