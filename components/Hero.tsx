export const Hero = () => {
  return (
    <section className="flex justify-center space-x-14 mb-12">
      <img
        src="https://media.licdn.com/dms/image/D5603AQHmJUJqH1AYKw/profile-displayphoto-shrink_400_400/0/1672137955719?e=1678320000&v=beta&t=GSU2hn8QS8m7oP-JmwAP5O-a0mcwLqnEviD_NQY0mIo"
        alt="Profile Image"
        className="w-3/12 flex justify-start items-start rounded-full"
      />
      <div>
        <h3 className="text-4xl text-[#5FA8FF] font-beatriceBold">
          Gautam Paranjape
        </h3>
        <p className="text-base text-primary-light">
          Developer, Designer & Student
        </p>
        <p className="text-base text-white">Bay Area, California</p>
      </div>
    </section>
  );
};
