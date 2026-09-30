## Wanderlust

Wanderlust is a full-stack property listing web application inspired by Airbnb.
Users can browse listings, view them on an interactive map, sign up/log in,
create their own listings with images, and leave reviews with star ratings.

## Features
User authentication (sign up, log in, log out) with Passport.js
Create, view, edit, and delete property listings
Image upload and storage via Cloudinary
Interactive map on each listing page using Mapbox, based on the listing's location
Star-rating reviews on listings
Owner-only permissions for editing/deleting listings
Author-only permissions for deleting reviews
Flash messages for user feedback (success/error)
Form validation on both client (Bootstrap) and server (Joi)

## Tech Stack
Backend: Node.js, Express.js, MongoDB,
Mongoose Frontend: EJS templating, Bootstrap 5 Authentication: Passport.js,
passport-local-mongoose File Storage: Cloudinary,
Multer Maps/Geocoding: Mapbox GL JS, Mapbox Geocoding API Other: Joi (validation),
connect-flash, express-session, method-override
