![](https://img.shields.io/badge/Microverse-blueviolet)

# LEADER BOARD

> Microverse project on practcing gitflow, HTML, CSS and Javascript.

![screenshot](./src/leaderboard.jpg)

Additional description about the project and its features.

## Built With

- HTML
- CSS
- JAVASCRIPT
- Node.js/NPM


## Getting Started

```
npm install
npm run build
npm start
```
<br>

## Interaction with the Leaderboard API
- Each new game is created with the POST method using
  ```bash
      {
          "name": "My cool new game"
      }
    ```
 This request returns a result that holds the unique ID for that game:

  ```bash
    {
      "result": "Game with ID: Zl4d7IVkemOTTVg2fUdz added."
    }
  ```
>  This gameID is saved in the localStorage automatically


  The two allowed actions are posting and getting of the scores
- The POST request creates a new Leaderboard score for the given game sending user and score as parameters like this:

  #### Endpoint
  ```bash
  https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:id/scores/
  ```

  body parameters
  ```bash
  {
	  "user": "John Doe",
	  "score": 42
  }
  ```
  and it returns

  ```bash
  {
	  "result": "Leaderboard score created correctly."
  }
  ```
- The GET request returns data in JSON format like this:
-
    #### Endpoint
  ```bash
  https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:id/scores/
  ```
  It returns
  ```bash
  {
    "result": [
        {
            "user": "John Doe",
            "score": 42
        },
        {
            "user": "Jahne Smith",
            "score": 65
        },
        {
            "user": "SpiderMan",
            "score": 25
        }
    ]
  }
  ```

  <br>

## Authors

👤 **Author**

- GitHub: [@Nuri1977](https://github.com/Nuri1977)
- Twitter: [@Lackanuri](https://twitter.com/LackaNuri)
- LinkedIn: [@nurilacka](https://www.linkedin.com/in/nuri-lacka-7141b01ba/)


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc

## 📝 License

This project is [MIT](./MIT.md) licensed.