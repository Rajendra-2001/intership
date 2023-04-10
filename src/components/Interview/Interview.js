import Header from "../Layout/Navbar/Header";
import InterviewMeContainer from "./interview_container";
import HackathonContainer from "./hackathon-container";
import "./Interview.css";

const Interview = () => {
  return (
    <div className="desktop-04">
      <Header />
      <InterviewMeContainer />
      <div className="lorem-ipsum-dolor-container">
        <p className="lorem-ipsum-dolor">
          Lorem ipsum dolor sit amet consectetur. Lacus sit aliquam vivamus
          sodales a integer justo elit. Mattis urna non parturient est non
          faucibus pretium morbi. Mattis condimentum arcu sapien nunc semper in
          laoreet amet cursus. At purus consectetur orci morbi at. Gravida
          consectetur nunc in quis vitae egestas. Fermentum pellentesque
          ullamcorper nisl massa penatibus condimentum non imperdiet. Porttitor
          a hendrerit pellentesque enim mus congue. Vitae interdum fusce duis ac
          posuere in aliquam risus aenean. Mi aliquet viverra ipsum lacus
          condimentum tincidunt. In bibendum imperdiet nullam eget tincidunt. Ut
          lorem id enim interdum lobortis aliquam risus elementum aliquet.
          Placerat fusce proin diam sollicitudin netus tincidunt sit ultricies.
          Varius convallis ultrices fermentum in commodo ut posuere. Lacus
          luctus lacus consequat dolor.
        </p>
        <p className="lorem-ipsum-dolor">&nbsp;</p>
        <p className="lorem-ipsum-dolor">
          
        </p>
        <p className="lorem-ipsum-dolor">&nbsp;</p>
        
      </div>
      <div className="description">Description</div>
      <HackathonContainer />
      <button className="buttons">
        <div className="login-button">
          <img className="github-icon" alt="" src="/github.svg" />
          <div className="github-repository">GitHub Repository</div>
        </div>
        <div className="login-button">
          <img className="github-icon" alt="" src="/openinnew.svg" />
          <div className="github-repository">Other Link</div>
        </div>
        <div className="login-button2">
          <img className="github-icon" alt="" src="/download1.svg" />
          <div className="github-repository">Download file</div>
        </div>
      </button>
    </div>
  );
};

export default Interview;
