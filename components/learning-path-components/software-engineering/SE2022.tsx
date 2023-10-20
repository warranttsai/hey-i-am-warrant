// modules
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// images
import CleanStormwaterLogo from "../../../public/SE2022/clean-stormwater-logo.jpeg";
import MasterCertificate from "../../../public/SE2022/master-certificate.jpeg";
// styled-components
import { BrownCenterTitle } from "../../styled-component/Title";
import { SimpleGallery } from "../../styled-component/Gallery";

export default function SE2022() {
  return (
    <>
      <Card
        sx={{
          minWidth: 400,
          background: "white",
          border: "5px solid rgba(3, 102, 214, 0.3)",
        }}
      >
        <CardContent>
          <BrownCenterTitle style={{ minWidth: "300px" }}>
            2022
          </BrownCenterTitle>
          <Typography
            sx={{
              fontSize: 14,
              width: "80%",
              marginInline: "auto",
            }}
            color="text.primary"
            gutterBottom
          >
            I <span style={{ color: "red" }}>GRADUATED</span>! I got my{" "}
            <span style={{ color: "blue" }}>Master</span> degree at the end of
            2022 and started to work in{" "}
            <span style={{ color: "blue" }}>Clean Stormwater</span> as software
            engineer from 31 of May 2022. <br />
            In this position, I had applied my skill of
            <span style={{ color: "red" }}>
              {" "}
              React JS/TS, ES6, JavaScript(Sails) HTML, CSS, Python(Flask), OOP,
              Encapsulation with AWS(Amplify, EC2, S3, API Gateway, Route 53,
              Cognito...etc)
            </span>
            . To support the teamwork,{" "}
            <span style={{ color: "blue" }}>
              Scrum and Agile methodology
            </span>{" "}
            was applied. To manage the task and version control,{" "}
            <span style={{ color: "blue" }}>
              JIRA Board and Bitbucket(GitHub)
            </span>{" "}
            were used in our company.
          </Typography>
          <SimpleGallery>
            <img
              style={{ width: 200, height: 150 }}
              src={CleanStormwaterLogo}
            />
            <img style={{ width: 200, height: 150 }} src={MasterCertificate} />
          </SimpleGallery>
        </CardContent>
      </Card>
    </>
  );
}
