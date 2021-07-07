import styles from "./App.module.scss";
// import Header from './materials/Header/Header'
import Devices from "./materials/Devices/Devices";
import SliderAorus from "./materials/SliderAorus/SliderAorus";
import News from "./materials/News/News";
import Footer from "./materials/Footer/Footer";
import Gallery from "./materials/Gallery/Gallery";

function App() {
  return (
    <div className={styles.App}>
      {/* <Header /> */}
      <SliderAorus />
      <Devices />
      <News />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
