// modules
import Carousel from "react-material-ui-carousel";
// images
import dashboard from "../../public/studioMcmxcvii97/dashboard.jpg";
import priceConsultant from "../../public/studioMcmxcvii97/priceConsultant.jpg";
// styled components
import {
  FlexRowCenteredContainer,
  FlexColumnCenteredContainer,
  Flex1,
} from "../styled-component/Container";

export default function StudioMcmxcvii97() {
  return (
    <>
      <FlexRowCenteredContainer id="studio-mcmxcvii-97-container">
        <Flex1 id="description" style={{ minWidth: 250 }}>
          <FlexColumnCenteredContainer>
            <Flex1>
              <h2>Studio Mcmxvii 97</h2>
            </Flex1>
            <Flex1>
              Programming Language: <span>React JavaScript</span>
            </Flex1>
            <Flex1>
              GitHub:{" "}
              <a
                href="https://github.com/warranttsai/studio-mcmxc-vii-97"
                target="_blank"
              >
                Click Me
              </a>
            </Flex1>
            <Flex1>
              Deploy Link:{" "}
              <a href="https://studio-mcmxc-vii-97.vercel.app/">Click Me</a>
            </Flex1>
            <Flex1>Created Date: 13/02/2023</Flex1>
          </FlexColumnCenteredContainer>
        </Flex1>
        <Flex1 id="carousel" style={{ minWidth: 250 }}>
          <Carousel>
            <img src={dashboard} />
            <img src={priceConsultant} />
          </Carousel>
        </Flex1>
      </FlexRowCenteredContainer>
    </>
  );
}
