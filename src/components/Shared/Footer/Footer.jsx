import Logo from "../Logo";
import paymentIcons from "/src/assets/footer/payment-icons.png";
import newsletterImg from "/src/assets/footer/newsletterImg.png";
import Container from "../Container";
const resources = [
  { title: "Cours", link: "#" },
  { title: "Features", link: "#" },
  { title: "Services", link: "#" },
];

const company = [
  { title: "About Us", link: "#" },
  { title: "Blog", link: "#" },
  { title: "Our Story", link: "#" },
  { title: "About Us", link: "#" },
];

const helpPages = [
  { title: "Customer Questions", link: "#" },
  { title: "Our Story", link: "#" },
  { title: "About Us", link: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-[#00425A] mt-40  relative pt-[350px] pb-8">
      <div className="absolute -top-[100px] left-0 right-0 z-10">
        <div className="max-w-7xl h-[400px] text-white relative border-2 px-4 bg-gradient-to-t from-green-400 to-teal-500 rounded-3xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 hidden md:block ">
            <img
              src={newsletterImg}
              alt="Woman with Laptop"
              className="max-w-full h-auto mb-[150px] "
            />
          </div>
          <div className="md:w-1/2 mb-8 mt-20 md:mt-0 md:mb-0 ">
            <h2 className=" text-3xl md:text-4xl font-bold mb-4">
              Subscribe To Our Newsletter!
            </h2>
            <p className=" mb-6">
              Get your 7-day free trial and years to follow high super products
              it because you've seen it.
            </p>
            <div className="flex ">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-gradient-to-t from-green-400 to-teal-500  text-white font-bold py-2 px-4 rounded-r-md">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="grid col-span-2">
            <Logo />
            <p className="text-white">
              Improve Efficiency, Provide A Better Customer Experience With
              Modern Technolo Services Available
            </p>
            <img src={paymentIcons} alt="" />
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Resources</h3>
            <ul className="text-gray-300">
              {resources.map((item, index) => (
                <li key={index} className="mb-2">
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="text-gray-300">
              {company.map((item, index) => (
                <li key={index} className="mb-2">
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Help Pages</h3>
            <ul className="text-gray-300">
              {helpPages.map((item, index) => (
                <li key={index} className="mb-2">
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr />
        <p className="text-white text-center text-base font-medium pt-6">
          &copy; 2024, All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
