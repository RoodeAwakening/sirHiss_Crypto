

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->




<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/RoodeAwakening/sirHiss_Crypto">
    <img src="frontend/public/images/logo.jpg" alt="Logo" width="" height="">
  </a>

  <h3 align="center">Sir Hiss Crypto </h3>

  <p align="center">
    Sir Hiss is a crypto trading website designed around the popular web app "Robinhood". Users can sign up for an account, track all of their trades and keep track of account holdings for all of their crypto. 
    <br />
    <a href="https://github.com/RoodeAwakening/sirHiss_Crypto"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://sirhiss-crypto.herokuapp.com/">View Demo</a>
    ·
    <a href="https://github.com/RoodeAwakening/sirHiss_Crypto/issues">Report Bug</a>
    ·
    <a href="https://github.com/RoodeAwakening/sirHiss_Crypto/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[Click here to view GoodGames live on the web!](https://sirhiss-crypto.herokuapp.com/)
<br>
</br>
![homepage-screenshot](########)




### Built With

* [JavaScript]()
* [React]()
* [Redux]()
* [HTML]()
* [CSS]()
* [SEQUELIZE]()



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Here is everything we need you to do to get started with Sir Hiss.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/RoodeAwakening/sirHiss_Crypto
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Add a '.env' with your environment variables to the root of your local directory

4. Create a postgreSQL user
    ```sh
    CREATE USERS <<your username>> WITH PASSWORD <<your password>> CREATEDB
    ```
5. Create your database
    ```sh
    npx dotenv sequelize db:create
    ```
6. Migrate and seed your database
    ```sh
    npx dotenv sequelize db:migrate
    npx dotenv sequelize db:seed:all
    ```

<!-- USAGE EXAMPLES -->
## Usage
### An easy-to-use login with a pre-configured Demo User.
![Login](####)
### A simple dashboard to view all your current positions.
![Dashboard](####)
### Find out where your holdings are located at the click of a button.
![Holdings](####)
### Easily track transactions.
![Transactions](####)
### Easy to update and configure watchlists.
![Watchlist](####)

_For more examples, please refer to the [Documentation](https://github.com/RoodeAwakening/sirHiss_Crypto/wiki)_



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/RoodeAwakening/sirHiss_Crypto/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request





<!-- CONTACT -->
## Contact

* Derek Roode - [LinkedIn](https://www.linkedin.com/in/derek-roode-9014a796/)


Project Link: [https://github.com/RoodeAwakening/sirHiss_Crypto](https://github.com/RoodeAwakening/sirHiss_Crypto)


<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [Derek Roode](https://github.com/RoodeAwakening)

