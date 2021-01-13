import mongoose from "mongoose";

export const connect = async () => {
  try {
    mongoose.connect("mongodb://localhost/mongodbqraphql", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    console.log(">>> DB is connected");
  } catch (e) {
    console.error("Algo salio mal.." + e);
  }
};
