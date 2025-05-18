import profilePhoto from '../../assets/images/profile-photo.jpg';

const Home = () => {
  return (
    <section className="px-6 md:px-16 py-8 flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="gap-5 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-3xl md:text-4xl flex flex-wrap gap-2 font-bold">
          Hi, I'm <span className="text-[#7C3AED]">Aneesh Pissay</span>
        </h1>
        <p className="text-sm md:text-base font-medium">Full Stack Developer | Mobile App Developer</p>
        <p className="max-w-lg text-sm md:text-base">
          I’m a full stack developer and mobile app creator, building elegant, responsive applications using modern JavaScript frameworks with a strong focus on user experience and performance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center sm:items-start justify-center sm:justify-start">
          <button className="w-max hover:scale-105 bg-[#7C3AED] hover:bg-transparent hover:border hover:border-[#7C3AED] hover:text-[#7C3AED] p-3 rounded-md cursor-pointer transition-all">
            Download Resume
          </button>
          <button className="w-max hover:scale-105 bg-[#7C3AED] hover:bg-transparent hover:border hover:border-[#7C3AED] hover:text-[#7C3AED] p-3 rounded-md cursor-pointer transition-all">
            Contact Me
          </button>
        </div>
      </div>

      <div className="relative inline-block">
        <img
          src={profilePhoto}
          width={250}
          height={250}
          className="rounded-full border-4 border-[#7C3AED]"
        />
        <div className="absolute bottom-0 right-0 bg-[#121212] rounded-full w-14 aspect-square flex items-center justify-center transition-transform duration-300 hover:scale-105">
          <div className="bg-[#7C3AED] rounded-full w-10 aspect-square flex items-center justify-center">
            <span className="material-symbols-outlined text-white">
              code
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
