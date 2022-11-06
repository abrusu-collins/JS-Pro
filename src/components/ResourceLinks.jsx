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
        <p>What do you want to learn?🚀</p>
      </div>

      <div className="all-resouces">
        <div className="frontend">
          <img src={frontend} alt="frontendimg" />
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              sit sapiente, laborum ea ad dolorem qui ex in doloribus nulla
              praesentium, illum, doloremque ut voluptatem ullam? Vero itaque
              architecto nostrum?
            </p>
            <a href=" ">Explore</a>
          </div>
        </div>
        <div className="backend">
          <img src={backend} alt="backendimg" />
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              sit sapiente, laborum ea ad dolorem qui ex in doloribus nulla
              praesentium, illum, doloremque ut voluptatem ullam? Vero itaque
              architecto nostrum?
            </p>
            <a href=" ">Explore</a>
          </div>
        </div>
        <div className="projects">
          <img src={projects} alt="projectsimg" />
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              sit sapiente, laborum ea ad dolorem qui ex in doloribus nulla
              praesentium, illum, doloremque ut voluptatem ullam? Vero itaque
              architecto nostrum?
            </p>
            <a href=" ">Explore</a>
          </div>
        </div>
        <div className="resume">
          <img src={resume} alt="resumeimg" />
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              sit sapiente, laborum ea ad dolorem qui ex in doloribus nulla
              praesentium, illum, doloremque ut voluptatem ullam? Vero itaque
              architecto nostrum?
            </p>
            <a href=" ">Explore</a>
          </div>
        </div>
        <div className="linkedin">
          <img src={linkedin} alt="linkedinimg" />
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              sit sapiente, laborum ea ad dolorem qui ex in doloribus nulla
              praesentium, illum, doloremque ut voluptatem ullam? Vero itaque
              architecto nostrum?
            </p>
            <a href=" ">Explore</a>
          </div>
        </div>
        <div className="jobs">
          <img src={jobs} alt="jobsimg" />
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              sit sapiente, laborum ea ad dolorem qui ex in doloribus nulla
              praesentium, illum, doloremque ut voluptatem ullam? Vero itaque
              architecto nostrum?
            </p>
            <a href=" ">Explore</a>
          </div>
        </div>
        <div className="interviews">
          <img src={interviews} alt="interviewsimg" />
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              sit sapiente, laborum ea ad dolorem qui ex in doloribus nulla
              praesentium, illum, doloremque ut voluptatem ullam? Vero itaque
              architecto nostrum?
            </p>
            <a href=" ">Explore</a>
          </div>
        </div>
        <div className="quiz">
          <img src={quiz} alt="quizimg" />
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              sit sapiente, laborum ea ad dolorem qui ex in doloribus nulla
              praesentium, illum, doloremque ut voluptatem ullam? Vero itaque
              architecto nostrum?
            </p>
            <a href=" ">Explore</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResourceLinks;
