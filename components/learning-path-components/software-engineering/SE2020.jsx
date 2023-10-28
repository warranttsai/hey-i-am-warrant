// modules
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// images
import GraduatePic from "../../../public/SE2020/graduate-pic.jpeg";
import IELTs from "../../../public/SE2020/ielts.jpeg";
import BachelorCertificate from "../../../public/SE2020/bachelor-certificate.jpeg";
import BachelorTranscript from "../../../public/SE2020/bachelor-transcript.jpeg";
// styled-components
import { BrownCenterTitle } from "../../styled-component/Title";
import { SimpleGallery } from "../../styled-component/Gallery";

export default function SE2020() {
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
            2020
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
            I GRADUATED from my Bachelor of CSIE! Also, in this phase, I got 7
            bands from my IELTs exam. I'm fully ready to move to Australia. In
            this year, I was not doing much of the programming thing but I
            actually took a cyber security course from tafe to keep myself
            updated and learning.
          </Typography>
          <SimpleGallery>
            <Image
              src={GraduatePic}
              className="w-100 h-100"
              width={200}
              height={200}
              layout="responsive"
              alt="Loading..."
            />
            <Image
              src={IELTs}
              className="w-100 h-100"
              width={200}
              height={200}
              layout="responsive"
              alt="Loading..."
            />
            <Image
              src={BachelorCertificate}
              className="w-100 h-100"
              width={200}
              height={200}
              layout="responsive"
              alt="Loading..."
            />
            <Image
              src={BachelorTranscript}
              className="w-100 h-100"
              width={200}
              height={200}
              layout="responsive"
              alt="Loading..."
            />
          </SimpleGallery>
        </CardContent>
      </Card>
    </>
  );
}
