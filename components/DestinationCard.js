// src/components/DestinationCard.tsx
import Image from "next/image";

interface DestinationProps {
  name: string;
  location: string;
  imageUrl: string;
  description: string;
}

export default function DestinationCard({
  name,
  location,
  imageUrl,
  description,
}: DestinationProps) {
  return (
    <div className="rounded-2xl shadow-lg overflow-hidden bg-white transition transform hover:scale-105 duration-300 hover:shadow-2xl">
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 rounded-t-2xl"></div>
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-900">{name}</h2>
        <p className="text-gray-600 text-sm mt-1">{location}</p>
        <p className="text-gray-700 mt-4 text-sm">{description}</p>
      </div>
    </div>
  );
}
