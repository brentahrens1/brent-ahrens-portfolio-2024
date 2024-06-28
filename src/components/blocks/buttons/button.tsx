import { Link } from "react-router-dom";

type buttonProps = {
  text: string,
  url?: string,
  target?: string,
  styles?: string
}

const Button = (
  { text, url, target, styles }: buttonProps) => {
  return (
    <>
      {
        url ?
          <Link
            to={`${url}`}
            target={`${target ? target : '_self'}`}
            rel="noopener noreferrer"
            className={`px-6 py-3 border drop-shadow-button rounded-full block cursor-pointer 
              transition-all duration-200 ease-in-out bg-offwhite 
              hover:underline text-sm sm:text-base text-center whitespace-nowrap ${styles}`
            }
          >
            {text}
          </Link>
        :
          <div
            className={`block px-6 py-3 border drop-shadow-button rounded-full cursor-pointer 
              transition-all duration-200 ease-in-out bg-offwhite hover:underline ${styles}`}>
            <p className={`text-sm sm:text-base text-center whitespace-nowrap`}>{text}</p>
          </div>
      }
    </>
  );
};

export default Button;