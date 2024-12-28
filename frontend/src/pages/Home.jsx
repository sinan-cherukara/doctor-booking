import heroImg01 from '../assets/images/hero-img01.png';
import heroImg02 from '../assets/images/hero-img02.png';
import heroImg03 from '../assets/images/hero-img03.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* hero section start */}
      <section className="hero__section pt-16 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="order-2 lg:order-1">
              <div className="mb-8">
                <h1 className="text-[38px] md:text-[58px] font-extrabold text-gray-900 leading-tight">
                  Your Health, Our Commitment.
                </h1>
                <p className="mt-4 text-lg text-gray-700">
                  Discover a comprehensive range of healthcare solutions
                  tailored to your unique needs. Together, we prioritize your
                  well-being every step of the way.
                </p>
                <button
                  onClick={() => {
                    navigate('/services');
                  }}
                  className="mt-6 inline-block px-8 py-3 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-500 transition"
                >
                  Explore Our Services
                </button>
              </div>
              {/* Stats section */}
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <h2 className="text-[34px] font-bold text-gray-800">25+</h2>
                  <p className="mt-2 text-sm text-gray-600">
                    Years in Practice
                  </p>
                </div>
                <div className="text-center">
                  <h2 className="text-[34px] font-bold text-gray-800">20+</h2>
                  <p className="mt-2 text-sm text-gray-600">
                    Locations Worldwide
                  </p>
                </div>
                <div className="text-center">
                  <h2 className="text-[34px] font-bold text-gray-800">98%</h2>
                  <p className="mt-2 text-sm text-gray-600">Happy Patients</p>
                </div>
              </div>
            </div>
            {/* Right content */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src="https://www.sonicseo.com/wp-content/uploads/2020/07/surgeon.jpg"
                  alt="Healthcare professional"
                  className="rounded-lg shadow-lg w-full"
                />
                {/* <div className="absolute top-[-50px] right-[-30px] hidden lg:block">
                  <img
                    src={heroImg02}
                    alt="Clinic interior"
                    className="w-[250px] h-[150px] rounded-md shadow-md"
                  />
                </div>
                <div className="absolute bottom-[-50px] left-[-30px] hidden lg:block">
                  <img
                    src={heroImg03}
                    alt="Satisfied patient"
                    className="w-[200px] h-[120px] rounded-md shadow-md"
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* hero section end */}
    </>
  );
};

export default Home;
