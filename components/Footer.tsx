export const Footer = () => {
  return (
    <footer className="p-4 rounded-lg shadow md:px-6 md:py-8">
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <span className="text-center block text-base text-white sm:text-left">
        © {new Date().getFullYear()} Gautam Paranjape. All rights reserved.
      </span>
    </footer>
  );
};
