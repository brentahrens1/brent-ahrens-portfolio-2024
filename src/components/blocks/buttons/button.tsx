import { Link } from "react-router-dom";

type buttonProps = {
  text: string,
  url?: string,
  textColor?: string,
  bgColor?: string,
  borderColor?: string,
  hoverTextColor?: string,
  hoverBackgroundColor?: string
  fontSize?: string
}

const Button = (
  { text, url, textColor, hoverBackgroundColor, hoverTextColor, bgColor, borderColor, fontSize }: buttonProps) => {
  return (
    <div>
      {
        url ?
          <Link
            to={`${url}`}
            className={`px-6 py-3 border ${borderColor} drop-shadow-button ${bgColor} rounded-full block cursor-pointer 
              transition-all duration-200 ease-in-out hover:${hoverTextColor} hover:${hoverBackgroundColor} hover:underline`}>
            <p className={`${fontSize} text-center ${textColor}`}>{text}</p>
          </Link>
        :
          <div
            className={`block px-6 py-3 border drop-shadow-button ${bgColor} rounded-full cursor-pointer 
              transition-all duration-200 ease-in-out hover:${hoverBackgroundColor} hover:underline`}>
            <p className={`${fontSize} text-center ${textColor} hover:${hoverTextColor}`}>{text}</p>
          </div>
      }
    </div>
  );
};

export default Button;