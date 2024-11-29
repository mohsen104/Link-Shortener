import mongoose from "mongoose";

const ConnectedToMongodb = async () => {
    try {
        if (mongoose.connections[0].readyState) {
            return;
        }
        await mongoose.connect("mongodb://localhost:27017/my-server");
        console.log('connected to mongodb');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

export default ConnectedToMongodb;