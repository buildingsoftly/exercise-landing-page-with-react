import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
import Footer from './Footer';

const Home = () => {
  const cardData = [
    {
      title: "Fresh new layout",
      description: "With Bootstrap 5, we've created a fresh new layout for this template!",
      icon: "fa-layer-group"
    },
    {
      title: "Free to download",
      description: "As always, Start Bootstrap has a powerful collection of free templates.",
      icon: "fa-download"
    },
    {
      title: "Jumbotron hero header",
      description: "The heroic part of this template is the jumbotron hero header!",
      icon: "fa-credit-card"
    },
    {
      title: "Feature boxes",
      description: "We've created some custom feature boxes using Bootstrap icons!",
      icon: "fa-code"
    }
  ];

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container py-5">
        <div className="row">
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
