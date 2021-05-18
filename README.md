# 13 Object-Relational Mapping (ORM): E-Commerce Back End

## My Task

Internet retail, also known as **e-commerce**, is the largest sector of the electronics industry, generating an estimated $29 trillion in 2019. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to their prevalence, understanding the fundamental architecture of these platforms will benefit me as a full-stack web developer.

My task was to build the back end for an e-commerce site by modifying starter code. I configured a working Express.js API to use Sequelize to interact with a MySQL database.

## Table of Contents
1. [Technologies Used](#Technologies-Used)
2. [User Story](#User-Story)
3. [Mock Up](#Mock-Up)
4. [Installation](#Installation)
5. [Tests](#Tests)
5. [Usage](#Usage)
6. [Contact](#Contact)
7. [License](#License)


## Technologies Used 
****UPDATE****
```
1. [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
2. [Express.js](https://www.npmjs.com/package/express)
3. [Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
4. [MySQL](https://dev.mysql.com/doc/)
5. [dotenv](https://www.npmjs.com/package/dotenv)
6. [Sequelize](https://www.npmjs.com/package/sequelize) 
7. [MySQL2](https://www.npmjs.com/package/mysql2)
```

## User Story

```md
AS A manager at an internet retail company,
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API:
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file,
THEN I am able to connect to a database using Sequelize.
WHEN I enter schema and seed commands,
THEN a development database is created and is seeded with test data,
WHEN I enter the command to invoke the application,
THEN my server is started and the Sequelize models are synced to the MySQL database.
WHEN I open API GET routes in Insomnia Core (or Postman) for categories, products, or tags,
THEN the data for each of these routes is displayed in a formatted JSON.
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core (or Postman), 
THEN I am able to successfully create, update, and delete data in my database.
```

## Mock-Up
***UPDATE***

The following animation shows the application's GET routes to return all categories, all products, and all tags being tested in Insomnia Core:

![In Insomnia Core, the user tests “GET tags,” “GET Categories,” and “GET All Products.”.](./Assets/13-orm-homework-demo-01.gif)

The following animation shows the application's GET routes to return a single category, a single product, and a single tag being tested in Insomnia Core:

![In Insomnia Core, the user tests “GET tag by id,” “GET Category by ID,” and “GET One Product.”](./Assets/13-orm-homework-demo-02.gif)

The following animation shows the application's POST, PUT, and DELETE routes for categories being tested in Insomnia Core:

![In Insomnia Core, the user tests “DELETE Category by ID,” “CREATE Category,” and “UPDATE Category.”](./Assets/13-orm-homework-demo-03.gif)

Your walkthrough video should also show the POST, PUT, and DELETE routes for products and tags being tested in Insomnia Core or Postman.

The following video demonstrates the application's functionality':
![Screencastify](____)

The following video demonstrates the application's functionality':
![GitHub Link](https://github.com/crsmith01/hw12-e-commerce-back-end)

## Installation
To install necessary dependencies, run the following in your command-line:
********UPDATE**********

## Tests
To run tests, enter the following in your command-line: npm run test

## Usage
To start enter: node employee-tracker.js
*Note: I have this as the start script in the package.json file, btu I cannot figure out why it won't work from the terminal as npm start.

## Contact
If you have any questions about the repo, contact me at [crsmith01](https://github.com/crsmith01).


## License
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
Copyright 2021 Catherine Smith

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
