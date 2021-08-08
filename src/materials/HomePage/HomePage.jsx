import Gallery from "../Gallery/Gallery";
import Devices from "../Devices/Devices";
import SliderAorus from "../SliderAorus/SliderAorus";
import News from "../News/News";
import Products from "../Products/Products";

const HomePage = () => {
  return (
    <div to="/main">
      <SliderAorus />
      <Devices />
      <News />
      <Gallery />
      <Products />
    </div>
  );
};

export default HomePage;
