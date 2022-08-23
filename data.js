function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function getRandomFloat(min, max) {
  const str = (Math.random() * (max - min) + min).toFixed(2);

  return parseFloat(str);
}
export const foodItems = [
    {
      "id": 0,
      "name":"Samosa",
      "img":"",
      "type":"North Indian",
      "restaurant":[
          {
            "name":"Haldiram",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"BTW",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Bikaner",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 1,
      "name":"Dosa",
      "img":"",
      "type":"South Indian",
      "restaurant":[
          {
            "name":"Haldiram",
            "price":getRandomInteger(150,250),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Sagar Ratna",
            "price":getRandomInteger(150,250),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Vango",
            "price":getRandomInteger(150,250),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 2,
      "name":"Chilli Potatao",
      "img":"",
      "type":"Chinese",
      "restaurant":[
          {
            "name":"Dazzles",
            "price":getRandomInteger(100,150),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Nathu",
            "price":getRandomInteger(100,150),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Regency",
            "price":getRandomInteger(100,150),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 3,
      "name":"Aloo Tikki",
      "img":"",
      "type":"North Indian",
      "restaurant":[
          {
            "name":"BTW",
            "price":getRandomInteger(250,280),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Halidram",
            "price":getRandomInteger(250,280),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"VHURPS Chat Bhandar",
            "price":getRandomInteger(200,250),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 4,
      "name":"Veg Pizza",
      "img":"",
      "type":"Italian",
      "restaurant":[
          {
            "name":"Domino",
            "price":getRandomInteger(250,280),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Pizza Hut",
            "price":getRandomInteger(250,280),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Lapino",
            "price":getRandomInteger(200,250),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 5,
      "name":"Fries",
      "img":"",
      "type":"French",
      "restaurant":[
          {
            "name":"MCD",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Burger King",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Taco Bell",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 6,
      "name":"Idli",
      "img":"",
      "type":"South Indian",
      "restaurant":[
          {
            "name":"Haldiram",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Sagar Ratna",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Vango",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 7,
      "name":"Wraps",
      "img":"",
      "type":"Mexican",
      "restaurant":[
          {
            "name":"Dazzles",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Taco Bell",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Gola",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 8,
      "name":"Pasta",
      "img":"",
      "type":"Italian",
      "restaurant":[
          {
            "name":"Domino",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Pizza Hut",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Lapino",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 9,
      "name":"Thali",
      "img":"",
      "type":"North Indian",
      "restaurant":[
          {
            "name":"Haldiram",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Regency",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Bikaner",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 10,
      "name":"Vada Sambhar",
      "img":"",
      "type":"South Indian",
      "restaurant":[
          {
            "name":"Haldiram",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Sagar Ratna",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Vango",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id":11,
      "name":"Spring Rolls",
      "img":"",
      "type":"Chinese",
      "restaurant":[
          {
            "name":"Dazzles",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Nathu",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Hotel Pahal",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 12,
      "name":"White Sauce Pasta",
      "img":"",
      "type":"Italian",
      "restaurant":[
          {
            "name":"Domino",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Pizza Hut",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Lapino",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 13,
      "name":"Dal Makhani with Naan(2 pcs)",
      "img":"",
      "type":"North Indian",
      "restaurant":[
          {
            "name":"Haldiram",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Regency",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Bikaner",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 14,
      "name":"Masala Dosa",
      "img":"",
      "type":"South Indian",
      "restaurant":[
          {
            "name":"Haldiram",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Sagar Ratna",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Vango",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 15,
      "name":"Chilli Paneer",
      "img":"",
      "type":"Chinese",
      "restaurant":[
          {
            "name":"Dazzles",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Nathu",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Hotel Pahal",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 16,
      "name":"Macroni",
      "img":"",
      "type":"Italian",
      "restaurant":[
          {
            "name":"Domino",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Pizza Hut",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Lapino",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 17,
      "name":"Panner Butter Masala",
      "img":"",
      "type":"North Indian",
      "restaurant":[
          {
            "name":"Haldiram",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"BTW",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Bikaner",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 18,
      "name":"Uttapam",
      "img":"",
      "type":"South Indian",
      "restaurant":[
          {
            "name":"Haldiram",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Sagar Ratna",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Vango",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 19,
      "name":"Momos",
      "img":"",
      "type":"Chinese",
      "restaurant":[
          {
            "name":"Dazzles",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Nathu",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Regency",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 20,
      "name":"Spaghetti",
      "img":"",
      "type":"Italian",
      "restaurant":[
          {
            "name":"Domino",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Pizza Hut",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Lapino",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 21,
      "name":"Yellow Dal",
      "img":"",
      "type":"North Indian",
      "restaurant":[
          {
            "name":"Haldiram",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"BTW",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Bikaner",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 22,
      "name":"Rasam Rice",
      "img":"",
      "type":"South Indian",
      "restaurant":[
          {
            "name":"Dosa Wala",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Sagar Ratna",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Vango",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 23,
      "name":"Chowmein",
      "img":"",
      "type":"Chinese",
      "restaurant":[
          {
            "name":"Dazzles",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Nathu",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Regency",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 24,
      "name":"Gulab Jamun",
      "img":"",
      "type":"Dessert",
      "restaurant":[
          {
            "name":"Halidram",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Bikaner",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Nathu Sweets",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 25,
      "name":"Cholle Bhatore",
      "img":"",
      "type":"North Indian",
      "restaurant":[
          {
            "name":"Haldiram",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"BTW",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Bikaner",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 26,
      "name":"South Indian Thali",
      "img":"",
      "type":"South Indian",
      "restaurant":[
          {
            "name":"Haldiram",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Sagar Ratna",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Vango",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 27,
      "name":"Pav Bhaji",
      "img":"",
      "type":"North Indian",
      "restaurant":[
          {
            "name":"Bikaner",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Nathu",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Haldiram",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 28,
      "name":"Ladoo",
      "img":"",
      "type":"Sweets",
      "restaurant":[
          {
            "name":"Nathu Sweets",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Rahul Bakery",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Bikaner",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
      ]
    },
    {
      "id": 29,
      "name":"Non-Veg Pizza",
      "img":"",
      "type":"Italian",
      "restaurant":[
          {
            "name":"Domino",
            "price":getRandomInteger(315,420),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Pizza Hut",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Lapino",
            "price":getRandomInteger(15,20),
            "rating":getRandomFloat(1,5)
          },
      ]
    },
]