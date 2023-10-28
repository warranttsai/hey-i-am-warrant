// modules
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// images
// styled-components
import { BrownCenterTitle } from "../../styled-component/Title";

export default function SE2016() {
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
            2021
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
            In the beginning of this year, I enrolled my{" "}
            <span style={{ color: "red" }}>
              Master degree of Information Technology in RMIT
            </span>
            . I'm really lucky to get exemptions from my Bachelor degree and
            successfully got into this University. In this year, I had learned
            the usage of <span style={{ color: "red" }}>JAVA</span> and mostly
            learning how the eduction works in Australia. A brand new
            environment brought the new challenges for me.
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
