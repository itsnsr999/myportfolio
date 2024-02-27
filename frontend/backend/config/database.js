import mongoose from "mongoose";

export const connectDatabase = () => {

  mongoose.connect('mongodb://localhost/myportfolio',{
      useNewUrlParser: true, 
      useUnifiedTopology: true
  })
  .then(db => console.log('DB is connected'))
  .catch(err => console.log(err));
};

