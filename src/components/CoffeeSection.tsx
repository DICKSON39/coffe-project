
import coffeeHero from '../assets/coffee-hero-section.png'; // Adjust path if needed

function CoffeeSection() {
  return (
    <div className="w-full h-screen bg-[#3b1515] text-white p-12  flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
      {/* Text Section */}
      <div className="max-w-md text-left">
        <h2 className="text-4xl font-bold text-amber-400">Best Coffee</h2>
        <h3 className="text-3xl font-semibold mt-2">
          Make Your day great with our special Coffee!
        </h3>
        <p className="text-lg mt-4">
          Welcome to our Coffee paradise, where every bean tells a story and every cup sparks joy.
        </p>
        
        {/* Buttons */}
        <div className="flex space-x-4 mt-6">
          <button className="bg-blue-950 border -2 border-amber-100 text-white px-6 py-3 rounded-md font-medium hover:bg-transparent  transition">
            Order Now
          </button>
          <button className="bg-transparent border-2 border-amber-500 text-amber-500 px-6 py-3 rounded-md font-medium hover:bg-amber-500 hover:text-white transition">
            Contact Us
          </button>
        </div>
      </div> 

      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src={coffeeHero}
          alt="Coffee Hero"
          className="w-full  mx-auto md:mx-0 float-right "
        />
      </div>
    </div>
  );
}

export default CoffeeSection;