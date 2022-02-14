// import mongoose from 'mongoose';

// const Connection = async () => {
//     try{
//   const URL=
//   await mongoose.connect(URL, { useNewUrlParser: true });
//   console.log('database connected successfully');
//     }
//     catch (error) {
//         console.log('Error while connecting',error);
//     }
// }

// export default Connection;



import mongoose from 'mongoose';

const Connection = async (username, password) => {
    try {   
        const URL = `mongodb://ayushigoyal2840:Ayushi123@clone-inshort-shard-00-00.cl7sz.mongodb.net:27017,clone-inshort-shard-00-01.cl7sz.mongodb.net:27017,clone-inshort-shard-00-02.cl7sz.mongodb.net:27017/PROJECT 0?ssl=true&replicaSet=atlas-2tqdmt-shard-0&authSource=admin&retryWrites=true&w=majority`;
        
        
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;