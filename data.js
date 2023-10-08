const foodData =[
    {
        id:1,
        name:"Bacon Pizza",
        price:200,
        category:"Pizza",
        rating:3.5,
        imgSrc:'https://stordfkenticomedia.blob.core.windows.net/df-us/rms/media/recipemediafiles/recipes/retail/desktopimages/2018_bacon-and-egg-breakfast-pizza_26483-600.jpg?ext=.jpg'

    },
    {
        id:5,
        name:"Marinara Pizza",
        price:250,
        category:"Pizza",
        rating:5.0,
        imgSrc:'https://mission-food.com/wp-content/uploads/2023/07/Pizza-Marinara-Featured.jpg'

    },
    {
        id:2,
        name:"Chillipaper Pizza",
        price:270,
        category:"Pizza",
        rating:4.5,
        imgSrc:'https://media.istockphoto.com/id/184973821/photo/pizza-inferno.jpg?s=612x612&w=0&k=20&c=NzVVfFE_FAkqpQS2p_ht11yH02n3iQ7-hgNF0jWQMFQ='

    },
    {
        id:3,
        name:"Mexican Pizza",
        price:300,
        category:"Pizza",
        rating:2.0,
        imgSrc:'https://www.the-girl-who-ate-everything.com/wp-content/uploads/2018/06/taco-pizza-recipe-003.jpg'


    },
    {
        id:4,
        name:"Mozzarella Pizza",
        price:350,
        category:"Pizza",
        rating:4.0,
        imgSrc:'https://www.italianfoodforever.com/wp-content/uploads/2015/11/buratapizza.jpg'

    },
    {
        id:6,
        name:"Mushroom Pizza",
        price:349,
        category:"Pizza",
        rating:3.0,
        imgSrc:'https://www.bacinos.com/wp-content/uploads/2021/06/31-Best-Mushroom-Pizza-Recipes.jpg'

    },
    {
        id:7,
        name:"Veg-Biriyani",
        price:100,
        category:"biriyani",
        rating:3.7,
        imgSrc:'https://i.ytimg.com/vi/Do7ZdUodDdw/maxresdefault.jpg'

    },
    {
        id:8,
        name:"Chicken-Biriyani",
        price:140,
        category:"biriyani",
        rating:4.2,
        imgSrc:'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/chicken-biryani-recipe.jpg'

    },
    {
        id:9,
        name:"Beef-Biriyani",
        price:130,
        category:"biriyani",
        rating:4.5,
        imgSrc:'https://dwellbymichelle.com/wp-content/uploads/2021/04/Malabar-Beef-biriyani-.jpeg'

    },
    {
        id:10,
        name:"Mutton-Biriyani",
        price:180,
        category:"biriyani",
        rating:4.8,
        imgSrc:'https://www.cookwithnabeela.com/wp-content/uploads/2023/03/MuttonBiryani.webp'
    },
    {
        id:11,
        name:"Alfam-Mandi",
        price:720,
        category:"mandi",
        rating:4.7,
        imgSrc:'https://i.ytimg.com/vi/fzl06QZpeAE/maxresdefault.jpg'
    },
    {
        id:12,
        name:"Peri Peri-Mandi ",
        price:760,
        category:"mandi",
        rating:4.2,
        imgSrc:'https://i.ytimg.com/vi/JfjDd23MpeI/maxresdefault.jpg'
    },
    {
        id:13,
        name:"Beef Roast-Mandi ",
        price:800,
        category:"mandi",
        rating:4.6,
        imgSrc:'https://recipesaresimple.com/wp-content/uploads/2022/05/Beef-Mandi-recipe.jpeg'
    },
    {
        id:14,
        name:"Mutton-Mandi ",
        price:1000,
        category:"mandi",
        rating:4.9,
        imgSrc:'https://recipesaresimple.com/wp-content/uploads/2022/05/Beef-Mandi-recipe.jpeg'
    },
    {
        id:15,
        name:"Veg-Biriyani",
        price:100,
        category:"veg",
        rating:3.7,
        imgSrc:'https://i.ytimg.com/vi/Do7ZdUodDdw/maxresdefault.jpg'

    },
    {
        id:16,
        name:"Meals",
        price:50,
        category:"veg",
        rating:3.7,
        imgSrc:'https://saihomefood.in/cdn/shop/products/meals.jpg?v=1571216142'

    },
    {
        id:17,
        name:"Kuruma",
        price:40,
        category:"curry",
        rating:3.7,
        imgSrc:'https://i2.wp.com/curryandvanilla.com/wp-content/uploads/2019/06/Tamil-Style-Vegatable-Kurma-4b.jpg?fit=807%2C605&ssl=1'

    },
    {
        id:18,
        name:"Green-peas",
        price:30,
        category:"curry",
        rating:3.5,
        imgSrc:'https://i.ytimg.com/vi/xU8PP4qRxqE/maxresdefault.jpg'

    },
    {
        id:19,
        name:"Chicken",
        price:90,
        category:"curry",
        rating:4,
        imgSrc:'https://kitchenofdebjani.com/wp-content/uploads/2023/04/easy-indian-chicken-curry-Recipe-for-beginners-Debjanir-rannaghar.jpg'

    },
    {
        id:20,
        name:"Beef",
        price:110,
        category:"curry",
        rating:3.5,
        imgSrc:'https://i0.wp.com/www.pepperdelight.com/wp-content/uploads/2016/05/pepper-delight-beef-curry-3.jpg?resize=4640%2C3440'
    },
    {
        id:21,
        name:"Egg",
        price:30,
        category:"curry",
        rating:3.5,
        imgSrc:'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/egg-curry-recipe.jpg'
      },
      {
        id:22,
        name:"Pzhampori",
        price:10,
        category:"snacks",
        rating:4.5,
        imgSrc:'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sibyl_sunitha/Kerala_Style_Pazham_Pori_Recipe_Banana_Fritters_Recipe_.jpg'
    },
    {
        id:23,
        name:"Parippuvada",
        price:10,
        category:"snacks",
        rating:4.3,
        imgSrc:'https://1.bp.blogspot.com/-7raQlzIDb5g/XlXdnLhJk-I/AAAAAAAAYaY/nij91baG6QwcjFHqHGmCG6BIgzL3NVwzgCLcBGAsYHQ/s1600/parippu%2Bvada%2B5.JPG'
    },
    {
        id:24,
        name:"Ullivada",
        price:10,
        category:"snacks",
        rating:4.5,
        imgSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxF3Tgj15dAYSWLqStvgBRp6Z7x4WjxnRqHg&usqp=CAU'
     },
    {
        id:25,
        name:"Porotta",
        price:12,
        category:"snacks",
        rating:4.5,
        imgSrc:'https://2.bp.blogspot.com/_LiWeVtsgGBw/TJt1bnLa_OI/AAAAAAAAC5o/CUWMl27w1tY/s1600/DSC_0468.JPG'
     },
    {
        id:26,
        name:"Pathiri",
        price:12,
        category:"snacks",
        rating:4.5,
        imgSrc:'https://cdn1.foodviva.com/static-content/food-images/kerala-recipes/pathiri/pathiri.jpg'
    },
    {
        id:27,
        name:"Puttu",
        price:12,
        category:"snacks",
        rating:4.5,
        imgSrc:'https://upload.wikimedia.org/wikipedia/commons/c/ca/Puttu_%28Rice_Flour_steamed_cake%29.jpg'
     },
    {
        id:29,
        name:"Tea",
        price:10,
        category:"drinks",
        rating:4.5,
        imgSrc:'https://thefamiliarkitchen.com/wp-content/uploads/2020/03/IMG_2677-scaled.jpg'
    },
    {
        id:30,
        name:"Coffee",
        price:15,
        category:"drinks",
        rating:4.5,
        imgSrc:'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    
    {
        id:31,
        name:"Lime",
        price:10,
        category:"drinks",
        rating:4.5,
        imgSrc:'https://4.imimg.com/data4/HR/VP/MY-30165244/lemon-juice.jpg'
     },
    
    {
        id:32,
        name:"Mango",
        price:50,
        category:"drinks",
        rating:4.5,
        imgSrc:'https://www.cubesnjuliennes.com/wp-content/uploads/2022/07/Mango-Juice-Recipe.jpg'
    },
    
    {
        id:33,
        name:"Chikku",
        price:40,
        category:"drinks",
        rating:4.5,
        imgSrc:'https://5.imimg.com/data5/GI/LD/MY-28707171/chikku-and-dates-fiber-explosion.png'
    },
    
    {
        id:34,
        name:"Pineapple",
        price:40,
        category:"drinks",
        rating:4.5,
        imgSrc:'https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/646c88b374c4c6f89db63d51/pineapple-drink-1--640x640.webp'
      }
];
export{foodData}