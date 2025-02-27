import app from './app';
import config from './app/config';
import mongoose from 'mongoose';

// pass authentication = admin2003
// DATABASE_URL=mongodb+srv://mitul5267:lIQajUg7BpewMtVj@cluster0.bsnes.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// "mongodb://127.0.0.1:27017/test"
async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log(`App is listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main();
