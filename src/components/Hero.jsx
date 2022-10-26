import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

function Hero() {
  return (
    <div className="hero">
      <div className="inner-hero">
        <p className="hero-header">JavaScript-Pro</p>
        <div className="hero-sub-header">
          <RoughNotationGroup show={true}>
            <p>
              Learning to Code is{" "}
              <RoughNotation type="box" order="1">
                HARD{" "}
              </RoughNotation>
            </p>
            <p>
              But finding the right resources for your learning journey is{" "}
              <RoughNotation type="circle" order="2">
                HARDER{" "}
              </RoughNotation>
            </p>
            <p>
              {" "}
              <RoughNotation type="underline" order="3">
                JAVASCRIPT-PRO{" "}
              </RoughNotation>
              has all the tested and trusted reasources you need
            </p>
          </RoughNotationGroup>
        </div>
      </div>
    </div>
  );
}

export default Hero;
