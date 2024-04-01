import serviceArrow from "/src/assets/services/serviceArrow.svg";
import strategy from "/src/assets/services/strategy-icon.png";
import planning from "/src/assets/services/planning-icon.png";
import content from "/src/assets/services/content-icon.png";
import seo from "/src/assets/services/seo-icon.png";
import design from "/src/assets/services/design-icon.png";
import seoAudit from "/src/assets/services/seoAudit.png";
import serviceCardBg from "/src/assets/services/serviceCard-bg.svg";

import arrowUpRightColor from "/src/assets/icon/arrow-up-right-color.png";
import Button from "../Button/Button";

const services = [
  {
    title: "Strategy & Planning",
    description:
      "Lorem ipsum dolor sit amet adipisicum elit ad fugitg. Numquam expedita perspiciatis, voluptate nemo eros vel erat pede metus cie.",
    icon: strategy,
  },
  {
    title: "Planning & Strategy",
    description:
      "Lorem ipsum dolor sit amet adipisicum elit ad fugitg. Numquam expedita perspiciatis, voluptate nemo eros vel erat pede metus cie.",
    icon: planning,
  },
  {
    title: "Content Marketing",
    description:
      "Lorem ipsum dolor sit amet adipisicum elit ad fugitg. Numquam expedita perspiciatis, voluptate nemo eros vel erat pede metus cie.",
    icon: content,
  },
  {
    title: "Seo Audits & Strategy",
    description:
      "Lorem ipsum dolor sit amet adipisicum elit ad fugitg. Numquam expedita perspiciatis, voluptate nemo eros vel erat pede metus cie.",
    icon: seo,
  },
  {
    title: "Design & Development",
    description:
      "Lorem ipsum dolor sit amet adipisicum elit ad fugitg. Numquam expedita perspiciatis, voluptate nemo eros vel erat pede metus cie.",
    icon: design,
  },
  {
    title: "Seo Audits & Strategy",
    description:
      "Lorem ipsum dolor sit amet adipisicum elit ad fugitg. Numquam expedita perspiciatis, voluptate nemo eros vel erat pede metus cie.",
    icon: seoAudit,
  },
];

const Services = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className=" font-medium text-base text-center text-green-400  flex items-center gap-1">
            <img src={arrowUpRightColor} className="w-8" alt="" />
            OUR BEST SERVICES
          </div>
          <h2 className="text-5xl text-[#0D141C] font-bold text-center mb-8">
            We Provide Best Services
          </h2>
        </div>
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 `}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white serviceCard-bg rounded-[20px] shadow-md p-6"
            >
              <div className="flex flex-col gap-4 items-center mb-4">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="h-[150px] mr-4"
                />
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>

                <div className="self-stretch h-20 flex flex-row items-start justify-center py-0 pr-[3px] pl-0 box-border">
                  <img
                    className="h-20 w-[91px] relative z-[1]"
                    alt=""
                    src={serviceArrow}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center my-5 md:my-10">

      <Button text="VIEW ALL SERVICES" />
      </div>
      

    </div>
  );
};

export default Services;
