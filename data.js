function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function getRandomFloat(min, max) {
  const str = (Math.random() * (max - min) + min).toFixed(2);

  return parseFloat(str);
}
// 'ThisIsTheStringToSplit'.match(/[A-Z][a-z]+|[0-9]+/g).join(" ")
export const foodItems = [
    {
      "id": 0,
      "name":"Samosa",
      "img":"https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe-500x500.jpg",
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
      "img":"https://static.toiimg.com/thumb/63841432.cms?width=1200&height=900",
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
      "name":"ChilliPotato",
      "img":"https://static.toiimg.com/photo/52532656.cms",
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
      "name":"Tikki",
      "img":"https://www.chefkunalkapur.com/wp-content/uploads/2022/04/aloo-tikki-chaat-2-1300x975.jpg?v=1648913714",
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
      "name":"VegPizza",
      "img":"https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/pizza-recipe-2-500x500.jpg",
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
      "img":"https://mcdonaldsblog.in/wp-content/uploads/2016/11/piri-piri.jpg",
      "type":"French",
      "restaurant":[
          {
            "name":"MCD",
            "price":getRandomInteger(110,120),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Burger King",
            "price":getRandomInteger(115,140),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Taco Bell",
            "price":getRandomInteger(115,125),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 6,
      "name":"Idli",
      "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGe0wTkPjv2qutNNgsoovXu0wwrbdPa7J2A&usqp=CAU",
      "type":"South Indian",
      "restaurant":[
          {
            "name":"Haldiram",
            "price":getRandomInteger(85,100),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Sagar Ratna",
            "price":getRandomInteger(105,120),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Vango",
            "price":getRandomInteger(85,100),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 7,
      "name":"Wraps",
      "img":"https://imagesvc.meredithcorp.io/v3/jumpstartpure/image?url=https://static.onecms.io/wp-content/uploads/sites/44/2019/08/26232542/3749306.jpg&w=640&h=360&q=90&c=cc",
      "type":"Mexican",
      "restaurant":[
          {
            "name":"Dazzles",
            "price":getRandomInteger(105,120),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Taco Bell",
            "price":getRandomInteger(105,120),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Gola",
            "price":getRandomInteger(105,120),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 8,
      "name":"RedSaucePasta",
      "img":"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/4/8/2/FNM_050114-Classic-Red-Sauce-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1397491331300.jpeg",
      "type":"Italian",
      "restaurant":[
          {
            "name":"Domino",
            "price":getRandomInteger(150,220),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Pizza Hut",
            "price":getRandomInteger(150,220),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Lapino",
            "price":getRandomInteger(120,180),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 9,
      "name":"NorthIndianThali",
      "img":"https://b.zmtcdn.com/data/pictures/9/20829/ac33c7c32bbe46e25c1b15d8668726e1.jpg",
      "type":"North Indian",
      "restaurant":[
          {
            "name":"Haldiram",
            "price":getRandomInteger(315,360),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Regency",
            "price":getRandomInteger(315,340),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Bikaner",
            "price":getRandomInteger(315,320),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 10,
      "name":"VadaSambhar",
      "img":"https://parulkirecipes.com/wp-content/uploads/2018/09/vada-sambhar.jpg",
      "type":"South Indian",
      "restaurant":[
          {
            "name":"Haldiram",
            "price":getRandomInteger(105,120),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Sagar Ratna",
            "price":getRandomInteger(115,140),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Vango",
            "price":getRandomInteger(65,100),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id":11,
      "name":"SpringRolls",
      "img":"https://cdn.tarladalal.com/members/9306/big/big_spring_rolls,_chinese_veg_spring_roll_recipe-14334.jpg",
      "type":"Chinese",
      "restaurant":[
          {
            "name":"Dazzles",
            "price":getRandomInteger(105,120),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Nathu",
            "price":getRandomInteger(105,120),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Hotel Pahal",
            "price":getRandomInteger(105,120),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 12,
      "name":"WhiteSaucePasta",
      "img":"https://tastedrecipes.com/wp-content/uploads/2021/09/White-Sauce-Pasta-1.jpg",
      "type":"Italian",
      "restaurant":[
          {
            "name":"Domino",
            "price":getRandomInteger(120,140),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Pizza Hut",
            "price":getRandomInteger(115,120),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Lapino",
            "price":getRandomInteger(105,120),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 13,
      "name":"DalMakhani",
      "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIFVCNFVjhaSVQu8z2Q3Ee-PXWm3d7ley9Rg&usqp=CAU",
      "type":"North Indian",
      "restaurant":[
          {
            "name":"Haldiram",
            "price":getRandomInteger(325,340),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Regency",
            "price":getRandomInteger(325,340),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Bikaner",
            "price":getRandomInteger(315,320),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 14,
      "name":"MasalaDosa",
      "img":"https://www.mydelicious-recipes.com/home/images/120_1200_960/mydelicious-recipes-masala-dosa-with-batter",
      "type":"South Indian",
      "restaurant":[
          {
            "name":"Haldiram",
            "price":getRandomInteger(185,220),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Sagar Ratna",
            "price":getRandomInteger(185,220),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Vango",
            "price":getRandomInteger(185,220),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 15,
      "name":"ChilliPaneer",
      "img":"https://www.yummytummyaarthi.com/wp-content/uploads/2014/09/1-27.jpg",
      "type":"Chinese",
      "restaurant":[
          {
            "name":"Dazzles",
            "price":getRandomInteger(315,320),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Nathu",
            "price":getRandomInteger(315,320),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Hotel Pahal",
            "price":getRandomInteger(315,320),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 16,
      "name":"Macroni",
      "img":"https://i1.wp.com/www.bharatzkitchen.com/wp-content/uploads/2019/09/10-min-macroni-3.jpg?fit=800%2C450&ssl=1",
      "type":"Italian",
      "restaurant":[
          {
            "name":"Domino",
            "price":getRandomInteger(115,120),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Pizza Hut",
            "price":getRandomInteger(115,120),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Lapino",
            "price":getRandomInteger(115,120),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 17,
      "name":"PaneerButterMasala",
      "img":"https://ministryofcurry.com/wp-content/uploads/2020/07/paneer-butter-masala_-2.jpg",
      "type":"North Indian",
      "restaurant":[
          {
            "name":"Haldiram",
            "price":getRandomInteger(315,320),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"BTW",
            "price":getRandomInteger(315,320),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Bikaner",
            "price":getRandomInteger(315,320),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 18,
      "name":"Uttapam",
      "img":"https://cdn2.foodviva.com/static-content/food-images/south-indian-recipes/uttapam/uttapam.jpg",
      "type":"South Indian",
      "restaurant":[
          {
            "name":"Haldiram",
            "price":getRandomInteger(125,180),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Sagar Ratna",
            "price":getRandomInteger(125,180),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Vango",
            "price":getRandomInteger(125,180),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 19,
      "name":"Momos",
      "img":"https://img-global.cpcdn.com/recipes/2da8cad7018f8486/1200x630cq70/photo.jpg",
      "type":"Chinese",
      "restaurant":[
          {
            "name":"Dazzles",
            "price":getRandomInteger(50,60),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Nathu",
            "price":getRandomInteger(50,60),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Regency",
            "price":getRandomInteger(50,60),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 20,
      "name":"Spaghetti",
      "img":"https://veganwithgusto.com/wp-content/uploads/2021/05/speedy-spaghetti-arrabbiata-featured-e1649949762421.jpg",
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
      "name":"Naan",
      "img":"https://static.toiimg.com/photo/53338316.cms",
      "type":"North Indian",
      "restaurant":[
          {
            "name":"Haldiram",
            "price":getRandomInteger(45,60),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Regency",
            "price":getRandomInteger(45,60),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Bikaner",
            "price":getRandomInteger(35,50),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 22,
      "name":"RasamRice",
      "img":"https://static.toiimg.com/photo/90636144/90636144.jpg?v=3",
      "type":"South Indian",
      "restaurant":[
          {
            "name":"Dosa Wala",
            "price":getRandomInteger(105,120),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Sagar Ratna",
            "price":getRandomInteger(105,120),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Vango",
            "price":getRandomInteger(105,120),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 23,
      "name":"Chowmein",
      "img":"https://uploads-ssl.webflow.com/5c481361c604e53624138c2f/60f2ea26313ff95e77db2713_Chowmein_1500%20x%201200.jpg",
      "type":"Chinese",
      "restaurant":[
          {
            "name":"Dazzles",
            "price":getRandomInteger(105,120),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Nathu",
            "price":getRandomInteger(105,120),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Regency",
            "price":getRandomInteger(105,120),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 24,
      "name":"GulabJamun",
      "img":"https://static.toiimg.com/thumb/63799510.cms?imgsize=1091643&width=800&height=800",
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
      "name":"CholleBhature",
      "img":"https://static.toiimg.com/thumb/65699460.cms?width=573&height=430",
      "type":"North Indian",
      "restaurant":[
          {
            "name":"Haldiram",
            "price":getRandomInteger(105,120),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"BTW",
            "price":getRandomInteger(105,120),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Bikaner",
            "price":getRandomInteger(105,120),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 26,
      "name":"SouthIndianThali",
      "img":"https://opt.toiimg.com/recuperator/img/toi/m-61275880/61275880.jpg&width=500&resizemode=4",
      "type":"South Indian",
      "restaurant":[
          {
            "name":"Haldiram",
            "price":getRandomInteger(215,220),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Sagar Ratna",
            "price":getRandomInteger(215,220),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Vango",
            "price":getRandomInteger(215,220),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 27,
      "name":"PavBhaji",
      "img":"https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/cgf7qsoqsvfwletamxt4",
      "type":"North Indian",
      "restaurant":[
          {
            "name":"Bikaner",
            "price":getRandomInteger(105,120),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Nathu",
            "price":getRandomInteger(105,120),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Haldiram",
            "price":getRandomInteger(105,120),
            "rating":getRandomFloat(1,5)
          },
      ]
    },

    {
      "id": 28,
      "name":"Laddu",
      "img":"https://muthuhealthyrecipes.com/wp-content/uploads/2020/11/Sweet-Laddu-Recipe.jpg",
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
      "name":"NonVegPizza",
      "img":"https://5.imimg.com/data5/MT/HW/MY-64895347/non-veg-pizza-500x500.png",
      "type":"Italian",
      "restaurant":[
          {
            "name":"Domino",
            "price":getRandomInteger(315,420),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Pizza Hut",
            "price":getRandomInteger(315,420),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Lapino",
            "price":getRandomInteger(315,420),
            "rating":getRandomFloat(1,5)
          },
      ]
    },
    {
      "id": 30,
      "name":"ColdDrink",
      "img":"https://www.bigbasket.com/media/uploads/p/l/251014_12-thums-up-soft-drink.jpg",
      "type":"Beverages",
      "restaurant":[
          {
            "name":"Haldiram",
            "price":getRandomInteger(35,40),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Pizza Hut",
            "price":getRandomInteger(35,40),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Lapino",
            "price":getRandomInteger(35,40),
            "rating":getRandomFloat(1,5)
          },
      ]
    },
    {
      "id": 31,
      "name":"Mojito",
      "img":"https://st3.depositphotos.com/1001069/14144/i/450/depositphotos_141441742-stock-photo-mojito-cocktail-on-table.jpg",
      "type":"Beverages",
      "restaurant":[
          {
            "name":"Haldiram",
            "price":getRandomInteger(105,120),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Dazzles",
            "price":getRandomInteger(105,120),
            "rating":getRandomFloat(1,5)
          },
          {
            "name":"Lapino",
            "price":getRandomInteger(105,120),
            "rating":getRandomFloat(1,5)
          },
      ]
    },
    
]