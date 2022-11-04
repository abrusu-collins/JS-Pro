import _1 from "../../img/1.svg";
import _2 from "../../img/2.svg";

function Testimonies() {
  return (
    <div className="testimonies">
      <div className="testimonies-head">What our Users say about us</div>
      <div className="testimonies-inner">
        <div className="top-quote">
          <img src={_1} alt="" />
          <img src={_1} alt="" />
        </div>
        <div className="the-testimonies">
          <div>
            <p className="testimony-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              facilis animi sunt repellendus illo quos dolores corrupti
              voluptatibus quia molestiae! Nihil itaque est iste ut delectus
              aliquid quisquam optio ea.
            </p>
            <p className="person-name">Abrusu Collins</p>
            <p className="person-position">CEO, DevTech</p>
          </div>
          <div>
            <p className="testimony-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              facilis animi sunt repellendus illo quos dolores corrupti
              voluptatibus quia molestiae! Nihil itaque est iste ut delectus
              aliquid quisquam optio ea.
            </p>
            <p className="person-name">Abrusu Collins</p>
            <p className="person-position">CEO, DevTech</p>
          </div>
          <div>
            <p className="testimony-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              facilis animi sunt repellendus illo quos dolores corrupti
              voluptatibus quia molestiae! Nihil itaque est iste ut delectus
              aliquid quisquam optio ea.
            </p>
            <p className="person-name">Abrusu Collins</p>
            <p className="person-position">CEO, DevTech</p>
          </div>
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
