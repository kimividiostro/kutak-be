import  Guest  from "../../models/guest";

const getGuests = async (req: any, res: any) => {
    try {
        const guests = await Guest.find();
        res.status(200).json(guests);
    }
    catch {
        res.status(500).json({message: "Something went wrong. Please try again later."});
    }
};

export default getGuests;
