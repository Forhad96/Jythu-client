import Container from "../Shared/Container";
import amazon from "/src/assets/partners/amazon.svg";
import google from "/src/assets/partners/google.svg";
import spotify from "/src/assets/partners/spotify.svg";
import slack from "/src/assets/partners/slack.svg";
import linkedin from "/src/assets/partners/linkedin.svg";
import walmart from "/src/assets/partners/walmart.svg";
const TrustedPartners = () => {
  const partners = [
    { name: "Google", logo: google },
    { name: "Amazon", logo: amazon },
    { name: "Spotify", logo: spotify },
    { name: "Slack", logo: slack },
    { name: "LinkedIn", logo: linkedin },
    { name: "Walmart", logo: walmart },
  ];
  return (
    <Container>
      <div className="m-5 md:m-20">
        <h2 className="text-2xl font-bold mb-8">
          <span className="text-green-600">200+</span> Trusted Partners
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 place-content-between">
          {partners.map((partner) => (
            <img
              key={partner.name}
              src={partner.logo}
              alt={partner.name}
              // className="h-8"
            />
          ))}
        </div>
      </div>
    </Container>
  );
};
export default TrustedPartners;
