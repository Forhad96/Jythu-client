const Banner = () => {
    return (
      <div className="w-[1394px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full shrink-0 text-left text-base text-secondary-text font-medium">
        <div className="w-[1168px] flex flex-row flex-wrap items-end justify-start gap-[56px] shrink-0 mq800:gap-[28px]">
          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[16.9px] box-border min-w-[358px] max-w-full mq450:min-w-full">
            <img
              className="self-stretch h-[587.1px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/gtohero4img1-1@2x.png"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[7.5px] min-w-[365px] max-w-full mq450:min-w-full">
            <div className="flex flex-row items-start justify-start py-0 pr-[34px] pl-[33.9px]">
              <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(270deg,_#38ef7d,_#11998e)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[2]">
                WELCOME TO JYTHU
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[9.5px] box-border max-w-full text-49xl">
              <h1
                className="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block max-w-full z-[1] mq450:text-22xl mq800:text-35xl"
                data-scroll-to="aMarketingAgency"
              >
                <p className="m-0">A Marketing</p>
                <p className="m-0">
                  <span className="[text-decoration:underline] text-transparent !bg-clip-text [background:linear-gradient(270deg,_#38ef7d,_#11998e)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Agency
                  </span>
                  <span> To Grow</span>
                </p>
                <p className="m-0">Your Business</p>
              </h1>
            </div>
            <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[29.5px] box-border max-w-full text-gray-100">
              <div className="relative font-medium z-[1]">
                <p className="m-0">
                  We are 100+ professional software engineers with more than 10
                  year of experience in delivering superior products Believe it
                  because you have seen it. Here are real numbers
                </p>
              </div>
            </div>
            <div className="w-[487px] flex flex-row items-start justify-start gap-[74px] max-w-full text-lg font-poppins mq450:flex-wrap mq800:gap-[74px_37px]">
              <div className="flex-1 flex flex-row items-start justify-start gap-[1px] min-w-[143px]">
                <Button
                  className="h-[54px] flex-1 z-[1]"
                  disableElevation={true}
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    color: "linear-gradient(270deg, #38ef7d, #11998e)",
                    fontSize: "16",
                    borderColor: "#38ef7d",
                    borderRadius: "100px",
                    "&:hover": { borderColor: "#38ef7d" },
                    height: 54,
                  }}
                >
                  GET STARTED
                </Button>
                <button className="rounded-3xl bg-gradient-to-t from-green-400 to-teal-500">
                  GET STARTED
                </button>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[54px] w-[54px] relative z-[1]">
                  <div className="absolute top-[0px] left-[0px] rounded-[50%] [background:linear-gradient(270deg,_#38ef7d,_#11998e)] w-full h-full" />
                  <img
                    className="absolute top-[15px] left-[15px] w-6 h-6 overflow-hidden z-[1]"
                    alt=""
                    src="/arrow-up-right-24--solid.svg"
                  />
                </button>
              </div>
              <div className="flex flex-row items-start justify-start gap-[11px]">
                <div className="h-[54px] w-[54px] relative">
                  <div className="absolute top-[0px] left-[0px] rounded-[50%] box-border w-full h-full z-[1] border-[0px] border-solid border-springgreen" />
                  <img
                    className="absolute top-[15px] left-[18px] w-[20.6px] h-6 overflow-hidden z-[2]"
                    alt=""
                    src="/play.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start pt-[13.5px] px-0 pb-0">
                  <div className="relative font-semibold inline-block min-w-[128px] z-[1]">
                    WATCH VIDEO
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};
export default Banner;