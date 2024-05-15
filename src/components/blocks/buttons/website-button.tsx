import { Link } from 'react-router-dom';

type websiteButtonProps = {
  url: string
}

const WebsiteButton = ({ url }: websiteButtonProps) => {
  return (
    <Link
    to={url}
    target='_blank'
    className="px-6 py-3 border drop-shadow-button rounded-full bg-offwhite cursor-pointer 
      transition-all duration-200 ease-in-out hover:text-nightblue hover:underline">
    <p className="text-sm">Website</p>
  </Link>
  );
};

export default WebsiteButton;