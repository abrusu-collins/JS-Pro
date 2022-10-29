import sadgirl from "../img/sad-girl.png";
function Soon() {
  return (
    <div className="soon">
      <img src={sadgirl} alt="" />
      <div className="the-form">
        <p className="soon-title">Leaving so soon?</p>
        <form id="form">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email"
          />
          <button>Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default Soon;
