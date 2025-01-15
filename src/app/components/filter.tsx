





import Image from "next/image";
import long1 from "../components/public/images/long1.webp";
import long2 from "../components/public/images/long2.webp";
import long3 from "../components/public/images/long3.webp";
import long4 from "../components/public/images/long4.webp";
import pic4 from "..//components/public/images/pic5.webp";
import pic9 from "..//components/public/images/pic9.webp";
import pic6 from "..//components/public/images/pic4.webp";
import pic8 from "..//components/public/images/pic8.webp";

export default function Filter() {
  return (
    <div>
      <div className="collec text-left text-5xl font-serif pt-8 pl-6">
        <h1>Filter!</h1>
      </div>

      {/* Flex container with responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Product Card */}
        <div className="flex flex-col items-center justify-center h-auto rounded-sm shadow-2xl">
          <Image src={long1} alt="long1" height={340} width={340} />
          <h3>PKR 4,320</h3>
          <h2 className="text-red-600">Save PKR 3,200</h2>
          <button className="flex text-white bg-red-700 rounded-lg font-bold py-2 px-4 mt-2">40% Off</button>
        </div>

        <div className="flex flex-col items-center justify-center h-auto rounded-sm shadow-2xl">
          <Image src={long2} alt="long2" height={340} width={340} />
          <h3>PKR 4,320</h3>
          <h2 className="text-red-600">Save PKR 3,200</h2>
          <button className="flex text-white bg-red-700 rounded-lg font-bold py-2 px-4 mt-2">65% Off</button>
        </div>

        <div className="flex flex-col items-center justify-center h-auto rounded-sm shadow-2xl">
          <Image src={long3} alt="long3" height={340} width={340} />
          <h3>PKR 4,320</h3>
          <h2 className="text-red-600">Save PKR 3,200</h2>
          <button className="flex text-white bg-red-700 rounded-lg font-bold py-2 px-4 mt-2">90% Off</button>
        </div>

        <div className="flex flex-col items-center justify-center h-auto rounded-sm shadow-2xl">
          <Image src={long4} alt="long4" height={340} width={340} />
          <h3>PKR 4,320</h3>
          <h2 className="text-red-600">Save PKR 3,200</h2>
          <button className="flex text-white bg-red-700 rounded-lg font-bold py-2 px-4 mt-2">80% Off</button>
        </div>
      </div>

      {/* Similar grid for other product rows */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="flex flex-col items-center justify-center h-auto rounded-sm shadow-2xl">
          <Image src={pic4} alt="pic4" height={340} width={340} />
          <h3>PKR 4,320</h3>
          <h2 className="text-red-600">Save PKR 3,200</h2>
          <button className="flex text-white bg-red-700 rounded-lg font-bold py-2 px-4 mt-2">75% Off</button>
        </div>

        <div className="flex flex-col items-center justify-center h-auto rounded-sm shadow-2xl">
          <Image src={pic6} alt="pic6" height={340} width={340} />
          <h3>PKR 4,320</h3>
          <h2 className="text-red-600">Save PKR 3,200</h2>
          <button className="flex text-white bg-red-700 rounded-lg font-bold py-2 px-4 mt-2">40% Off</button>
        </div>

        <div className="flex flex-col items-center justify-center h-auto rounded-sm shadow-2xl">
          <Image src={pic8} alt="pic8" height={340} width={340} />
          <h3>PKR 4,320</h3>
          <h2 className="text-red-600">Save PKR 3,200</h2>
          <button className="flex text-white bg-red-700 rounded-lg font-bold py-2 px-4 mt-2">80% Off</button>
        </div>

        <div className="flex flex-col items-center justify-center h-auto rounded-sm shadow-2xl">
          <Image src={pic9} alt="pic9" height={340} width={340} />
          <h3>PKR 4,320</h3>
          <h2 className="text-red-600">Save PKR 3,200</h2>
          <button className="flex text-white bg-red-700 rounded-lg font-bold py-2 px-4 mt-2">50% Off</button>
        </div>
      </div>

      {/* Button for loading more items */}
      <div className="flex justify-center mt-6">
        <button className="text-white bg-green-600 font-bold rounded-md shadow-lg px-6 py-2 text-2xl">
          Load More
        </button>
      </div>

      {/* Visit Us Section */}
      <div className="save mt-12">
        <div className="map">
          <h1 className="text-center font-mono text-5xl pt-7">Visit Us!</h1>
          <p className="text-center text-2xl font-serif max-w-4xl mx-auto">
            Complete your look with our range of shoes and bags. Our shoes and bags are designed to meet your diverse needs.
            From classic heels to comfortable flats, we have a range of styles to suit your preferences. During our sale,
            enjoy unbeatable prices on our range of shoes and bags and take your look to the next level.
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="1740"
            height="600"
            className="mt-6 mx-auto"
          ></iframe>
        </div>
      </div>

      {/* Sections for different sale categories */}
      <div className="text-center mt-8">
        <h1 className="text-3xl font-serif mb-4"><b>Ideas Sale 2024: Celebrate with Up to 70% Off!</b></h1>
        <p className="text-xl font-sans mb-8">
          Celebrate our exciting summer sale at Gul Ahmed Ideas. Get ready to enjoy up to 70% off on a wide array of branded apparel and home essentials in Pakistan.
        </p>
        {/* Repeat similar structure for each section */}
      </div>
    </div>
  );
}
