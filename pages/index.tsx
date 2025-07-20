import Image from "next/image";
import { useState } from "react";
import Pill from "@/components/Pill ";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Card from "@/components/common/Card";
import Link from "next/link";

const Home: React.FC = () => {
  const filters = [
    "All",
    "Top Villa",
    "Free Reschedule",
    "Book Now, Pay Later",
    "Self CheckIn",
    "Instant Book",
  ];
  const [activeFilter, setActiveFilter] = useState<string>("All");

  return (
    <>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4">
        <section className="relative h-[400px] md:h-[500px] w-full rounded-xl overflow-hidden text-white text-center flex items-center justify-center mb-6">
          <Image
            src="/assets/hero.jpg"
            alt="hero"
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-10 px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 drop-shadow-lg">
  <span className="block mb-2">Find your favorite</span>
  <span className="block">place here!</span>
</h1>

            <p className="text-base md:text-lg drop-shadow-sm ">
              The best prices for over 2 million properties worldwide
            </p>
          </div>
        </section>
      </div>

      {/* Filter Section */}
      <section className="w-full mb-8">
  <div className="max-w-7xl mx-auto px-4">
    {/* Filter Pills and Buttons */}
    <div className="flex flex-wrap justify-between items-center gap-y-3 mb-6">
      {/* Filter Pills (Left) */}
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <Pill
            key={filter}
            label={filter}
            isActive={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          />
        ))}
      </div>

      {/* Filter + Sort Controls (Right) */}
      <div className="flex items-center gap-2">
        <button className="px-4 py-2 rounded-full border text-sm flex items-center gap-1 hover:bg-gray-100">
          Filter
          <Image src="/assets/filter.svg" alt="filter" width={16} height={16} />
        </button>

        <button className="px-4 py-2 rounded-full border text-sm text-gray-700 hover:bg-gray-100">
          Sort by: <strong className="ml-1">Highest Price</strong>
        </button>
      </div>
    </div>

    {/* FIXED: Cards are now inside the container */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
{PROPERTYLISTINGSAMPLE.map((property) => (
  <Link key={property.name} href={`/property/${property.name}`}>
    <Card
      title={property.name}
      imageUrl={property.image}
      description={`Price: $${property.price} | Rating: ${property.rating.toFixed(2)}`}
    />
  </Link>
))}

    </div>
  </div>
</section>


     
    </>
  );
};

export default Home;
