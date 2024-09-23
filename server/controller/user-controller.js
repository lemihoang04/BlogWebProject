
import user from "../model/user.js";

export const signupUser = async (request, response) => {
    try{
        const user1 =  request.body;

        const newUser = new user(user1);
        await newUser.save();
        return response.status(200).json({ msg: 'register success'});
    } catch (error){
        return response.status(500).json({ msg: 'Error occured while registered'});  
    }
}