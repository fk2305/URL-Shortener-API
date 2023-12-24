# URL Shortener
 

This API is used to shorten URL's .
It is built using NodeJs, ExpressJs, MongoDB and JavaScript.


## ⚙️ Functionality

### Admin's functions

- User Registration
- User Login
- URL Shortener

## 🧑‍💻 Getting started

- Fork the project
- Clone the forked repository in your local system
- In root directory index.js file you can edit the following:-
  - PORT="Your port number"
  - MONGODB_URL="Your MongoDB URL"
  - SESSION_SECRET_KEY="Your secret session key"
- Install all required packages

```bash
npm install
```

- Run project

```bash
npm start or nodemon index.js
```

The project is running on the port number provided by you.

## 🛠️ Tools Used

- NodeJS
- MongoDB
- ExpressJS
- JavaScript

### 📚 Libraries:

- bcryptjs
- connect-mongo
- express
- express-session
- mongoose
- passport
- passport-local

{
	"info": {
		"_postman_id": "22d2749b-c834-40c5-bbdd-869ff2a3aeff",
		"name": "URL Shortener",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "22451140"
	},
	"item": [
		{
			"name": "User Registration",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "username",
							"value": "farhan",
							"type": "text"
						},
						{
							"key": "password",
							"value": "123456789",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "http://localhost:8000/auth/register",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "8000",
					"path": [
						"auth",
						"register"
					]
				}
			},
			"response": []
		},
		{
			"name": "User Login",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "username",
							"value": "farhan",
							"type": "text"
						},
						{
							"key": "password",
							"value": "123456789",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "http://localhost:8000/auth/login",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "8000",
					"path": [
						"auth",
						"login"
					]
				}
			},
			"response": []
		},
		{
			"name": "URL Shortener",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTczMDhhYTZmMmVlNDNiNDUwNzliMSIsImlhdCI6MTcwMDIxMjkxNSwiZXhwIjoxNzAwMjIwMTE1fQ.1IA5W9QP1Ak-lXBcakEZ1_ohZQCxekn2FaIPg0kptLY",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "originalUrl",
							"value": "https://www.instagram.com/",
							"type": "text"
						},
						{
							"key": "",
							"value": "",
							"type": "text",
							"disabled": true
						},
						{
							"key": "",
							"value": "",
							"type": "text",
							"disabled": true
						}
					]
				},
				"url": {
					"raw": "http://localhost:8000/shorten",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "8000",
					"path": [
						"shorten"
					]
				}
			},
			"response": []
		},
		{
			"name": "View URL with Shortened URL",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "GET",
				"header": [
					{
						"key": "shortUrl",
						"value": "ybWBzHY",
						"type": "text"
					}
				],
				"body": {
					"mode": "urlencoded",
					"urlencoded": []
				},
				"url": {
					"raw": "http://localhost:8000/JD1NfC3B",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "8000",
					"path": [
						"JD1NfC3B"
					]
				}
			},
			"response": []
		},
		{
			"name": "User Logout",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:8000/auth/logout",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "8000",
					"path": [
						"auth",
						"logout"
					]
				}
			},
			"response": []
		}
	]
}




## 🖼️ Screenshots

![](./public/1.png)
![](./public/2.png)
![](./public/3.png)
![](./public/4.png)
![](./public/5.png)
![](./public/6.png)



