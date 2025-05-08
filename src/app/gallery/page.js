// import React from 'react'
// import img1 from '@/images/g-1.png';
// import img2 from '@/images/g-2.png';
// import img3 from '@/images/g-3.png';
// import img4 from '@/images/g-4.png';
// import img5 from '@/images/g-5.png';
// import Image from 'next/image';


// const images = [
//   {
//     id: 1,
//     title: 'Image 1',
//     url: img1,
//   },
//   {
//     id: 2,
//     title: 'Image 2',
//     url: img2,
//   },
//   {
//     id: 3,
//     title: 'Image 3',
//     url: img3,
//   },
//   {
//     id: 4,
//     title: 'Image 4',
//     url: img4,
//   },
//   {
//     id: 5,
//     title: 'Image 5',
//     url: img5,
//   },
// ];


// function Gallery() {
//   return (
//     <>
//     <div className="max-w-6xl mx-auto px-6 py-12">
//   <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">📸 Project Gallery</h2>
//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {images.map((src, id) => (
//           <div
//             key={id}
//             className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
//           >
//             <Image
//               src={src.url}
//               alt="images"
//               className="w-full h-60 object-cover"
//             />
//           </div>
//         ))}
//       </div>


// </div>

// {/* <div className="p-6 bg-gray-100 min-h-screen">
//       <h2 className="text-3xl font-bold text-center mb-8">Stylish Image Grid</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {images.map((src, index) => (
//           <div
//             key={index}
//             className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
//           >
//             <img
//               src={src}
//               alt={`Image ${index + 1}`}
//               className="w-full h-60 object-cover"
//             />
//           </div>
//         ))}
//       </div>
//     </div> */}

//     </>
//   )
// }

// export default Gallery
"use client"
import React, { useState } from 'react';
import img1 from '@/images/g-1.png';
import img2 from '@/images/g-2.png';
import img3 from '@/images/g-3.png';
import img4 from '@/images/g-4.png';
import img5 from '@/images/g-5.png';
import img6 from '@/images/g-6.png';
import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const images = [
  { id: 1, title: 'Image 1', url: img1 },
  { id: 2, title: 'Image 2', url: img2 },
  { id: 3, title: 'Image 3', url: img3 },
  { id: 4, title: 'Image 4', url: img4 },
  { id: 5, title: 'Image 5', url: img5 },
  { id: 6, title: 'Image 6', url: img6 },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          📸 Project Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelectedImage(img.url)}
              className="cursor-pointer rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
            >
              <Image
                src={img.url}
                alt={img.title}
                className="w-full h-60 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50  flex items-center justify-center">
          <div className="relative max-w-3xl w-full mx-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-white text-black rounded-full p-1 shadow-lg hover:bg-gray-200 z-10"
            >
              ❌
            </button>
            
            <Zoom>
              <Image
                src={selectedImage}
                alt="Selected"
                className="rounded-lg object-contain w-full max-h-[80vh] mx-auto"
              />
            </Zoom>
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;
