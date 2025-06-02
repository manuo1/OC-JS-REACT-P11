import Banner from '../components/Banner';
import CardGrid from '../components/CardGrid'
import bannerImage from '../assets/home-banner.png';

function Home() {
  return (
    <>
      <Banner image={bannerImage} text="Chez vous, partout et ailleurs" />
      <CardGrid />
    </>
  );
}

export default Home;
