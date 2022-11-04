import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

function Hero() {
  return (
    <div className="hero">
      <div className="inner-hero">
        <p className="hero-header">JavaScript-Pro</p>
        <div className="hero-sub-header">
          <RoughNotationGroup show={true}>
            <p>
              Learning to code is {" "}

              <RoughNotation type="underline" order="1" animationDelay="5000">
              {" "} HARD{" "}
              </RoughNotation>
            </p>
            <p>
              But finding the right resources for your learning journey is {" "}
              <RoughNotation type="underline" order="2" animationDelay="5000">
                HARDER
              </RoughNotation>
            </p>
            <p>
              {" "}
              <RoughNotation type="underline" order="3" animationDelay="5000">
                JAVASCRIPT-PRO{" "}
              </RoughNotation>
              has all the tested and trusted reasources you need
            </p>
          </RoughNotationGroup>
        </div>
        <a href=" ">Start Learning</a>
      </div>
    </div>
  );
}

export default Hero;
