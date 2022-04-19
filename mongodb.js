const mongoose = require("mongoose");
const MONGO_URL = "mongodb+srv://admin:hari1999@cluster0.piyeq.mongodb.net/kanban-board?retryWrites=true&w=majority";
const MONGO_NAME = "kanban-board"

const connectDatabase = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`MongoDB Connected - ${MONGO_NAME}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDatabase;