import frontend from "../img/frontend.png";
import backend from "../img/backend.png";
import projects from "../img/projects.png";
import resume from "../img/resume.png";
import linkedin from "../img/linkedin.png";
import jobs from "../img/jobs.png";
import interviews from "../img/interviews.png";
import quiz from "../img/quiz.png";

function ResourceLinks() {
    return (
        <div className="resourcelinks">
            <div className="resourcelinks-hero">
              <p>What do you want to learn?</p>
              <div className="all-resoucers">
                <div className="frontend">
                <img src={frontend} alt="" />
                <a href=" ">Explore</a>
                </div>
                <div className="frontend">
                <img src={frontend} alt="" />
                <a href=" ">Explore</a>
                </div>
                <div className="frontend">
                <img src={frontend} alt="" />
                <a href=" ">Explore</a>
                </div>
                <div className="frontend">
                <img src={frontend} alt="" />
                <a href=" ">Explore</a>
                </div>
                <div className="frontend">
                <img src={frontend} alt="" />
                <a href=" ">Explore</a>
                </div>
                <div className="frontend">
                <img src={frontend} alt="" />
                <a href=" ">Explore</a>
                </div>
                <div className="frontend">
                <img src={frontend} alt="" />
                <a href=" ">Explore</a>
                </div>
                <div className="frontend">
                <img src={frontend} alt="" />
                <a href=" ">Explore</a>
                </div>
              </div>
            </div>
        </div>
      );
}

export default ResourceLinks;