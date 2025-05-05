
import gallery1 from '../assets/gallery-1.jpg';
import gallery2 from '../assets/gallery-2.jpg';
import gallery3 from '../assets/gallery-3.jpg';
import gallery4 from '../assets/gallery-4.jpg';
import gallery5 from '../assets/gallery-5.jpg';
import gallery6 from '../assets/gallery-6.jpg';

function Gallery() {
  const galleryItem = [
    { img: gallery1, name: 'Coffee' },
    { img: gallery2, name: 'Best Breakfast' },
    { img: gallery3, name: 'Some refreshments' },
    { img: gallery4, name: 'Eggs and Coffee Breakfast' },
    { img: gallery5, name: 'Heavy Lunch' },
    { img: gallery6, name: 'Honey Init' },
  ];
  return (
    <div className="w-full min-h-screen bg-amber-100 text-black py-16 px-6 text-center md:flex-col lg:flex-row md:text-left">
      <h2 className="text-3xl font-bold text-center mb-6 uppercase relative">
        Gallery
      </h2>
      <div className="w-16 h-1 bg-orange-500 mx-auto md:mx-0"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8">
        {galleryItem.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-lg text-center shadow-md hover:shadow-lg transition duration-300"
          >
            <img
              src={item.img}
              className="w-full h-48 sm:h-56 md:h-60 object-cover rounded-2xl mb-4 transform transition duration-500 hover:scale-105 cursor-zoom-in"
              alt={item.name}
            />
            <p className="font-bold underline cursor-pointer ">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;