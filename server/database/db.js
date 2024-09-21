import mongoose from "mongoose";



export const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@blogger-shard-00-00.ithte.mongodb.net:27017,blogger-shard-00-01.ithte.mongodb.net:27017,blogger-shard-00-02.ithte.mongodb.net:27017/?ssl=true&replicaSet=atlas-pqadh9-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Blogger`;
    try{
        await mongoose.connect(URL, {useNewUrlParser: true });
        console.log("Connect successfullly")
    } catch(error){
        console.log('error', error);
}
};


export default Connection;