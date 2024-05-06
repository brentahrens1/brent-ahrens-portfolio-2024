import SiteHeader from "../sections/site-header";
import Services from "../sections/services";
import FeaturedWork from "../sections/featured-work";
import SelectedClients from "../sections/selected-clients";

const Home = () => {
  return (
    <div>
      <SiteHeader />
      <FeaturedWork />
      <Services />
      <SelectedClients />
    </div>
  );
};

export default Home;