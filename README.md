# Project Title
Bakery Management App

## Overview

The Bakery Management App is a powerful tool tailored for local bakeries, aiming to simplify their day-to-day operations by offering insights into sales performance, inventory management, and customer preferences.

### Problem

Local bakeries face numerous challenges in managing their operations efficiently. These include stock management issues, difficulties in understanding customer preferences, and lack of actionable insights into sales trends. Without access to comprehensive data and analytics, bakery owners struggle to make informed decisions and optimize their business processes for success.

### User Profile

Owners and managers of bakeries will use this app to gain actionable insights into their operations. They will access the dashboard through a web browser on their devices. Special considerations include the need for intuitive user interfaces and customizable reporting features to accommodate different business needs.

### Features

Product Listing: Display a comprehensive list of products available on the platform.
Product Descriptions: Provide detailed descriptions for each product to inform users about their attributes, ingredients, and other relevant information.
Customer Reviews: Allow users to view customer reviews and ratings for each product to assist in their decision-making process.
Navigation: Implement easy navigation features to enable users to find specific products quickly and efficiently.
User-Friendly Interface: Design a user-friendly interface for displaying product details and reviews.


## Implementation

### Tech Stack

Client - React, React Router DOM, Tailwind CSS, Sass, React Icons
Server - Node.js, Express, Knex, mysql2, dotenv, cors


### APIs

- No external APIs

### Sitemap

- Home                     (the main landing page of the application)
  - Products               (page listing all products available)
    - Product Details      (page displaying details of a specific product with reviews for it)
  - Reviews                (page displaying customer reviews sorted by date)
- 404 Not Found            (page displayed when a route does not match any existing paths)

### Mockups

![ProductList](https://github.com/Anna-Karl/anna-karlova-dashboard-project/assets/product_list.png)
![ProductDetails](https://github.com/Anna-Karl/anna-karlova-dashboard-project/assets/product_details.png)
![ReviewsList](https://github.com/Anna-Karl/anna-karlova-dashboard-project/assets/reviews_list.png)

### Data

Database schema:
The Products Table has a one-to-many relationship with both the Sales Table and the Reviews Table, primary key - product_id.

### Products Table:
| Field         | Type    | Description                |
|---------------|---------|----------------------------|
| id            | INTEGER | Primary Key, Auto-increment|
| name          | VARCHAR | Name of the product        |
| picture       | VARCHAR | URL to the product image   |
| description   | TEXT    | Description of the product |
| ingredients   | TEXT    | Ingredients of the product |

### Sales Table:
| Field         | Type    | Description                                 |
|---------------|---------|---------------------------------------------|
| transaction_id| INTEGER | Primary Key, Auto-increment                 |
| product_id    | INTEGER | Foreign Key referencing Products.id         |
| product_name  | VARCHAR | Name of the product associated with the sale|
| date          | DATE    | Date of the sale                            |
| day_part      | VARCHAR | Time of the day (e.g., Morning, Afternoon)  |
| day_type      | VARCHAR | Type of day (e.g., Weekday, Weekend)        |
| quantity      | INTEGER | Quantity of the product sold                |
| unit_price    | DECIMAL | Unit price of the product                   |
| cost          | DECIMAL | Total cost of the sale                      |

### Reviews Table:
| Field         | Type    | Description                                |
|---------------|---------|--------------------------------------------|
| review_id     | INTEGER | Primary Key, Auto-increment                |
| product_id    | INTEGER | Foreign Key referencing Products.id        |
| user_name     | VARCHAR | Name of the user submitting the review     |
| date          | DATE    | Date of the review                         |
| rating        | INTEGER | Rating given by the user (1 to 5)          |
| comment       | TEXT    | Comment provided by the user               |

### Endpoints

GET all products, endpoint: "/products ", example Response:
"product": {
    "product_id": 3,
    "product_name": "Cake",
    "ingredients": "flour, sugar, butter, eggs, milk, vanilla",
    "description": "Cake is a classic dessert made with flour, sugar, butter, eggs, and flavorings such as vanilla. It's moist, fluffy, and perfect for any celebration.",
    "picture": "http://localhost:8080/images/cake.jpg"}

GET all reviews, endpoint: "/reviews ", example Response:
"review": {
    "review_id": 26,
    "product_id": 1,
    "user_name": "User123",
    "rating": 5,
    "comment": "Absolutely delicious! I can't get enough of these alfajores.",
    "date": "2019-02-17T05:00:00.000Z",
    "picture": "http://localhost:8080/images/alfajores.jpg"}

GET all sales, endpoint: "/dashboard ", example Response:
"sales": {
    "transaction_id": 20,
    "product_id": 3,
    "product_name": "Cake",
    "date": "2016-10-30T04:00:00.000Z",
    "day_part": "Afternoon",
    "day_type": "Weekend",
    "quantity": 1,
    "unit_price": 5,
    "cost": 5
  }

### Auth

Authentication/authorization is a 'nice-to-haves' part 

## Roadmap

| Phase                    | Day 1 | Day 2 | Day 3 | Day 4 | Day 5 | Day 6 | Day 7 | Day 8 | Day 9 | Day 10 | Day 11 |
|--------------------------|-------|-------|-------|-------|-------|-------|-------|-------|-------|--------|--------|
| Create Client            | ■■■■■ |       |       |       |       |       |       |       |       |        |        |
| Create Server            | ■■■■■ |       |       |       |       |       |       |       |       |        |        |
| Database Setup           |       | ■■■■■ |       |       |       |       |       |       |       |        |        |
| Frontend Development     |       | ■■■■■ | ■■■■■ | ■■■■■ | ■■■■■ |       |       |       |       |        |        |
| Backend Development      |       |       |       | ■■■■■ | ■■■■■ | ■■■■■ |       |       |       |        |        |
| Implement features       |       |       |       |       |       | ■■■■■ | ■■■■■ | ■■■■■ |       |        |        |
| Integration and Testing  |       |       |       |       |       |       |       |       | ■■■■■ |        |        |
| Work on  'nice-to-haves' |       |       |       |       |       |       |       |       | ■■■■■ | ■■■■■■ |        |
| Submit project           |       |       |       |       |       |       |       |       |       | ■■■■■■ |        |
| Demo Day                 |       |       |       |       |       |       |       |       |       |        | ■■■■■■ |


## Nice-to-haves

- dashboard page
- login component
- search component
- responsive design
- dark theme


