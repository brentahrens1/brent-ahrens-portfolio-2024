import { Link } from "react-router-dom";

type buttonProps = {
  text: string,
  url?: string,
  textColor?: string,
  bgColor?: string,
  borderColor?: string,
  hoverTextColor?: string,
  hoverBackgroundColor?: string
}

const Button = (
  { text, url, textColor, hoverBackgroundColor, hoverTextColor, bgColor, borderColor }: buttonProps) => {
  return (
    <div>
      {
        url ?
          <Link
            to={`/casestudy/${url}`}
            className={`px-6 py-3 border ${borderColor} drop-shadow-button rounded-full ${bgColor} cursor-pointer 
              transition-all duration-200 ease-in-out hover:${hoverBackgroundColor} hover:underline`}>
            <p className="text-sm text-center">{text}</p>
          </Link>
        :
          <div
            className={`px-6 py-3 border drop-shadow-button rounded-full ${bgColor} cursor-pointer 
              transition-all duration-200 ease-in-out hover:${hoverBackgroundColor} hover:underline`}>
            <p className={`text-sm text-center ${textColor} hover:${hoverTextColor}`}>{text}</p>
          </div>
      }
    </div>
  );
};

export default Button;