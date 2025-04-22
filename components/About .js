
export default function About() {
  return (
    <section className="py-12 bg-white">
      <div className="bg-gray-50 py-16 px-6 sm:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            About Wanderlust Explorer
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Welcome to Wanderlust Explorer, your ultimate travel companion! Were
            here to help you discover hidden gems, explore new destinations, and
            experience the world like never before. Our mission is to provide
            you with curated travel recommendations and a seamless platform for
            planning your next adventure.
          </p>
          <div className="mt-8 flex justify-center space-x-6">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold text-gray-900">
                Our Mission
              </h3>
              <p className="mt-2 text-gray-600">
                To inspire wanderlust in every traveler and create personalized
                journeys that leave lasting memories.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold text-gray-900">
                Our Vision
              </h3>
              <p className="mt-2 text-gray-600">
                To become the go-to platform for every travel enthusiast,
                offering valuable resources and a community for sharing travel
                experiences.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <p className="text-lg text-gray-700">
              Whether youre looking for a serene escape or an adventurous
              expedition, we’ve got you covered. Start exploring and embark on
              your next great adventure with us!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
