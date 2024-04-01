import { Helmet } from 'react-helmet-async'
import Banner from '../../components/Banner/Banner';
import TrustedPartners from '../../components/TrustedPartners/TrustedPartners';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Jythu | A Marketing Agency</title>
      </Helmet>
<Banner/>
<TrustedPartners/>
    </div>
  );
}

export default Home
