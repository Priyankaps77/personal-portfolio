import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-12 bg-gradient-to-tr from-[#e0f0ff] via-[#83d9e8] to-[#f8fbff] relative overflow-hidden"
    >
      {/* Background concentric circles */}
      <div className="absolute top-[-150px] left-[-150px] w-[600px] h-[600px] rounded-full border-[6px] border-[#83d9e8] opacity-30 animate-pulse"></div>
      <div className="absolute top-[100px] left-[50px] w-[400px] h-[400px] hover:shadow-xl rounded-full border-[5px] border-[#5fc7dc] opacity-20"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full border-[6px] border-[#83d9e8] opacity-10"></div>

      <div className="relative z-10 py-10 sm:py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden hover:shadow-xl bg-gradient-to-tr from-[#e0f0ff] via-[#83d9e8] to-[#f8fbff] border border-[#83d9e8]  px-6 py-24 sm:px-10 xl:py-20  shadow-sm">
            <div className="absolute top-[-150px] left-[-150px] w-[600px] h-[600px] rounded-full border-[6px] border-[#83d9e8] opacity-30 animate-pulse"></div>
            <div className="absolute top-[100px] left-[50px] w-[400px] h-[400px] rounded-full border-[5px] border-[#5fc7dc] opacity-20"></div>
            <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full border-[6px] border-[#83d9e8] opacity-10"></div>
            <h2 className="mx-auto max-w-3xl text-gray-800 text-center text-4xl font-semibold tracking-tight sm:text-5xl">
              Let&#39;s Connect
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-800">
              Have a project in mind or just want to say hi? I&#39;m always open
              to discussing new ideas, collaborations, or opportunities.
            </p>
            <form className="mx-auto mt-10 flex max-w-md gap-x-4">
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md border-gray-300 bg-white px-3.5 py-2 text-base text-gray-800 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-blue-200 sm:text-sm"
              />
              <button
                type="submit"
                className="flex-none rounded-md border border-gray-300 bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
              >
                Notify me
              </button>
            </form>

            <div className="flex justify-center gap-6 mt-8">
              <a
                href="https://www.linkedin.com/in/priyanka-sahu27"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-700 transition"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="https://github.com/Priyankaps77"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition"
              >
                <FaGithub size={28} />
              </a>
              <a
                href="https://www.instagram.com/_the_g00d_half"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-500 transition"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="https://x.com/Priyank23684334"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 transition"
              >
                <FaTwitter size={28} />
              </a>
              <a
                href="https://www.facebook.com/share/167z9GypDV/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                <FaFacebook size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
