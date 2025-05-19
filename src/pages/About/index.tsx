const About = () => {
  return (
    <section className="bg-[#1E1E1E] px-6 md:px-16 py-12 flex flex-col md:flex-row gap-10">
      {/* Left Section */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-6 relative inline-block text-white">
          About Me
          <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#7C3AED]"></span>
        </h2>
        <div className="flex flex-col gap-5 text-md text-[#D1D5DB] font-medium">
          <p className="max-w-xl">
            I'm a passionate full stack and mobile app developer with 3+ years of experience building modern, responsive applications. I specialize in crafting intuitive, accessible, and high-performance user interfaces using technologies like React, React Native, and Node.js.
          </p>
          <p className="max-w-xl">
            My development journey began during college, and since then, I've consistently expanded my skillset — from backend logic to smooth mobile interactions. I enjoy staying on the cutting edge of tech, exploring new tools, and delivering solutions that not only function flawlessly but feel great to use.
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-2 py-8 max-w-xl text-[#E5E5E5]">
          <li>JavaScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>React Native</li>
          <li>Node.js</li>
          <li>MongoDB</li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="bg-[#2D2D2D] rounded-lg p-6 shadow-lg md:w-1/2">
        <h3 className="text-xl font-bold mb-4 text-white">Experience</h3>

        {[1, 2, 3].map((_, index) => (
          <div key={index} className="mb-6 border-l-2 border-[#7C3AED] pl-4">
            <h4 className="font-bold text-white">Senior Frontend Developer</h4>
            <p className="text-[#7C3AED]">TechCorp Inc. (2020 - Present)</p>
            <p className="text-gray-400 mt-2">
              Leading the frontend development team in building modern React applications with a focus on performance and accessibility.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
