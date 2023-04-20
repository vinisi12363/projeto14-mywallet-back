import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDataBase = async () => {
    console.log("Aguarde, conectando ao banco de dados...");

    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Conectado com sucesso`);
    } catch (err) {
        console.log(err);
    }
};

export default connectDataBase;
