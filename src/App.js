import styles from "./App.module.scss";
// import Header from './materials/Header/Header'
import Devices from "./materials/Devices/Devices";
import SliderAorus from "./materials/SliderAorus/SliderAorus";

function App() {
  return (
    <div className={styles.App}>
      {/* <Header /> */}
      <SliderAorus />
      <Devices />
    </div>
  );
}

export default App;
