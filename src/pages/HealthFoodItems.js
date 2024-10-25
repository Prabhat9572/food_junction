import React from 'react';
import '../styles/pages/HealthFoodItems.scss';

// Sample images for health food items
const healthyItems = [
  { name: 'Quinoa Salad', description: 'Packed with protein and fiber, perfect for a light meal.', price: 10, image: 'https://cookieandkate.com/images/2017/08/best-quinoa-salad-recipe-3-225x225.jpg' },
  { name: 'Grilled Chicken', description: 'Lean protein for muscle building and weight management.', price: 12, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuC2DselGxx3dvaMGvjBRRtwUwtyE2awiMCQ&s' },
  { name: 'Avocado Toast', description: 'Rich in healthy fats and fiber, great for heart health.', price: 8, image: 'https://www.allrecipes.com/thmb/8NccFzsaq0_OZPDKmf7Yee-aG78=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AvocadoToastwithEggFranceC4x3-bb87e3bbf1944657b7db35f1383fabdb.jpg' },
  { name: 'Green Smoothie', description: 'A refreshing blend of spinach, kale, and fruits.', price: 6, image: 'https://static01.nyt.com/images/2024/01/10/multimedia/AS-green-smoothie-clkg/AS-green-smoothie-clkg-jumbo.jpg' },
  { name: 'Oatmeal Bowl', description: 'High in fiber and perfect for a nutritious breakfast.', price: 5, image: 'https://cdn.loveandlemons.com/wp-content/uploads/2019/01/overnight-oats-1.jpg' },
  { name: 'Chickpea Salad', description: 'Nutritious and full of flavor.', price: 9, image: 'https://www.themediterraneandish.com/wp-content/uploads/2023/12/TMD-Chickpea-Salad-Leads-01-Angle-Horizontal-500x500.jpg' },
  { name: 'Baked Salmon', description: 'Rich in omega-3 fatty acids.', price: 15, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1vLc0wzN-j_X0KlroHG45UMEfxGWgCiry-w&s' },
  { name: 'Greek Yogurt', description: 'High in protein and probiotics.', price: 4, image: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/323/323169/greek-yoghurt-in-bowl.jpg' },
  { name: 'Veggie Wrap', description: 'A healthy wrap filled with fresh vegetables.', price: 7, image: 'https://www.eatingwell.com/thmb/_KRmqSHZzUEWKQVE0uP3QLB98d4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/4526733-45129f82ed554ea1be3ac980d096a6f1.jpg' },
  { name: 'Fruit Bowl', description: 'A colorful mix of seasonal fruits.', price: 6, image: 'https://i.pinimg.com/736x/16/42/18/16421822d4db528343569b629d0babc8.jpg' },
  { name: 'Brown Rice Bowl', description: 'A wholesome meal base.', price: 8, image: 'https://www.cookshideout.com/wp-content/uploads/2012/08/Brown-Rice-Vegetable-Bowl-FI-500x375.jpg' },
  { name: 'Lentil Soup', description: 'High in protein and fiber.', price: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTwiwE3eGMsi3i-KSa2hzdolSWCEmSWGAg6w&s' },
  { name: 'Sweet Potato Fries', description: 'A healthy alternative to regular fries.', price: 6, image: 'https://www.2teaspoons.com/wp-content/uploads/2015/12/Sweet-Potato-Fries-IMG_9257-feature.jpg' },
  { name: 'Cottage Cheese', description: 'Low-fat protein option.', price: 4, image: 'https://www.greendna.in/cdn/shop/products/curd_fde822bd-928e-43ce-a12e-d4c06e3b80a1_540x.jpg?v=1626803363' },
  { name: 'Spinach Salad', description: 'Loaded with vitamins and minerals.', price: 8, image: 'https://pinchandswirl.com/wp-content/uploads/2017/08/Spinach-Salad-Served-in-a-white-ceramic-bowl.jpg' },
  { name: 'Zucchini Noodles', description: 'A low-carb alternative to pasta.', price: 9, image: 'https://www.inspiredtaste.net/wp-content/uploads/2016/08/Zucchini-Pasta-Recipe.jpg' },
  { name: 'Hummus Plate', description: 'Creamy and nutritious, served with veggies.', price: 7, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6zR8CJM4SMXlhO16p1MAAV_FUrRoVm3WhtA&s' },
  { name: 'Poke Bowl', description: 'A Hawaiian dish filled with fresh ingredients.', price: 14, image: 'https://turmericmecrazy.com/wp-content/uploads/2022/02/salmon-poke-recipe.jpg' },
  { name: 'Fruit Smoothie Bowl', description: 'Healthy and delicious breakfast option.', price: 10, image: 'https://www.tasteofhome.com/wp-content/uploads/2018/06/Berry-Smoothie-Bowl_EXPS_JMZ18_224489_B03_08_5b.jpg' },
  { name: 'Matcha Latte', description: 'Rich in antioxidants and refreshing.', price: 5, image: 'https://cdn.loveandlemons.com/wp-content/uploads/2023/06/iced-matcha-latte.jpg' },
  { name: 'Herbal Tea', description: 'A calming and healthy beverage.', price: 3, image: 'https://brodandtaylor.com/cdn/shop/articles/dehydrated-tea-thumb_1024x.jpg?v=1639765759' },
  { name: 'Nut Mix', description: 'A healthy snack full of nutrients.', price: 5, image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/nut-dry-fruit/r/k/g/1-mixed-nuts-seeds-15-in-1-dry-fruits-seeds-berries-mix-nut-mix-original-imagupgsgkh2eu4f.jpeg?q=20&crop=false' },
];

const HealthFoodItems = () => {
  const handleAddToCart = (item) => {
    console.log(`Added to cart: ${item.name}, Price: $${item.price}`);
    // Here you would also want to update your cart context/state
  };

  return (
    <div className="health-food-items">
      <h2 className="section-title">Healthy Food Options</h2>
      <p className="section-description">
        Looking for something healthy? Here are some handpicked items that are not only delicious but also great for your health!
      </p>

      <div className="items-list">
        {healthyItems.map((item, index) => (
          <div key={index} className="item-card">
            <img src={item.image} alt={item.name} className="item-image" />
            <h3 className="item-name">{item.name}</h3>
            <p className="item-description">{item.description}</p>
            <p className="item-price">Price: ${item.price}</p>
            <button className="add-to-cart-button" onClick={() => handleAddToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthFoodItems;
