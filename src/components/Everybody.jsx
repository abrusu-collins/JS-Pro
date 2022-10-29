import platforms from "../img/platforms.svg";
import { useEffect } from "react";
function Everybody() {
  function confirmExit()
  {
console.log("sed") ;
}
  useEffect(() => {
    window.onbeforeunload = confirmExit()})
  return (
    <div className="everybody">
      <img src={platforms} alt="platforms" />
      <div className="everybody-description">
        <p className="head-small">Everyone in mind</p>
        <p className="head-big">No matter where or how you like to learn.</p>
        <p className="about">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          sed mollitia labore fuga molestias nihil, placeat distinctio impedit,
          tempore dignissimos quis nam ab aut praesentium? Laborum commodi
          architecto consectetur porro!
        </p>
      </div>
      </div>

  );
}

export default Everybody;
