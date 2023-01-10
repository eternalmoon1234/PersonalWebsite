export const Hero = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-10">
        <div className="flex flex-col items-start justify-start md:flex-row md:items-start md:justify-between">
          <div className="w-full md:w-1/2 lg:w-3/4 text-left text-white">
            <p className="uppercase text-gray-400">Hey there, I'm</p>
            <h1 className="text-4xl text-[#5FA8FF] font-semibold mb-4 md:text-5xl lg:text-6xl">
              Gautam Paranjape
            </h1>
            <p className="text-base text-gray-400 mb-8 md:text-lg lg:text-xl pr-14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 md:pl-8">
            <img
              src="https://media.licdn.com/dms/image/D5603AQHmJUJqH1AYKw/profile-displayphoto-shrink_400_400/0/1672137955719?e=1678320000&v=beta&t=GSU2hn8QS8m7oP-JmwAP5O-a0mcwLqnEviD_NQY0mIo"
              alt="Profile Image"
              className="w-full rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
