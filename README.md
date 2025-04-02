
# EDD Proxy Server

This is a simple proxy server for fetching Easy Digital Downloads (EDD) purchase records using an API. It helps bypass CORS restrictions and securely handle API requests.

## 🚀 Setup & Installation
Follow these steps to set up and run the EDD Proxy Server:

### 1️⃣ Clone the Repository
```
git clone https://github.com/wpbean/EDD-Proxy-Server.git
cd EDD-Proxy-Server
```
### 2️⃣ Install Dependencies
Make sure you have Node.js installed. Then, install the required dependencies:
```
npm install
```

### 3️⃣ Configure the Server
Rename the sample configuration file:
```
mv server.sample.js server.js
```
Then, open server.js and add your EDD API Key and Token and update the site URL with your site domain name.

### 4️⃣ Start the Server
Run the server with:
```
node server.js
```
This will start the proxy server on the defined port.

## 🛠 Usage
Once the server is running, you can make API requests by sending a GET request to:
```
http://localhost:5050/fetch-sales?email=customer@example.com
```
Replace customer@example.com with the email address you want to look up.

## 🔧 Customization
* Modify server.js to change API endpoints or request handling logic.
* Configure logging or add error-handling mechanisms as needed.

## 🛟 Want to support?
Please give this repo a star for helping me.