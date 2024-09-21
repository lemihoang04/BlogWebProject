import mongoose from "mongoose";



export const Connention = async () => {
    const URL ='';
    try{
        await mongoose.connect(URL, {userNewUrlParser: true});
        console.log("Connect successfullly")
    } catch(error){
        console.log('error', error);
}