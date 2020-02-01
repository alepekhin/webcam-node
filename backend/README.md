# Node based webcam backend

## How to run

- install node and npm. In ubuntu:
  ```
sudo apt update
sudo apt install build-essential apt-transport-https lsb-release ca-certificates curl
curl -sL https://deb.nodesource.com/setup_10.x | bash -
sudo apt install nodejs
  ```
- npm install
- mkdir ~/webcam
- change origin if needed:
```
vi index.js
change line
app.use(cors({origin:'http://localhost:3000'}));
```
- node index.js

It starts backend web server at port 4000

## Backend endpoints

    GET /webcam/register
    GET /webcam/{webcamid}/{file}
    GET /webcam/{webcamid}
    POST /webcam

