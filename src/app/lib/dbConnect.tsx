import { error } from "console";
import mongoose, { connections, mongo } from "mongoose";
import { number } from "zod";

{/* ALways remember - 
    DB Connection Is always IN ANOTHER CONTINENT 
    DB CAN TAKE TIME  -- Async & Await
    DB CAN FAIL  -- try catch method needed 
*/}


type ConnectionObj = {      
    isConnected?: number
}

const connection: ConnectionObj = {}

async function dbConnect(): Promise<void> {

    // if already created connection 

    if (connection.isConnected) {
        console.log("DB is connected already")
    }

    // else create new DB
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || '')
        console.log(db, "db")
        console.log(db.connection, " connection db")

        connection.isConnected = connections[0].readyState
        console.log('db si connnected successfully')

    }
    catch (error) {
        console.log('DB Connection failed', error)
        process.exit(1) // terminate the process 
    }
} 


// npm run dev -- se chala hai terminal