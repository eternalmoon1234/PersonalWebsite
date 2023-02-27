export const Hero = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 flex justify-center items-center space-x-12">
      <div className="w-full md:w-1/2 lg:w-1/4 md:pl-8">
        <img
          src="https://media.licdn.com/dms/image/D5603AQHmJUJqH1AYKw/profile-displayphoto-shrink_400_400/0/1672137955719?e=1678320000&v=beta&t=GSU2hn8QS8m7oP-JmwAP5O-a0mcwLqnEviD_NQY0mIo"
          alt="Profile Image"
          className="w-10/12 rounded-full"
        />
      </div>
      <div>
        <h2 className="text-3xl text-[#5FA8FF] font-beatriceBold mb-4 md:text-4xl lg:text-5xl">
          Gautam Paranjape
        </h2>
        <p className="text-base text-primary-light md:text-base lg:text-lg">
          Developer, Designer & Student
        </p>
        <p className="text-base text-white">Bay Area, California</p>
      </div>
    </section>
  );
};
