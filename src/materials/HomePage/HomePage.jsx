import Gallery from "../Gallery/Gallery";
import Devices from "../Devices/Devices";
import SliderAorus from "../SliderAorus/SliderAorus";
import News from "../News/News";
import Sales from "../Sales/Sales";

const HomePage = () => {
  return (
    <div to="/main">
      <SliderAorus />
      <div className="homePageDevices">
        <Devices />
      </div>
      <Sales />
      <News />
      <Gallery />
    </div>
  );
};

export default HomePage;
