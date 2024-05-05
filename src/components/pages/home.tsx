import SiteHeader from "../sections/site-header";
import Services from "../sections/services";
import FeaturedWork from "../sections/featured-work";

const Home = () => {
  return (
    <div>
      <SiteHeader />
      <FeaturedWork />
      <Services />
    </div>
  );
};

export default Home;