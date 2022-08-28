## Server is live on:

https://yanna-yobot.herokuapp.com/api

# AUTH ROUTES

## **REGISTER**

_Method Url:_ `/api/auth/register`

_HTTP method:_ **[POST]**

#### Body

| name        | type    | required | description    |
| ----------- | ------- | -------- | -------------- |
| `username`  | String  | Yes      | Must be unique |
| `email`     | String  | Yes      | Must be unique |
| `password`  | String  | Yes      |                |
| `firstName` | String  | Yes      |                |


_example:_

```
{
      "username": "matt04",
      "password": "password",
      "firstName": "Matt",
      "email": "matt@gmail.com"
}
```

#### Response

##### 201 (Created)

> If you successfully register a user the endpoint will return an HTTP response with a status code `201` and a body as below.

```
{
    "message": "Registration successful",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Implbm55IiwicGFzc3dvcmQiOiIkMmEkMTEkME5UTXFlcGF1YmQ0eXU2Lk9obFZsLlU3NGNXUVdWMVBwd0d2WnVGNldBYXB3cDlCTkNMd0MiLCJmaXJzdE5hbWUiOiJKZW5ueSIsImxhc3ROYW1lIjoiTGkiLCJlbWFpbCI6Implbm55QGdtYWlsLmNvbSIsInBob25lIjo0MTU2MjY3Njg4LCJpYXQiOjE1NDkxNzA1MjMsImV4cCI6MTU0OTE3NDEyM30.jOxH0YlAABmP_W3BaF3TowhCKHP9hFkLcyw-P-dQE_M",
    "userId": 7
}
```

---

## **LOGIN**

_Method Url:_ `/api/auth/login`

_HTTP method:_ **[POST]**

#### Body

| name       | type   | required | description                                                           |
| ---------- | ------ | -------- | ------------------------------------------------------------------    |  
| `username` | String | Yes      | Must match an email in the database                                   |
| `password` | String | Yes      | Must match a password in the database corresponding to above username |

_example:_

```
{
  username: "yannafaith",
  password: "password"
}
```

#### Response

##### 200 (OK)

> If you successfully login, the endpoint will return an HTTP response with a status code `200` and a body as below.

```
{
    "message": "Welcome back Matt Jones",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRvbW15IiwicGFzc3dvcmQiOiIkMmEkMTEkaDBMb3hsU0pTTWxzcXNVUVQ3ZHBRZUVXbGxrNXk2M2xKVC9BQy9kU0kvWERPdnFxaHNiUjYiLCJlbWFpbCI6InRvbW15QGdtYWlsLmNvbSIsInBob25lIjo1MTA0MDgyNTg3LCJpYXQiOjE1NDkzMDEyNDMsImV4cCI6MTU0OTMwNDg0M30.TXnqIh3moCBZX-FDK5kuUURkLZtWfxmIZO3IqQhlT50"
    "userId": 7
}
```

---

# USERS ROUTES

## **GET USERS**

_Method Url:_ `/api/users`

_HTTP method:_ **[GET]**

#### Response

##### 200 (OK)

```
[
    {
        "id": 1,
        "username": "tommy",
        "password": "$2a$11$LQImXlHE7dt0RSD9gjuvBecaZMMKYuW.vGcWsi3YumGU25PwLiFM2",
        "firstname": "Tommy",
        "email": "tommy@gmail.com",
    },
    {
        "id": 2,
        "username": "linda",
        "password": "$2a$11$d6mtGCQJBekPkqHvyog7GuaE82AfjcXzytL3ELtR8Dc.ENBNu7i/a",
        "firstname": "Linda",
        "email": "linda@gmail.com",
    },
]
```

---

## **GET USER BY ID**

_Method Url:_ `/api/users/:id`

_HTTP method:_ **[GET]**

#### Response

##### 200 (OK)

