# Webcam client

Webcam client relies on `fswebcam` program installed in OS.

For Linux:
```
sudo apt-get install fswebcam
```

Also you should know the backend address, for example `http://localhost:4000`

Then start client as
```
npm install
node app.js http://localhost:4000
```

Client webcamid will be obtained from backend and saved in ~/.webcam.properties



