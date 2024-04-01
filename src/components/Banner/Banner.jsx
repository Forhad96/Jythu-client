import Container from "../Shared/Container";
import arrowUpRight from "/src/assets/icon/arrow-up-right-24--solid.svg";
import arrowUpRightColor from "/src/assets/icon/arrow-up-right-color.png";
import play from "/src/assets/icon/play.svg";
import banner from "/src/assets/images/Banner.png";
import bannerBg from "/src/assets/images/banner-bg.svg";
import groupAvatar from "/src/assets/images/group-avatar.svg";
const Banner = () => {
  return (
    <div className="banner-bg">
      <Container>
        <div className="flex justify-between md:gap-10  pt-24 items-center">
          <div className="relative hidden md:block">
            <img className="lg:max-w-lg top-20 left-28" src={banner} alt="" />
            <div className="!m-[0] absolute -bottom-10 left-16  rounded-xl bg-white shadow-[0px_4px_20px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-start justify-start py-[26px] px-[27px] z-[2]">
              <div className="flex flex-row items-center justify-start gap-[17px] mq450:flex-wrap">
                <img className=" relative" alt="" src={groupAvatar} />
                <div className="flex flex-col items-start justify-start">
                  <b className="relative inline-block text-transparent !bg-clip-text [background:linear-gradient(270deg,_#38ef7d,_#11998e)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] min-w-[63px] mq450:text-3xl">
                    5.4k
                  </b>
                  <div className="relative text-base  font-medium mt-[-6px]">
                    Clients Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-h-min">
            <div className=" font-medium text-base text-green-400  flex items-center gap-1">
              <img src={arrowUpRightColor} className="w-8" alt="" />
              WELCOME TO JYTHU
            </div>
            <h1 className="text-[30px] md:text-[35px] lg:text-[65px] text-white font-bold">
              A Marketing{" "}
              <span className="underline text text-green-400">Agency</span> To
              Grow Your Business
            </h1>
            <p className="text-white">
              We are 100+ professional software engineers with more than 10 year
              of experience in delivering superior products Believe it because
              you have seen it. Here are real numbers
            </p>
            {/* cta button */}

            <div className="flex gap-5 flex-wrap items-center mt-4">
              <div className="flex gap-2 items-center">
                <button className=" text-white text-sm font-semibold px-8 py-3 rounded-3xl ring ring-green-600">
                  Get Started
                </button>
                <img
                  className="p-3 rounded-full bg-gradient-to-t from-green-400 to-teal-500"
                  src={arrowUpRight}
                  alt=""
                />
              </div>
              <div className="flex gap-2 items-center">
                <img
                  className=" ring rounded-full p-[10px] ring-green-600"
                  src={play}
                  alt=""
                />

                <p className=" text-white text-sm font-semibold ">
                  Watch Video
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Banner;
