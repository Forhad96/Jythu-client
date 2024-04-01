import arrowUpRight from "/src/assets/icon/arrow-up-right-24--solid.svg";
const Button = ({ text, iconUrl, imageAlt }) => {
  return (
    <div className="flex gap-2 items-center">
      <p className="text-green-600 text-base font-semibold px-4 md:px-8 py-3 rounded-3xl ring ring-green-600">
        {text}
      </p>
      <img
        className="p-3 rounded-full bg-gradient-to-t from-green-400 to-teal-500"
        src={arrowUpRight}
        alt={imageAlt}
      />
    </div>
  );
};


export default Button;