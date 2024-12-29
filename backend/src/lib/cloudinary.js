import { v2 as cloudinary } from "cloudinary";

import { config } from "dotenv";

config();

cloudinary.image("vieste_italy.jpg", {transformation: [
  {width: 1000, crop: "scale"},
  {quality: "auto"},
  {fetch_format: "auto"}
  ]});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;
