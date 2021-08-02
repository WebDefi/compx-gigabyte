import Gallery from "../Gallery/Gallery";
import Devices from "../Devices/Devices";
import SliderAorus from "../SliderAorus/SliderAorus";
import News from "../News/News";

const HomePage = () => {
  return (
    <div to="/main">
      <SliderAorus />
      <Devices />
      <News />
      <Gallery />
    </div>
  );
};

export default HomePage;
