// modules
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// images
import CleanStormwaterGroup1 from "../../public/present-work/cleanstormwater-group-1.jpeg";
import CleanStormwaterGroup2 from "../../public/present-work/cleanstormwater-group-2.jpeg";
import CleanStormwaterGroup3 from "../../public/present-work/cleanstormwater-group-3.jpeg";
import CleanStormwaterGroup4 from "../../public/present-work/cleanstormwater-group-4.jpeg";
// styled-components
import { Flex1 } from "../styled-component/Container";
import { BrownCenterTitle } from "../styled-component/Title";

export default function Cleanstormwater() {
  return (
    <>
      <Card
        id="cleanstormwater-container"
        sx={{
          background: "white",
          border: "5px solid rgba(3, 102, 214, 0.3)",
          textAlign: "left",
        }}
      >
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <BrownCenterTitle
            style={{
              fontSize: "30px",
              flex: 1,
              marginBlock: "10px",
              textAlign: "left",
            }}
          >
            Clean Stormwater - from May 2022
          </BrownCenterTitle>
          <span style={{ flex: 1, fontWeight: 700 }}>
            Software Engineer - Internship
          </span>
          <span style={{ flex: 1 }}>
            Clean Stormwater was where I had learned the most in my working
            experience. It was my first experience in the IT industry. In this
            internship, I had the chance to work in the DevOps team with the
            other engineers. Also, the civil engineering team was the main lead
            of our company. Under this environment, it allowed me to collaborate
            with the engineers from differnet backgound to devliver a successful
            project.
          </span>
          <ul style={{ flex: 1 }}>
            <li>
              Front-end development and management. (React JS/TS, ES6, HTML5,
              CSS/SCSS)
            </li>
            <li>
              Back-end development and management. (Sails.JS, Python Flask, AWS
              Lambda serverless)
            </li>
            <li>
              AWS: Amplify, EC2, Cognito, Lambda, Route 53, API Gateway,
              CloudWatch, S3
            </li>
            <li>Database relationship design</li>
            <li>UML chart drawing</li>
            <li>Bitbucket, JIRA Board management.</li>
            <li>Handling Google Analytics to collect user usages.</li>
            <li>Task distributing for Development Team.</li>
            <li>Trainer of new staff</li>
            <li>
              Setting up the MS Teams including user role, channel management,
              chat management and documentations.
            </li>
            <li>Refactoring: encapsulation and optimise the script</li>
            <li>Project progress presenting, reporting and monitoring.</li>
          </ul>
          <Flex1
            style={{
              margin: "0 auto 0.67rem auto",
              display: "flex",
              gap: "10px",
              maxWidth: "700px",
              overflow: "scroll",
            }}
          >
            <img
              style={{ width: "200px", height: "130px" }}
              src={CleanStormwaterGroup1}
            />
            <img
              style={{ width: "200px", height: "130px" }}
              src={CleanStormwaterGroup2}
            />
            <img
              style={{ width: "200px", height: "130px" }}
              src={CleanStormwaterGroup3}
            />
            <img
              style={{ width: "200px", height: "130px" }}
              src={CleanStormwaterGroup4}
            />
          </Flex1>
        </CardContent>
      </Card>
    </>
  );
}
