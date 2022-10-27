import _1 from "../img/1.svg";
import _2 from "../img/2.svg";

function Testimonies() {
  return (
    <div className="testimonies">
      <div className="testimonies-inner">
        <div className="testimonies-head">What our Users say about us</div>
        <div className="top-quote">
          <img src={_1} alt="" />
          <img src={_1} alt="" />
        </div>

        <div className="bottom-quote">
          <img src={_2} alt="" />
          <img src={_2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Testimonies;
