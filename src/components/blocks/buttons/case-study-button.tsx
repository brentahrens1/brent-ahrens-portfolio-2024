import { Link } from "react-router-dom";

type caseStudyButtonProps = {
  slug: string
}

const CaseStudyButton = ({ slug }: caseStudyButtonProps) => {
  return (
    <Link
      to={`/casestudy/${slug}`}
      className="px-6 py-3 border drop-shadow-button rounded-full bg-offwhite cursor-pointer 
        transition-all duration-200 ease-in-out hover:text-nightblue hover:underline">
      <p className="text-sm">Case Study</p>
    </Link>
  );
};

export default CaseStudyButton;