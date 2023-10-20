// styled-component
import { BlackCenterTitle } from "./styled-component/Title";
import {
  FlexColumnCenteredContainer,
  Flex1,
} from "./styled-component/Container";
import { Divider } from "@mui/material";

export default function AboutThisWebApp() {
  return (
    <FlexColumnCenteredContainer
      id="about-this-web-app-container"
      style={{ gap: 5, paddingInline: "10vw" }}
    >
      <BlackCenterTitle id="about-this-web-app-title">
        Technology Utilization
      </BlackCenterTitle>
      {/* Github Link */}
      <Flex1 className="text-left">
        <a href="https://github.com/WarrantTsai/warrant-entry" target="_blank">
          <span>Git Repository Link ➤</span>
        </a>
      </Flex1>
      {/* Technology Stack and Modules */}
      <Flex1
        id="about-this-web-app-technology-stack-and-modules"
        className="d-flex flex-row"
        style={{ width: "50%", flexWrap: "wrap" }}
      >
        <Flex1 className="text-left">
          <h2>
            <b>Technology Stack</b>
          </h2>
          <ul>
            <li>React TypeScript</li>
            <li>Next JS</li>
            <li>AWS S3</li>
            <li>Serverless Framework</li>
            <li>AWS API Gateway</li>
            <li>AWS CloudFormation</li>
            <li>AWS CloudWatch</li>
            <li>AWS Lambda</li>
            <li>AWS DynamoDB</li>
          </ul>
        </Flex1>
        <Flex1 className="text-left">
          <h2>
            <b>Modules</b>
          </h2>
          <ul>
            <li>
              <a href="https://mui.com/">Material UI</a>
            </li>
            <li>
              <a href="https://styled-components.com/">styled-components</a>
            </li>
            <li>
              <a href="https://create-react-app.dev/docs/adding-a-sass-stylesheet/">
                SASS/SCSS
              </a>
            </li>
            <li>
              <a href="https://www.framer.com/motion/">Framer Motion</a>
            </li>
          </ul>
        </Flex1>
      </Flex1>
      <Divider
        style={{
          width: "90%",
          marginInline: "auto",
        }}
      />
      {/* Deploymment Platform */}
      <Flex1 id="about-this-web-app-deployment-platform">
        <h2>
          <b>What platform is it using for deployment?</b>
        </h2>
        <a href="https://vercel.com/dashboard" target="_blank">
          <h3>Vercel ➤</h3>
        </a>
      </Flex1>
      <Divider
        style={{
          width: "90%",
          marginInline: "auto",
        }}
      />
      {/* Contribution of The Project */}
      <Flex1 id="about-this-web-app-contribution-of-the-project">
        <h2>
          <b>Who had contributed to this project?</b>
        </h2>
        <ul className="text-left">
          <li>Warrant TSAI</li>
        </ul>
      </Flex1>
    </FlexColumnCenteredContainer>
  );
}
