import Samosa from './asset/Samosa.jpg'
import Dosa from './asset/Dosa1.jpg'
import ChilliPotato from './asset/ChilliPotato.jpg'
import Tikki from './asset/Tikki.jpg'
import VegPizza from './asset/Pizza1.jpg'
import Fries from './asset/Fries1.jpg'
import Idli from './asset/Idli.jpg'
import Wraps from './asset/Wraps.jpg'
import RedSaucePasta from './asset/RedSaucePasta.jpg'
import WhiteSaucePasta from './asset/WhiteSaucePasta.jpg'
import NorthIndianThali from './asset/NorthIndianThali.jpg'
import SouthIndianThali from './asset/SouthIndianThali.jpg'
import VadaSambhar from './asset/VadaSambhar.jpg'
import SpringRolls from './asset/SpringRolls.jpg'
import DalMakhani from './asset/DalMakhani.jpg'
import MasalaDosa from './asset/MasalaDosa.jpg'
import ChilliPaneer from './asset/ChilliPaneer.jpg'
import Macroni from './asset/Macroni.jpg'
import PaneerButterMasala from './asset/PaneerButterMasala.jpg'
import Uttapam from './asset/Uttapam.jpg'
import Spaghetti from './asset/Spaghetti.jpg'
import Momos from './asset/Momos.jpg'
import RasamRice from './asset/RasamRice.jpg'
import Naan from './asset/Naan.jpg'
import GulabJamun from './asset/GulabJamun.jpg'
import Chowmein from './asset/Chowmein.jpg'
import PavBhaji from './asset/PavBhaji.jpg'
import CholleBhature from './asset/CholleBhature.jpg'
import NonVegPizza from './asset/NonVegPizza.png'

import Laddu from './asset/Laddu.jpg'

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
      "img":{Samosa},
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
      "img":{Dosa},
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
      "img":{ChilliPotato},
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
      "img":{Tikki},
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
      "img":{VegPizza},
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
      "img":{Fries},
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
      "img":{Idli},
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
      "img":{Wraps},
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
      "img":{RedSaucePasta},
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
      "img":{NorthIndianThali},
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
      "img":{VadaSambhar},
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
      "img":{SpringRolls},
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
      "img":{WhiteSaucePasta},
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
      "img":{DalMakhani},
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
      "img":{MasalaDosa},
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
      "img":{ChilliPaneer},
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
      "img":{Macroni},
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
      "img":{PaneerButterMasala},
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
      "img":{Uttapam},
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
      "img":{Momos},
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
      "img":{Spaghetti},
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
      "img":{Naan},
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
      "img":{RasamRice},
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
      "img":{Chowmein},
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
      "img":{GulabJamun},
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
      "img":{CholleBhature},
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
      "img":{SouthIndianThali},
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
      "img":{PavBhaji},
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
      "img":{Laddu},
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
      "img":{NonVegPizza},
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
]