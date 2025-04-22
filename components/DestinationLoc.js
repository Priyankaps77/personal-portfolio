import React from "react";

const DestinationLoc = ({ selected }) => {
  const destination = selected && selected.length > 0 ? selected[0] : null;
  console.log(destination, "destination");

  if (!destination) {
    return (
      <div className="text-center py-10 text-xl">Destination not found.</div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-5">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-96 object-cover rounded-lg"
        />
        <h2 className="text-3xl font-bold text-gray-800 mt-6">
          {destination?.name}
        </h2>
        <p className="text-gray-600 text-lg mt-2">{destination?.location}</p>
        <div className="bg-white shadow-md rounded-2xl p-4 mt-4 space-y-3">
          <div className="flex items-center justify-between text-gray-600 font-semibold text-base">
            <span>Nearest Railway Station:</span>
            <span className="text-gray-800 font-medium">
              {destination?.nearestRailwayStation}
            </span>
          </div>
          <div className="flex items-center justify-between text-gray-600 font-semibold text-base">
            <span>Nearest Airport:</span>
            <span className="text-gray-800 font-medium">
              {destination?.nearestAirport}
            </span>
          </div>
          <div className="flex items-center justify-between text-gray-600 font-semibold text-base">
            <span>Average Rating:</span>
            <span className="text-yellow-600 font-medium">
              {destination?.averageRating}
            </span>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-800">Top Hotels</h3>
          <ul className="list-disc pl-5 mt-2">
            {destination?.bestHotels?.map((hotel, index) => (
              <li key={index} className="text-gray-600">
                {hotel?.name} - <strong>{hotel.rating}</strong> ⭐
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-800">
            Places to Visit
          </h3>
          <ul className="list-disc pl-5 mt-2">
            {destination?.placesToVisit?.map((place, index) => (
              <li key={index}>{place}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DestinationLoc;
