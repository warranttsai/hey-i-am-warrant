// modules
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// styled-components
import { BrownCenterTitle } from "../../styled-component/Title";

export default function SE2018() {
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
            2018
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
            The 3<sup>rd</sup> year of my university life. We start to do the
            graduate project and learn the{" "}
            <span style={{ color: "red" }}>software development circle</span>.
            Because the workload from school was getting lifted, I started to
            focus on training my English and prepare the documents to move to
            Australia. Apart from that, I tried to do a self-research on{" "}
            <span style={{ color: "red" }}>machine learning</span> and implement
            some small project with{" "}
            <span style={{ color: "red" }}>Python Tensorflow</span> from{" "}
            <a href="https://www.google.com/search?q=python+tensorflow+mofan&oq=python+tensorflow+mofan&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigAdIBCDQyNjdqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8">
              莫煩Python
            </a>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
