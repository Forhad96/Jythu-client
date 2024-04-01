import { Button } from "@mui/material";

const FrameComponent2 = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full text-left text-21xl text-secondary-text font-medium">
      <div className="w-[1191px] rounded-21xl [background:linear-gradient(270deg,_#38ef7d,_#11998e)] flex flex-col items-start justify-start pt-[105px] pb-[101px] pr-[53px] pl-[561px] box-border gap-[64px] max-w-full z-[1] mq450:pl-5 mq450:pt-[68px] mq450:pb-[66px] mq450:box-border mq800:gap-[16px_64px] mq800:pl-[140px] mq800:box-border mq1350:gap-[32px_64px] mq1350:pl-[280px] mq1350:pr-[26px] mq1350:box-border">
        <div className="w-[1191px] h-[446px] relative rounded-21xl [background:linear-gradient(270deg,_#38ef7d,_#11998e)] hidden max-w-full" />
        <div className="self-stretch flex flex-col items-start justify-start gap-[30px]">
          <h1 className="m-0 relative text-inherit font-bold font-inherit z-[2] mq450:text-5xl mq800:text-13xl">
            {`Subscribe To Our `}
            <span className="[text-decoration:underline]">Newsletter!</span>
          </h1>
          <div className="self-stretch relative text-lg font-medium z-[2]">
            We are 100+ professional software engineers with more than 10 years
            in delive ring super products it because you've seen it.
          </div>
        </div>
        <div className="self-stretch rounded-3xs bg-secondary-text shadow-[0px_4px_4px_rgba(0,_0,_0,_0.1)_inset] flex flex-row items-start justify-between pt-1 pb-[3.7px] pr-1 pl-7 box-border max-w-full gap-[20px] z-[2] text-lg text-gray-200 mq450:flex-wrap">
          <div className="h-[54px] w-[577px] relative rounded-3xs bg-secondary-text shadow-[0px_4px_4px_rgba(0,_0,_0,_0.1)_inset] hidden max-w-full" />
          <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
            <div className="relative font-medium inline-block min-w-[98px] z-[1]">
              Your Email
            </div>
          </div>
          <Button
            className="h-[46.3px] w-[142px] z-[1]"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "18",
              background: "linear-gradient(270deg, #38ef7d, #11998e)",
              borderRadius: "8px",
              "&:hover": {
                background: "linear-gradient(270deg, #38ef7d, #11998e)",
              },
              width: 142,
              height: 46.3,
            }}
          >
            SUBMIT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
