import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import TrustedPartners from "../../components/TrustedPartners/TrustedPartners";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Jythu | A Marketing Agency</title>
      </Helmet>
      <Banner />
      <TrustedPartners />
      <About />
      <Services />
    </div>
  );
};

export default Home;
