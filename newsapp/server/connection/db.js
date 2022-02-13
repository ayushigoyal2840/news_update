import mongoose from "mongoose";

const Connection = async () => {
    try{
  const URL=`mongodb://ayushi:Ayushi123@newsapp-shard-00-00.5fw7x.mongodb.net:27017,newsapp-shard-00-01.5fw7x.mongodb.net:27017,newsapp-shard-00-02.5fw7x.mongodb.net:27017/PROJECT 0?ssl=true&replicaSet=atlas-j040gz-shard-0&authSource=admin&retryWrites=true&w=majority`;
  mongoose.connect(URL,{ useNewUrlParser:true });
  console.log('database connected successfully');
    }
    catch (error) {
        console.log('Error while connecting',error);
    }
}

export default Connection;