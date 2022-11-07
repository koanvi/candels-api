# What is it for?
Hi, this small app is for a watching crypto exchange rates. As a test task from an employer I d'like to work)))

## Install

Just clone it localy and install whith npm:

```
git clone https://github.com/koanvi/cli-chat.git
```
```
npm i
```
## Run
```
npm run startserver
```

Feel free to tell me concerning some bugs you find (hope no 👽).


# curl tests
You can use these curl tests to check backend:

```

===============
GET:candles
===============
\
curl \
-X GET \
-o site.html \
-b cookie.txt \
-D headers.txt \
-d '"param1=test1&param2=test2"' \
"http://localhost:1234/candles/?startDt=2021-01-01&endDt=2023-01-01"

===============

===============
POST:candles/filldb
===============
\
curl \
-X POST \
-o site.html \
-b cookie.txt \
-D headers.txt \
-d '"param1=test1&param2=test2"' \
"http://localhost:1234/candles/filldb"

===============
``
