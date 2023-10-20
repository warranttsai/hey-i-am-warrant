// modules
import Carousel from "react-material-ui-carousel";
// images
import dashboard from "../../public/cafeManagementSystem/1.jpg";
import userList from "../../public/cafeManagementSystem/2.jpg";
// styled components
import {
  FlexRowCenteredContainer,
  FlexColumnCenteredContainer,
  Flex1,
} from "../styled-component/Container";

export default function CafeManagemengSystem() {
  return (
    <>
      <FlexRowCenteredContainer id="cafe-management-system-container">
        <Flex1 id="description" style={{ minWidth: 250 }}>
          <FlexColumnCenteredContainer>
            <Flex1>
              <h2>Cafe Management System</h2>
            </Flex1>
            <Flex1>
              Programming Language: <span>C#</span>
            </Flex1>
            <Flex1>
              GitHub:{" "}
              <a href="https://github.com/warranttsai/CafeManagementSystem">
                Click Me
              </a>
            </Flex1>
            <Flex1>Created Date: 06/10/2023</Flex1>
          </FlexColumnCenteredContainer>
        </Flex1>
        <Flex1 id="carousel" style={{ minWidth: 250 }}>
          <Carousel>
            <img src={dashboard} />
            <img src={userList} />
          </Carousel>
        </Flex1>
      </FlexRowCenteredContainer>
    </>
  );
}
