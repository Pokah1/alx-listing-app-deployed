import Image from "next/image";
import React from "react";
import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={250}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;