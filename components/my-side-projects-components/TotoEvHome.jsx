// modules
import React from "react";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";
// images
import dashboard from "../../public/totoEvHome/dashboard.jpg";
import tutorial from "../../public/totoEvHome/tutorial.jpg";
import help from "../../public/totoEvHome/help.jpg";
// styled components
import {
  FlexRowCenteredContainer,
  FlexColumnCenteredContainer,
  Flex1,
} from "../styled-component/Container";

export default function TotoEvHome() {
  return (
    <>
      <FlexRowCenteredContainer
        id="totoev-home-container"
        style={{ padding: "50px 30px" }}
      >
        <Flex1 id="description" style={{ minWidth: 250 }}>
          <FlexColumnCenteredContainer>
            <Flex1>
              <h2>TotoEV Home</h2>
            </Flex1>
            <Flex1>
              Programming Language: <span>React TypeScript</span>
            </Flex1>

            <Flex1>
              Deploy Link: <a href="https://stormupdated.com.au/">Click Me</a>
            </Flex1>
            <Flex1>Created Date: 31/05/2023</Flex1>
          </FlexColumnCenteredContainer>
        </Flex1>
        <Flex1 id="carousel" style={{ minWidth: 250 }}>
          <Carousel>
            <Image
              src={dashboard}
              className="w-100 h-100"
              width={500}
              height={500}
              layout="responsive"
              alt="Loading..."
            />
            <Image
              src={tutorial}
              className="w-100 h-100"
              width={500}
              height={500}
              layout="responsive"
              alt="Loading..."
            />
            <Image
              src={help}
              className="w-100 h-100"
              width={500}
              height={500}
              layout="responsive"
              alt="Loading..."
            />
          </Carousel>
        </Flex1>
      </FlexRowCenteredContainer>
    </>
  );
}
