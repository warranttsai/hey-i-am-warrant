// module
import { motion } from "framer-motion";
// styled-components
import { BlackCenterTitle } from "../components/styled-component/Title";
import {
  GreyBackgroundContainer,
  Flex1,
  FlexColumnCenteredContainer,
} from "../components/styled-component/Container";
// components
import Cleanstormwater from "../components/working-experience-component/CleanStormwater";
import Fila from "../components/working-experience-component/Fila";
import Funkdelics from "../components/working-experience-component/Funkdelics";
import Blackball from "../components/working-experience-component/Blackball";
import PoppingDanceInstructor from "../components/working-experience-component/PoppingDanceInstructor";

export default function WorkingExperience() {
  return (
    <>
      <div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ padding: "2vh 10vw" }}>
            <BlackCenterTitle>Software Engineer Experience</BlackCenterTitle>
            <Cleanstormwater />
          </div>
        </motion.div>
      </div>
      <GreyBackgroundContainer>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ padding: "2vh 10vw" }}>
            <BlackCenterTitle style={{ color: "white" }}>
              The Other Experience
            </BlackCenterTitle>
            <FlexColumnCenteredContainer style={{ gap: "10px" }}>
              <Flex1 className="w-100">
                <Fila />
              </Flex1>
              <Flex1 className="w-100">
                <Funkdelics />
              </Flex1>
              <Flex1 className="w-100">
                <Blackball />
              </Flex1>
              <Flex1 className="w-100">
                <PoppingDanceInstructor />
              </Flex1>
            </FlexColumnCenteredContainer>
          </div>
        </motion.div>
      </GreyBackgroundContainer>
    </>
  );
}
