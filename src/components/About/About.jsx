import Button from '../Button/Button';
import Container from '../Shared/Container';
import aboutImg from '/src/assets/About/aboutImg.svg'
import arrowUpRight from "/src/assets/icon/arrow-up-right-24--solid.svg";
import arrowUpRightColor from "/src/assets/icon/arrow-up-right-color.png";

const About = () => {
    const serviceItems = [
      "Product Engineering",
      "Digital Services",
      "IT Consultancy",
      "Digital Services",
    ];
  return (
    <Container>
      <div className="flex items-center gap-5 my-10 justify-between flex-wrap md:flex-nowrap">
        <div className="w-full md:w-1/2">
          <div className=" font-medium text-base text-green-400  flex items-center gap-1">
            <img src={arrowUpRightColor} className="w-8" alt="" />
            ABOUT US
          </div>
          <h2 className="text-3xl md:text-5xl text-[#0D141C] font-bold mb-5">
            We Want To Give You The Best Service
          </h2>
          <p className="mb-5 text-[#4F7396] font-medium text-xl">
            We are 100+ professional software engineers with more than 10 year
            of experience in delivering superior products Believe it because you
            have seen it. Here are real numbers
          </p>

          <div className="flex gap-5">
            <div>
              <p className=" mb-5">
                <span className="text-[100px] font-bold text-green-600  mr-3">
                  24
                </span>
                <br />
                <span className="text-2xl font-bold text-[#4F7396]">
                  Year <br /> Experience
                </span>
              </p>

<Button text='Get Stated'/>
            </div>
            <ul className="mb-5">
              {serviceItems.map((service, index) => (
                <li key={index} className="flex items-center mb-2">
                  <svg
                    className="w-5 h-5 bg-green-200 rounded-full mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="">
          <img src={aboutImg} alt="About Us" className="max-w-full h-auto" />
        </div>
      </div>
    </Container>
  );
};

export default About;
