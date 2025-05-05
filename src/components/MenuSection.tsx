import burgerFries from '../assets/burger-frenchfries.png';
import coldBeverages from '../assets/cold-beverages.png';
import refreshment from '../assets/refreshment.png';
import specialCombo from '../assets/special-combo.png';
import hotBeverages from '../assets/hot-beverages.png';
import desserts from '../assets/desserts.png';

function MenuSection() {
  const menuItems = [
    { img: hotBeverages, title: "Hot Beverages", desc: "Enjoy a variety of steaming hot drinks, including rich coffee, aromatic tea, and creamy hot chocolate." },
    { img: coldBeverages, title: "Cold Beverages", desc: "Refresh yourself with our chilled drinks, from iced coffee and fruit juices to milkshakes and smoothies." },
    { img: specialCombo, title: "The Special Combo", desc: "A perfect pairing of delicious food and beverages, carefully curated to satisfy your cravings." },
    { img: burgerFries, title: "Burger and French Fries", desc: "Savor our juicy burgers with crispy golden fries, made fresh to order with premium ingredients." },
    { img: desserts, title: "Desserts", desc: "Indulge in our sweet treats, including cakes, pastries, and ice cream, perfect for any occasion." },
    { img: refreshment, title: "Cold Refreshment", desc: "Stay cool with our refreshing selection of chilled beverages, infused with fruity and tangy flavors." }
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">OUR MENU</h2>
      <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
        {menuItems.map((item, index) => (
          <div key={index} className="text-center p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img src={item.img} alt={item.title} className="w-32 h-32 sm:w-36 sm:h-36 mx-auto mb-4 object-contain" />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuSection;