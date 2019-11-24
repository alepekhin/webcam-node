# webcam-node

This project consists of three parts:

- ```client``` sends images from client computer webcam to remote server
- ```backend``` assepts images at remote server and stores them at server's file system
- ```frontend``` shows stored images in browser 

## Quick start in development mode

In terminal window:

- cd backend
- npm install
- node index.js

backend service will be started listening to port 4000

In another terminal window:

- cd frontend
- npm install
- npm start

frontend service will be started listening to port 3000

In another terminal window:

- cd client
- npm install
- node index.js http://localhost:4000

client service will be started sending images to http://localhost:4000


Then open browser at `http://localhost:3000`

Use known webcamid.

## Comparing to Java

Just for curiosity: 

Lines of code in similar Java project vs this Node.js project:

- backend - 394 and 84 
- client - 349 and 59
