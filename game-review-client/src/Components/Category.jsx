import c1 from '../assets/1.png';
import c2 from '../assets/2.png';
import c3 from '../assets/3.png';
import c4 from '../assets/4.png';
import c5 from '../assets/5.png';
import c6 from '../assets/6.png';
import c7 from '../assets/7.png';
import c8 from '../assets/8.png';
import Title from './sheard/title';

const images = [c1, c2, c3, c4, c5, c6, c7, c8,];

export default function Category() {
  return (
    <div className=''>
      <div className='mb-6'>
        <Title title="Categories" />
        <p className='mb-8 text-center text-lg text-gray-500 max-w-sm mx-auto'>
          A brief description of the category and what users can expect to see.
        </p>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Category ${index + 1}`}
            className='w-full h-32 md:h-40'
          />
        ))}
      </div>
    </div>
  );
}
