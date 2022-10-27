import rocket from "../img/rocket.png";
function Wait() {
  return (
    <div className="wait">
      <div className="wait-inner">
        <div className="wait-about">
          <p>What are you waiting for?</p>
          <p>Skyrocket your Javascript Skills now</p>
          <a href="">Start Learning</a>
        </div>
        <img src={rocket} alt="" />
      </div>
    </div>
  );
}

export default Wait;
