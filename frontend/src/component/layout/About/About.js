import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
// import YouTubeIcon from "@material-ui/icons/YouTube";
import CodeIcon from '@mui/icons-material/Code';
// import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const About = () => {
  const visitLinkedIn = () => {
    window.location = "https://www.linkedin.com/in/animesh624d/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Me</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://media.licdn.com/dms/image/C4D03AQEFHk1hZpkniw/profile-displayphoto-shrink_400_400/0/1662570626961?e=1685577600&v=beta&t=sSg-jwJU0-_KqynSns1AcSTYF5tQHuMyz0T0auleTeo"
              alt="Founder"
            />
            <Typography>Animesh Dubey</Typography>
            <Button onClick={visitLinkedIn} color="primary">
              Visit LinkedIn
            </Button>
            <span>
              This is a sample wesbite made by @animesh624d.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Social Handles</Typography>
            <a
              href="https://codeforces.com/profile/animesh624d"
              target="blank"
            >
              <CodeIcon className="codeforcesSvgIcon" />
            </a>

            <a href="https://www.linkedin.com/in/animesh624d/" target="blank">
              <LinkedInIcon className="linkedinSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
