import { PropertyProps } from "@/interfaces/index";
import Image from "next/image";
import Link from "next/link";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="container mx-auto p-6">
      {/* Title & Location */}
      <h1 className="text-4xl font-bold">{property.name}</h1>
      <div className="flex items-center space-x-2 mt-2">
        <span className="text-yellow-500">⭐{property.rating}</span>
        <span>
          {property.address.city}, {property.address.country}
        </span>
      </div>

      {/* Image */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="relative col-span-2 w-full h-96">
          <Image
            src={property.image}
            alt={property.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Description */}
      {property.description && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Description</h2>
          <p>{property.description}</p>
        </div>
      )}

      {/* Amenities */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">What this place offers</h2>
        <ul className="flex flex-wrap space-x-4 mt-2">
          {property.category.map((amenity, index) => (
            <li key={index} className="bg-gray-200 p-2 rounded-md">
              {amenity}
            </li>
          ))}
        </ul>
      </div>

      {/* Reviews */}
      {property.reviews && property.reviews.length > 0 && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Reviews</h2>
          <div className="space-y-4">
            {property.reviews.map((review, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
                <p className="font-semibold">{review.user}</p>
                <p className="text-yellow-600">{review.rating} ⭐</p>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
          
        </div>
      )}

        {/* Booking Section */}
        <div className="mt-6">
            <h2 className="text-2xl font-semibold">Book Now</h2>
            <p className="text-lg font-bold mt-2">${property.price} per night</p>
            <Link href={`/booking/${property.name}`}>
            <button className="mt-4 bg-[#34967C] text-white px-6 py-2 rounded-md hover:bg-[#2c7a5a] transition">
                Book Now
            </button>
            </Link>
            
                        </div>
                        <Link href={`/`}>
            <button className="mt-4 bg-[#34967C] text-white px-6 py-2 rounded-md hover:bg-[#2c7a5a] transition">
                Return Home
            </button>
            </Link>
    </div>
  );
};

export default PropertyDetail;
