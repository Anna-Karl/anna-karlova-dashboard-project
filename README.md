# Project Title
Dashboard: Admin Panel Statistic for Businesses

## Overview

 The app is a comprehensive dashboard designed to streamline the management of local bakeries specializing in cakes, providing owners and managers with valuable insights into sales performance, inventory management, and customer preferences.

### Problem

Cake businesses often struggle with effectively managing their operations, leading to challenges such as stockouts, inefficient inventory management, and difficulty in understanding customer preferences. The Dashboard addresses these pain points by offering a centralized platform for data analysis and empowering bakery owners to make informed decisions and optimize their operations for success.

### User Profile

Owners and managers of cake businesses will use this app to gain actionable insights into their operations. They will access the dashboard through a web browser on their desktop or mobile device. Special considerations include the need for intuitive user interfaces and customizable reporting features to accommodate different business needs.

### Features

- As a user, I want to be able to view real-time sales data, including revenue, order volume, and average transaction value. 
- As a user, I want to be able to analyze sales trends over time
- As a user, I want to be able to analyze customer preferences
- As a user, I want to be able to see the customer reviews for each product item
- As a user, I want to be able to add, edit, and delete the existing items


## Implementation

### Tech Stack

- React, TypeScript, MySQL (or PostgreSQL)
- Client libraries: react, react-router-dom, axios,
- Server libraries: knex, express
- Style: Tailwind CSS
- Graphs: Chart.js

### APIs

- No external APIs will be used for the first sprint

### Sitemap
- Header -> Logo, Search product, SignIn
- Sidebar -> Logo, Menu, Settings
- Home Page -> List of product (add, edit, delete)-> Product description
- Dashboard  -> Main statistic (Average Rating, ), Visual statistic (Total revenue in %, Revenue by month)

### Mockups

![app page design sketch]("(https://github.com/Anna-Karl/anna-karlova-dashboard-project/blob/main/assets/Mockup.jpeg)")

### Data

- Product: name, picture, description, price, reviews, revenue
- Sales: date, time, product, quantity, revenue

### Endpoints

GET /product: Retrieve inventory data
GET /sales: Retrieve sales data
PUT /product: Update product item
POST /product: Add product item
DELETE /product: Delete product item

### Auth

Authentication/authorization is a nice-to-haves part 

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

- authentication/authorization
- responsive design
- add dark theme
- animation of graphs/numbers
- ability to choice period of time
- add more graphs: purchasing patterns and trends

