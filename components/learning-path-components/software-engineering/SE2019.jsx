// modules
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// images
import AlgorithmMock from "../../../public/SE2019/algorithm-mock.jpeg";
// styled-components
import { BrownCenterTitle } from "../../styled-component/Title";

export default function SE2019() {
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
            2019
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
            The 4th year of my Bachlor degree was stated from September to July
            2020. In this year, I was mainly focusing on build-up my project. I
            was in-charge with the calculation of drone-searching algorithm. To
            find out how to search the whole map completely and minimise the
            unexpected situation. I decided to operate the drone to circle the
            map until the center of the map.
          </Typography>
          <Image
            src={AlgorithmMock}
            className="w-100 h-100"
            width={250}
            height={250}
            layout="responsive"
            alt="Loading..."
          />
        </CardContent>
      </Card>
    </>
  );
}
