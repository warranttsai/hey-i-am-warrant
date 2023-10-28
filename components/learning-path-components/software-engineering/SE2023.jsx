// modules
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// images
// styled-components
import { BrownCenterTitle } from "../../styled-component/Title";

export default function SE2023() {
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
            2023
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
            In the beginning of the 2023, I took the role to be the secretary in{" "}
            <span style={{ color: "red" }}>RMIT dancing club "Funkdelics"</span>
            . The meanings of this role are broad for me. Proving my English
            communication, self-organisation, management ability...etc. But the
            most important thing is that I could contribute my power for dancing
            community! This is where I found my passion of life!
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
