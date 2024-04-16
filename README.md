## How to generate apk file
1. [How To Generate apk Using React Native Expo CLI](https://medium.com/@hrusikesh251.nalanda/how-to-generate-apk-using-react-native-expo-cli-43c4c2085636)
##### OR
1. https://docs.expo.dev/build/setup/
2. https://docs.expo.dev/build-reference/apk/

## API Documentation

## Environments
- http://localhost:3000/ = Localhost
- https://dev.ollio.uz/ = Developer
- https://api.ollio.uz/ = Production

## Endpoints

<details>
<summary>AUTH</summary>

### 1) POST /auth/signin

#### Headers:

- Content-Type: application/json

#### Request:
    {
        "phoneNumber": "998935399093",
        "password": "wholesaler"
    }

#### Response:
    {
      "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWE1NjMwNjBjZjg2M2Q4ZGEzMWNjMWIiLCJwaG9uZU51bWJlciI6Ijk5ODkzNTM5OTA5MyIsImlhdCI6MTcxMjAyNzc1NSwiZXhwIjoxNzEyMDMxMzU1fQ.nvBKOx6zayHgu1JwFZCO-TngeMDU2LIVcpt4QN4S-UM"
    }


### 2) GET /auth/profile

#### Headers:

- Content-Type: application/json
- Authorization: Bearer Token = accessToken

#### Response:
      {
         "sub": "65a563060cf863d8da31cc1b",
         "phoneNumber": "998935399093",
         "iat": 1712210856,
         "exp": 1712214456
      }
</details>

<details>
<summary>USERS</summary>

### 1) POST /users

#### Headers:

- Content-Type: application/json
- Authorization: Bearer Token = accessToken

#### Request:
    {
        "firstName": "Mike",
        "lastName": "Tyson",
        "phoneNumber": "998935399098",
        "address": "Tashkent, Uzbekistan",
        "password": "password",
        "role": "admin"
    }

#### Response:
    {
        "_id": "660e6c6a0bef37745202a4df",
        "bossId": null,
        "firstName": "Mike",
        "lastName": "Tyson",
        "address": "Tashkent, Uzbekistan",
        "password": "password",
        "phoneNumber": "998935399098",
        "role": "admin",
        "status": 1
    }


### 2) PATCH | GET /users/id

#### Headers:

- Content-Type: application/json
- Authorization: Bearer Token = accessToken

#### Response:
    {
        "_id": "660e6c6a0bef37745202a4df",
        "bossId": null,
        "firstName": "Mike",
        "lastName": "Tyson",
        "address": "Tashkent, Uzbekistan",
        "password": "password",
        "phoneNumber": "998935399098",
        "role": "admin",
        "status": 1
    }


### 3) GET /users

#### Headers:

- Content-Type: application/json
- Authorization: Bearer Token = accessToken

#### Response:
    [
        {
            "bossId": null,
            "_id": "65dc70c6a441a798ba5e8562",
            "firstName": "admin",
            "phoneNumber": "998935399095",
            "address": "Tashkent, Uzbekistan",
            "password": "admin",
            "role": "admin",
            "status": 1
        },
        {
            "bossId": null,
            "_id": "65a563060cf863d8da31cc1b",
            "firstName": "wholesaler",
            "phoneNumber": "998935399093",
            "address": "Tashkent, Uzbekistan",
            "password": "wholesaler",
            "role": "wholesaler",
            "status": 1
        }...
    ]
</details>

|  | Mon| Tue |
|-|-|-|  
| 0% Read | 0 min | 0 min |
| 10% Walk | 10k steps | 0 steps |  
| 30% pushup | 30 reops | 0 reps |