import 'dotenv/config';
import http from "http";
import app from './app';
import connect from './connectDB';

const PORT = process.env.PORT || 3000;

http
  .createServer(app)
  .listen(PORT, () => {
    connect();
    console.log(`Server run in port ${PORT}`);
  })