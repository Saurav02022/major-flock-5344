import { ADD_DATA } from "../constants/action-types";

const initialState = {
  data : [
    {
      id: 1,
      title: "Britannia Winkin' Cow Chocolicious Thick Milkshake, 200 ml",
      body: "Britannia Winkin' Cow Thick Chocolate Milk Shake brings the goodness of Chocolate milkshakes in a convenient and lasting tetra pack. You can now enjoy this summer-delight all year long! When the abundance of thick Britannia milk pairs with your favourite chocolate flavour, we get an appetizing shake that’s as tasty as healthy. Enriched with calcium and protein, the chocolate thick shake is the yummiest way to start the day. Believing in delivering fresh and healthy products, Britannia India manufactures some of India's favourite brands like 50-50, Tiger, NutriChoice, Bourbon, Good Day, Milk Bikis and Little Hearts.",
      rating: {
        rate: 4.3,
        count: 614,
      },
      quantity: "200ml",
      price: 30,
      img: "https://www.bigbasket.com/media/uploads/p/m/40165622_6-britannia-winkin-cow-chocolicious-thick-milkshake.jpg",
      category: "Dairy Summer Drinks",
    },
    {
      id: 2,
      title: "Hersheys Milk Shake - Chocolate, 180 ml",
      body: "Fortified with essential nutrients like Calcium and vitamins. It has 30% more Calcium than Cows Milk. • The awesome, Fun Chocolate wala taste and Doodh ki shakti in one package!!! • Taste of Hersheys World-Famous Chocolates.",
      rating: {
        rate: 4.2,
        count: 3029,
      },
      quantity: "180ml",
      price: 26.26,
      img: "https://www.bigbasket.com/media/uploads/p/m/40088412_6-hersheys-milk-shake-chocolate.jpg",
      category: "Dairy Summer Drinks",
    },
    {
      id: 3,
      title: "Hersheys Milk Shake - Strawberry, 180 ml",
      body: "Fortified with essential nutrients like Calcium and vitamins. It has 30% more Calcium than Cows Milk. • The awesome, Fun Chocolate wala taste and Doodh ki shakti in one package!!! • Taste of Hersheys World-Famous Chocolates.",
      rating: {
        rate: 4.1,
        count: 1379,
      },
      quantity: "180ml",
      price: 26.26,
      img: "https://www.bigbasket.com/media/uploads/p/m/40088414_13-hersheys-milk-shake-strawberry.jpg",
      category: "Dairy Summer Drinks",
    },
    {
      id: 4,
      title:
        "Real Milk Power Milkshake Frappe - Belgian Chocolate, Rich In Calcium & Vitamin D, 180 ml",
      body: "Real Milk Power Frappe Belgian Chocolate Milkshake has the goodness of milk and Belgian Chocolate. It has 50% more calcium and vitamin D2 than Cow Milk (based on values as per NIN, ICMR). It has no added preservative and is a good source of protein. Taste and health in one packet. It is made from UHT treated flavoured toned milk. Enjoy this to tame your small hunger pangs. Real Milkshake comes in 4 flavours – Belgian Chocolate, Alphonso Mango, French Vanilla and Strawberry.",
      rating: {
        rate: 4.1,
        count: 267,
      },
      quantity: "180ml",
      price: 24.9,
      img: "https://www.bigbasket.com/media/uploads/p/m/40199539_3-real-milk-power-milkshake-frappe-belgian-chocolate-rich-in-calcium-vitamin-d.jpg",
      category: "Dairy Summer Drinks",
    },
    {
      id: 5,
      title: "Britannia Winkin' Cow Strawbericious Thick Milkshake, 200 ml",
      body: "Real Milk Power Frappe Belgian Chocolate Milkshake has the goodness of milk and Belgian Chocolate. It has 50% more calcium and vitamin D2 than Cow Milk (based on values as per NIN, ICMR). It has no added preservative and is a good source of protein. Taste and health in one packet. It is made from UHT treated flavoured toned milk. Enjoy this to tame your small hunger pangs. Real Milkshake comes in 4 flavours – Belgian Chocolate, Alphonso Mango, French Vanilla and Strawberry.",
      rating: {
        rate: 4.1,
        count: 778,
      },
      quantity: "200ml",
      price: 26.25,
      img: "https://www.bigbasket.com/media/uploads/p/m/40165624_6-britannia-winkin-cow-strawbericious-thick-milkshake.jpg",
      category: "Dairy Summer Drinks",
    },
    {
      id: 6,
      title:
        "Sunfeast Dark Fantasy Chocolate Milkshake - With Real Belgian Chocolate, Thick & Creamy, 180 ml Bottle",
      body: "Cant get enough chocolates? Just get Sunfeast Dark Fantasy Chocolate Shake. A chocolate milkshake is rich that you can't wait to give it a try without feeling guilty. A thick and creamy milkshake, Dark Fantasy Chocolate Shake has real Belgian chocolate in it. All the chocolate lovers can now rejoice as they can indulge in this heavenly chocolate concoction whenever they crave something chocolatey! Dark Fantasy Chocolate Shake is delicious in taste and rich in calcium and protein. So, enjoy this rich and creamy shake to recharge and turn your mood around.",
      rating: {
        rate: 4.2,
        count: 598,
      },
      quantity: "180ml",
      price: 29.75,
      img: "https://www.bigbasket.com/media/uploads/p/m/40211835_3-sunfeast-chocolate-shake-with-real-belgian-chocolate.jpg",
      category: "Dairy Summer Drinks",
    },
    {
      id: 7,
      title: "Cavins Milkshake - Strawberry, 200 ml Tetra Pack",
      body: "Cavins milkshake is a divine combination where the goodness of milk meets your favourite flavours in a thick and creamy milkshake. This is a healthy mid-meal snack for your children with Calcium, Vitamin A and D no added water. Calcium and Vitamin D support strong bones and teeth.",
      rating: {
        rate: 4.2,
        count: 712,
      },
      quantity: "200ml",
      price: 26.26,
      img: "https://www.bigbasket.com/media/uploads/p/m/30007713_8-cavins-milkshake-strawberry.jpg",
      category: "Dairy Summer Drinks",
    },
    {
      id: 8,
      title:
        "Sunfeast Badam Milkshake - With Real Almond Bits, Thick & Creamy, 180 ml Bottle",
      body: "Tickle your tastebuds with the rich flavour of a thick, creamy Sunfeast Badam Milkshake. The goodness of milk is coupled with the goodness of almonds to give you this divine concoction. The milkshake also has chunky almond bits in it. So, you don't miss the crunchy texture! Sunfeast Badam Milkshake is delicious in taste and rich in calcium and protein. So, enjoy this rich and creamy shake to recharge and turn your mood around.",
      rating: {
        rate: 4.2,
        count: 110,
      },
      quantity: "180ml",
      price: 31.5,
      img: "https://www.bigbasket.com/media/uploads/p/m/40211833_3-sunfeast-badam-milkshake-with-real-badam-bits.jpg",
      category: "Dairy Summer Drinks",
    },
    {
      id: 9,
      title: "Hersheys Milk Shake - Cookies & Creme, 180 ml",
      body: "Fortified with essential nutrients like Calcium and vitamins. It has 30% more Calcium than Cows Milk. • The awesome, Fun Chocolate wala taste and Doodh ki shakti in one package!!! • Taste of Hersheys World-Famous Chocolates",
      rating: {
        rate: 4.1,
        count: 1704,
      },
      quantity: "180ml",
      price: 32.2,
      img: "https://www.bigbasket.com/media/uploads/p/m/40088413_13-hersheys-milk-shake-cookies-creme.jpg",
      category: "Dairy Summer Drinks",
    },
    {
      id: 10,
      title: "Cavins Milkshake - Vanilla, 200 ml Tetra Pack",
      body: "Cavin’s milkshake is a divine combination where the goodness of milk meets your favourite flavours in a thick and creamy milkshake. This is a healthy mid-meal snack for your children with Calcium, Vitamin A and D no added water. Calcium and Vitamin D support strong bones and teeth.",
      rating: {
        rate: 4.3,
        count: 1237,
      },
      quantity: "200ml",
      price: 26.26,
      img: "https://www.bigbasket.com/media/uploads/p/m/40088413_13-hersheys-milk-shake-cookies-creme.jpg",
      category: "Dairy Summer Drinks",
    },
    {
      id: 11,
      title: "Tasties Nacho Chips - Jalapeno, 2x60 g Multipack",
      body: "The Tasties Nacho Chips - Jalapeno could be your perfect party snack option or something for you to munch on during movie nights. It is made with premium quality corn and spicy jalapenos that makes sure you get the best quality nachos right on your plate. The nachos are great when paired with mayo or cheese. You can also make yourself a nachos chaat by adding corainder, tomatoes and drizzling chaat masala on top. Explore Tasties' full range of products from baked snacks, gourmet popcorn and roasted seeds. Features: -Made in India",
      rating: {
        rate: 4,
        count: 1422,
      },
      quantity: "120g",
      price: 36.67,
      img: "https://www.bigbasket.com/media/uploads/p/s/1212648_2-tasties-nacho-chips-jalapeno.jpg",
      category: "Nachos & Chips",
    },
    {
      id: 12,
      title: "Tasties Nacho Chips - Cheese, 2x150 g Multipack",
      body: "The Tasties Nacho Chips - Jalapeno could be your perfect party snack option or something for you to munch on during movie nights. It is made with premium quality corn and spicy jalapenos that makes sure you get the best quality nachos right on your plate. The nachos are great when paired with mayo or cheese. You can also make yourself a nachos chaat by adding corainder, tomatoes and drizzling chaat masala on top. Explore Tasties' full range of products from baked snacks, gourmet popcorn and roasted seeds. Features: -Made in India",
      rating: {
        rate: 4.1,
        count: 1578,
      },
      quantity: "300g",
      price: 86.53,
      img: "https://www.bigbasket.com/media/uploads/p/l/1212653_2-tasties-nacho-chips-cheese.jpg",
      category: "Nachos & Chips",
    },
    {
      id: 13,
      title: "Tasties Nacho Chips - Peri-Peri, 2x60 g Multipack",
      body: "The Tasties Nacho Chips - Jalapeno could be your perfect party snack option or something for you to munch on during movie nights. It is made with premium quality corn and spicy jalapenos that makes sure you get the best quality nachos right on your plate. The nachos are great when paired with mayo or cheese. You can also make yourself a nachos chaat by adding corainder, tomatoes and drizzling chaat masala on top. Explore Tasties' full range of products from baked snacks, gourmet popcorn and roasted seeds. Features: -Made in India",
      rating: {
        rate: 4,
        count: 916,
      },
      quantity: "120g",
      price: 73.34,
      img: "https://www.bigbasket.com/media/uploads/p/l/1212651_1-tasties-nacho-chips-peri-peri.jpg",
      category: "Nachos & Chips",
    },
    {
      id: 14,
      title: "Cornitos Nacho Chips - Cheese & Herbs, 60 g Pouch",
      body: "Cornitos Nacho Crisps Cheese and Herbs is the unique combination of cheddar cheese and cool Italian herbs, you will fall in love for sure. It is 100% corn snack and contains up to 40% less oil than regular potato chips. It has zero cholesterol and trans fat making it a healthier snack for you which you can munch any time of the day you like.",
      rating: {
        rate: 4.2,
        count: 3810,
      },
      quantity: "60g",
      price: 24.15,
      img: "https://www.bigbasket.com/media/uploads/p/l/30005535_3-cornitos-nacho-chips-cheese-herbs.jpg",
      category: "Nachos & Chips",
    },
    {
      id: 15,
      title: "Graminway Healthy Ragi Chips, 100 g",
      body: "Graminway Healthy Ragi Chips is a nutritious snacking option for your all-time munch cravings. Remember how you let the weighing machine win last time when you binged on your favourite potato chips, well, so they have come up with a healthier and a more power packed version of those dreaded chips for you. While you get lost in the taste of these lip-smacking chips, the goodness of ragi will keep your health engine running. Graminway gives you a perfect combination of health and taste. At Graminway, they believe that everyone deserves to live a full and healthy life. The intake of their food supplements will provide a good foundation for a healthy lifestyle. They are committed to providing the highest quality products at affordable price. They are a company with a purpose beyond profit and want to make a lasting difference in the world. Graminway aims to provide clean, natural, and healthy products without compromising on the flavours and taste. They produce them in small batches, which helps maintain freshness and preserve the ingredient texture. By not stockpiling, each product is as fresh as possible when it reaches your doorstep.",
      rating: {
        rate: 4.2,
        count: 257,
      },
      quantity: "100g",
      price: 99,
      img: "https://www.bigbasket.com/media/uploads/p/l/40147725_1-graminway-healthy-ragi-chips.jpg",
      category: "Nachos & Chips",
    },
    {
      id: 16,
      title: "Tex Mex Salsalito Wrap Tortilla, 348 g",
      body: "Salsalito's specially prepared Tortilla Wraps are soft and delicious. Making your favourite Tex Mex delicacies just got way easier. All you have to do is heat it, wrap it & eat it with your favourite filling it's as simple as that.",
      rating: {
        rate: 4.4,
        count: 405,
      },
      quantity: "348g",
      price: 190,
      img: "https://www.bigbasket.com/media/uploads/p/l/100391319_3-tex-mex-salsalito-wrap-tortilla.jpg",
      category: "Nachos & Chips",
    },
    {
      id: 17,
      title:
        "Slurrp Farm Mighty Puff - Tangy Tomato, 8x20 g Multipack",
      body: "Salsalito's specially prepared Tortilla Wraps are soft and delicious. Making your favourite Tex Mex delicacies just got way easier. All you have to do is heat it, wrap it & eat it with your favourite filling it's as simple as that.",
      rating: {
        rate: 3.8,
        count: 156,
      },
      quantity: "160g",
      price: 120,
      img: "https://www.bigbasket.com/media/uploads/p/l/1214834_1-slurrp-farm-mighty-puff-tangy-tomato.jpg",
      category: "Nachos & Chips",
    },
    {
      id: 18,
      title: "Parle Fulltoss Noodle Masala, 19+4g",
      body: "A snacking sensation which brings a little flavour and fun to everyone. It is a flaming hot rice chip with the brakes of spices. Made with rice flour, these snacks look and crunches hot. The masala spice has a complex flavour and it has an addictively bittersweet, slightly citrusy aftertaste and a strong but pleasant cumulative burn. Take one bite of this masala tadka flavour and you won’t just stop at one. It will keep making you Eat on repeat. Every twisted turn explodes with masala flavours that are perfect to scoop up your favourite dips.",
      rating: {
        rate: 4.1,
        count: 125,
      },
      quantity: "23g",
      price: 5,
      img: "https://www.bigbasket.com/media/uploads/p/l/40204975_2-parle-fulltoss-noodle-masala.jpg",
      category: "Nachos & Chips",
    },
    {
      id: 19,
      title: "Wingreens Farms Baked Pita Bread Crisps - Chilli & Garlic, 100 g",
      body: "Wingreens Farms Baked Chili Garlic Pita Bread Crisps that is made with wheat flour, chilli flakes, garlic, and other spices. It is light, flavourful and makes a perfect snack. These crisps are baked and not fried which makes them low in carbs and fat. They are not only versatile but also healthier than other crisps. It has a great texture and flavour. It's a healthy alternative when you've got an intense junk food craving. It goes well along with hummus or some cheese. It does not contain any added flavour, colour or preservatives.",
      rating: {
        rate: 3.7,
        count: 105,
      },
      quantity: "100g",
      price: 105,
      img: "https://www.bigbasket.com/media/uploads/p/l/30010746_4-wingreens-farms-baked-pita-bread-crisps-chilli-garlic.jpg",
      category: "Nachos & Chips",
    },
    {
      id: 20,
      title: "BRB Popped Chips Bhel Flavour, 52 g",
      body: "Enjoy the BRB Bhel Flavour Potato chip that is neither Baked nor fried but are Popped Chips. With a Light crunchy flavour these chips are Smartphone-Friendly for a smudge-free experience. It is a healthier snacking option because it contains 60% less fat compared to fried potato chips and contains roughly only 100 calories in every Solo Pack. Moreover, it's gluten-Free So, whenever you feel the urge to snack, shout out BRB!",
      rating: {
        rate: 4.2,
        count: 30,
      },
      quantity: "52g",
      price: 40,
      img: "https://www.bigbasket.com/media/uploads/p/l/40205311_2-brb-popped-chips-bhel-flavour.jpg",
      category: "Nachos & Chips",
    },
  ],
};

function productReducer(state = initialState.data, action) {
  if (action.type === ADD_DATA) {
    return Object.assign({}, state, {
        data: state.concat(action.payload),
    });
  }
  return state;
}

export default productReducer;