```
    {
        "id": 1,
        "username": "tommy",
        "password": "$2a$11$LQImXlHE7dt0RSD9gjuvBecaZMMKYuW.vGcWsi3YumGU25PwLiFM2",
        "firstname": "Tommy",
        "email": "tommy@gmail.com",
    },
```

---

# LESSON ROUTES

## **GET LESSONS**

_Method Url:_ `/api/lessons`

_HTTP method:_ **[GET]**

#### Response

##### 200 (OK)

```
[
    {
        "id": 1,
        "name":"labels"
    },
        {
        "id": 2,
        "name":"feelings"
    }
]
```

---

## **GET LESSON BY ID**

_Method Url:_ `/api/lessons/:id`

_HTTP method:_ **[GET]**

#### Response

##### 200 (OK)

```
    {
        "id": 1,
        "name":"labels"
    }
```

---

# ROUTE ROUTES

## **GET ROUTES**

_Method Url:_ `/api/routes`

_HTTP method:_ **[GET]**

#### Response

##### 200 (OK)

```
[
    {
      "id": 1,
      "text": "Can I tell you something?",
      "replies": "sure",
      "payloads": "",
      "routes": "2",
      "tag": "labels-start",
      "lesson_id": 1,
      "lesson_name":"labels",
    },
    {
      "id": 2,
      "text": "I saw this the other day|img:badrobot.png|and it made me sad 😔",
      "replies": "oh no Woebot",
      "payloads": "",
      "routes": "3",
      "tag": "",
      "lesson_id": 1,
      "lesson_name":"labels",
    },
    {
      "id": 3,
      "text": "I know|But it also got me thinking",
      "replies": "about what",
      "payloads": "",
      "routes": "4",
      "tag": "",
      "lesson_id": 1,
      "lesson_name":"labels",
    },
]
```

---

## **GET ROUTE BY ID**

_Method Url:_ `/api/routes/:id`

_HTTP method:_ **[GET]**

#### Response

##### 200 (OK)

```
    {
      "id": 2,
      "text": "I saw this the other day|img:badrobot.png|and it made me sad 😔",
      "replies": "oh no Woebot",
      "payloads": "",
      "routes": "3",
      "tag": "",
      "lesson_id": 1,
      "lesson_name":"labels",
    }
```

---

## **GET ROUTES BY LESSON ID**

_Method Url:_ `/api/routes/for-lesson/:lesson_id`

_HTTP method:_ **[GET]**

#### Response

##### 200 (OK)

```
[
    {
      "id": 1,
      "text": "Can I tell you something?",
      "replies": "sure",
      "payloads": "",
      "routes": "2",
      "tag": "labels-start",
      "lesson_id": 1,
      "lesson_name":"labels",
    },
    {
      "id": 2,
      "text": "I saw this the other day|img:badrobot.png|and it made me sad 😔",
      "replies": "oh no Woebot",
      "payloads": "",
      "routes": "3",
      "tag": "",
      "lesson_id": 1,
      "lesson_name":"labels",
    },
    {
      "id": 3,
      "text": "I know|But it also got me thinking",
      "replies": "about what",
      "payloads": "",
      "routes": "4",
      "tag": "",
      "lesson_id": 1,
      "lesson_name":"labels",
    },
]
```

---

# USER LESSONS ROUTES

## **GET ROUTES**

_Method Url:_ `/api/user-lessons/:user_id`

_HTTP method:_ **[GET]**

#### Response

##### 200 (OK)

```
[
    {
      "id": 1,
      "user_id":1,
      "lesson_id": 1,
      "feedback": "It was good!",
      "rating":5,
      "completed":true
    },
    {
      "id": 2,
      "user_id":1,
      "lesson_id": 2,
      "feedback": "It was bad!",
      "rating":1,
      "completed":true
    },
    {
      "id": 3,
      "user_id":1,
      "lesson_id": 3,
      "feedback": "It was ok!",
      "rating":3,
      "completed":true
    },
]
```

---

