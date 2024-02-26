/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {

    await knex('reviews').del();
    await knex('reviews').insert([
        {
            "review_id": 1,
            "product_id": 9,
            "user_name": "TeaLover",
            "date": "2017-01-17",
            "rating": "4",
            "comment": "Jammie Dodgers paired perfectly with my afternoon tea. Reminded me of childhood days."
        },
        {
            "review_id": 2,
            "product_id": 8,
            "user_name": "FudgeFan",
            "date": "2017-02-16",
            "rating": "4",
            "comment": "The fudge was creamy and delicious, but a tad too sweet for my taste."
        },
        {
            "review_id": 3,
            "product_id": 7,
            "user_name": "ChocoAddict",
            "date": "2017-03-15",
            "rating": "5",
            "comment": "Truffles were divine! Rich, creamy, and indulgent. A chocolate lover's dream come true."
        },
        {
            "review_id": 4,
            "product_id": 6,
            "user_name": "PastryFan",
            "date": "2017-04-14",
            "rating": "5",
            "comment": "These pastries transported me to France with every bite. Flaky, buttery perfection!"
        },
        {
            "review_id": 5,
            "product_id": 5,
            "user_name": "MuffinLover",
            "date": "2017-05-13",
            "rating": "4",
            "comment": "Muffins were moist and flavorful, just the way I like them. Great for breakfast or a snack on the go."
        },
        {
            "review_id": 6,
            "product_id": 4,
            "user_name": "CookieCraver",
            "date": "2017-06-12",
            "rating": "4",
            "comment": "These cookies are a classic favorite. Always fresh and satisfying."
        },
        {
            "review_id": 7,
            "product_id": 3,
            "user_name": "CakeConnoisseur",
            "date": "2017-07-11",
            "rating": "5",
            "comment": "The cake was a showstopper at my party. Not only beautiful but also incredibly tasty. Highly recommend!"
        },
        {
            "review_id": 8,
            "product_id": 2,
            "user_name": "BrownieFanatic",
            "date": "2017-08-10",
            "rating": "5",
            "comment": "These brownies exceeded my expectations. Moist, decadent, and utterly delicious!"
        },
        {
            "review_id": 9,
            "product_id": 1,
            "user_name": "CookieLover",
            "date": "2017-09-09",
            "rating": "5",
            "comment": "Absolutely loved these alfajores! They're now my go-to snack whenever I need a pick-me-up."
        },
        {
            "review_id": 10,
            "product_id": 1,
            "user_name": "SweetTooth",
            "date": "2017-10-10",
            "rating": "4",
            "comment": "I'm a fan of alfajores, and these did not disappoint. The perfect combination of sweetness and texture."
        },
        {
            "review_id": 11,
            "product_id": 2,
            "user_name": "DessertFanatic",
            "date": "2017-11-09",
            "rating": "4",
            "comment": "The brownies were delicious, but I wish they were a bit more chocolatey."
        },
        {
            "review_id": 12,
            "product_id": 2,
            "user_name": "ChocoLover",
            "date": "2017-12-10",
            "rating": "5",
            "comment": "The brownies were the perfect combination of fudgy and chewy. I couldn't stop eating them!"
        },
        {
            "review_id": 13,
            "product_id": 1,
            "user_name": "SweetTooth",
            "date": "2018-02-11",
            "rating": "4",
            "comment": "I loved the alfajores! They were a bit too sweet for me, but still incredibly tasty."
        },
        {
            "review_id": 14,
            "product_id": 1,
            "user_name": "CookieMonster",
            "date": "2018-01-12",
            "rating": "5",
            "comment": "These alfajores were absolutely divine! Perfectly crumbly and filled with delicious dulce de leche."
        },
        {
            "review_id": 15,
            "product_id": 9,
            "user_name": "BiscuitLover",
            "date": "2018-03-13",
            "rating": "4",
            "comment": "These Jammie Dodgers brought back childhood memories! The perfect snack with a cup of tea."
        },
        {
            "review_id": 16,
            "product_id": 8,
            "user_name": "SweetTooth",
            "date": "2018-04-14",
            "rating": "4",
            "comment": "The fudge was deliciously creamy, but a tad too sweet for my liking."
        },
        {
            "review_id": 17,
            "product_id": 7,
            "user_name": "Chocoholic",
            "date": "2018-05-15",
            "rating": "5",
            "comment": "These truffles were a chocolate lover's dream! So rich and indulgent."
        },
        {
            "review_id": 18,
            "product_id": 6,
            "user_name": "PastryQueen",
            "date": "2018-06-18",
            "rating": "5",
            "comment": "The pastries were flaky and buttery, just like how they make them in Paris!"
        },
        {
            "review_id": 19,
            "product_id": 5,
            "user_name": "MorningLover",
            "date": "2018-07-16",
            "rating": "3",
            "comment": "The muffins were good, but a bit dry. Would have liked them more moist."
        },
        {
            "review_id": 20,
            "product_id": 5,
            "user_name": "MuffinMan",
            "date": "2018-08-17",
            "rating": "4",
            "comment": "These muffins were a delightful breakfast treat. Just the right amount of sweetness!"
        },
        {
            "review_id": 21,
            "product_id": 4,
            "user_name": "CookieFanatic",
            "date": "2018-09-13",
            "rating": "5",
            "comment": "These cookies are addictive! Crunchy on the outside, soft on the inside. A true delight."
        },
        {
            "review_id": 22,
            "product_id": 3,
            "user_name": "BakerQueen",
            "date": "2018-10-14",
            "rating": "5",
            "comment": "As a professional baker, I'm always on the lookout for quality cakes. This one exceeded my expectations!"
        },
        {
            "review_id": 23,
            "product_id": 3,
            "user_name": "SweetTooth",
            "date": "2018-11-15",
            "rating": "5",
            "comment": "The cake was beautifully decorated and tasted divine. Will definitely order again for my next celebration!"
        },
        {
            "review_id": 24,
            "product_id": 2,
            "user_name": "ChocoLover",
            "date": "2018-12-18",
            "rating": "5",
            "comment": "Best brownies I've ever had! Moist, rich, and chocolatey."
        },
        {
            "review_id": 25,
            "product_id": 1,
            "user_name": "CookieMonster",
            "date": "2019-01-16",
            "rating": "4",
            "comment": "These alfajores are like a little piece of heaven. Perfect with my afternoon tea!"
        },
        {
            "review_id": 26,
            "product_id": 1,
            "user_name": "User123",
            "date": "2019-02-17",
            "rating": "5",
            "comment": "Absolutely delicious! I can't get enough of these alfajores."
        }
    ]);
  };
