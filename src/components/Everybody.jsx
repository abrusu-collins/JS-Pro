import platforms from "../img/platforms.svg";
function Everybody() {
  return (
    <div className="everybody">
      <img src={platforms} alt="platforms" />
      <di className="everybody-description">
        <p className="head-small">Everyone in mind</p>
        <p className="head-big">No matter where or how you like to learn.</p>
      </di>
    </div>
  );
}

export default Everybody;
