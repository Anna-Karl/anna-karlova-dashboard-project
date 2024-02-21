/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('products').del();
    await knex('products').insert([
        {
            "product_id": 1,
            "product_name": "Alfajores",
            "ingredients": "flour, butter, sugar, dulce de leche",
            "description": "Alfajores are traditional South American cookies made with two delicate buttery cookies sandwiched together with a layer of sweet dulce de leche.",
            "picture": "http://localhost:8080/images/alfajores.jpg"
          },
          {
            "product_id": 2,
            "product_name": "Brownie",
            "ingredients": "chocolate, butter, sugar, eggs, flour",
            "description": "Brownies are rich and fudgy chocolate desserts that are perfect for any chocolate lover. They're made with melted chocolate, butter, sugar, eggs, and flour.",
            "picture": "http://localhost:8080/images/brownie.jpg"
          },
          {
            "product_id": 3,
            "product_name": "Cake",
            "ingredients": "flour, sugar, butter, eggs, milk, vanilla",
            "description": "Cake is a classic dessert made with flour, sugar, butter, eggs, and flavorings such as vanilla. It's moist, fluffy, and perfect for any celebration.",
            "picture": "http://localhost:8080/images/cake.jpg"
          },
          {
            "product_id": 4,
            "product_name": "Cookies",
            "ingredients": "flour, butter, sugar, chocolate chips, vanilla",
            "description": "Cookies are delicious baked treats made with flour, butter, sugar, and chocolate chips. They're crispy on the edges and chewy in the center, with a rich buttery flavor.",
            "picture": "http://localhost:8080/images/cookies.jpg"
          },
          {
            "product_id": 5,
            "product_name": "Muffin",
            "ingredients": "flour, sugar, butter, eggs, milk, berries",
            "description": "Muffins are small, individual-sized cakes that are perfect for breakfast or a quick snack. They're made with flour, sugar, butter, eggs, and flavorings such as blueberries.",
            "picture": "http://localhost:8080/images/muffin.jpg"
          },
          {
            "product_id": 6,
            "product_name": "Pastry",
            "ingredients": "flour, butter, sugar, eggs, vanilla",
            "description": "Pastries are sweet or savory baked goods made with flour, butter, sugar, and eggs. They can be filled with fruits, creams, or meats, and are often served as desserts or snacks.",
            "picture": "http://localhost:8080/images/pastry.jpg"
          },
          {
            "product_id": 7,
            "product_name": "Truffles",
            "ingredients": "chocolate, cream, butter, flavorings",
            "description": "Truffles are luxurious chocolate candies made with a rich ganache center coated in cocoa powder or nuts. They're decadent and perfect for indulging in a little bit of luxury.",
            "picture": "http://localhost:8080/images/truffles.jpg"
          },
          {
            "product_id": 8,
            "product_name": "Fudge",
            "ingredients": "chocolate, sweetened condensed milk, butter, vanilla",
            "description": "Fudge is a rich and creamy candy made with chocolate, sweetened condensed milk, butter, and vanilla. It's smooth, decadent, and perfect for satisfying your sweet tooth.",
            "picture": "http://localhost:8080/images/fudge.jpg"
          },
          {
            "product_id": 9,
            "product_name": "Jammie Dodgers",
            "ingredients": "flour, butter, eggs, sugar, jam",
            "description": "Jammie Dodgers are classic British biscuits made with two shortbread cookies sandwiched together with a layer of raspberry or strawberry jam. They're sweet, buttery, and irresistible.",
            "picture": "http://localhost:8080/images/jammie_dodgers.jpg"
          },
        ]);
    };