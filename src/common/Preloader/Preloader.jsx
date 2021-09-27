import preloader from "../../static/images/preloader.svg";
import "./preloader.css";

const Preloader = () => {
  return (
    <div className={'preloader'} style={{backgroundImage: `url(${preloader})`}}/>
  )
}

export default Preloader;
