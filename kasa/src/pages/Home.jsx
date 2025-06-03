import styles from './Home.module.scss';
import Banner from '../components/Banner';
import CardGrid from '../components/CardGrid'
import bannerImage from '../assets/home-banner.png';

function Home() {
  return (
    <div className={styles.container}>
      <Banner image={bannerImage} textLines={['Chez vous,\u00A0', 'partout et ailleurs']} />
      <CardGrid />
    </div>
  );
}

export default Home;