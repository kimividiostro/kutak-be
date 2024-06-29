import Restaurant from "../../models/restaurant"


const getRestaurants = async (req: any, res: any) => {
    try {
        const restaurants = await Restaurant.find();
        res.status(200).json(restaurants);
    }
    catch{
        res.status(500).json({msg: "Something went wrong. Try again later."});
    }
}

export default getRestaurants;