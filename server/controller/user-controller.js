
import user from "../model/user";

export const signupUser = async (request, response) => {
    try{
        const user =  request.body;

        const newUser = new User(user);
        await newUser.save();


        return response.status(200).json({ msg: 'register success'})           
    } catch (error){
        return response.status(500).json({ msg: 'Error occured while registered'})  
    }
}