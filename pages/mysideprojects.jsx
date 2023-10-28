// module
import { motion } from "framer-motion";
import { Divider } from "@mui/material";
// styled-components
import { BlackTitle } from "../components/styled-component/Title";
// components
import Layout from "../components/layout";
import CafeManagemengSystem from "../components/my-side-projects-components/CafeManagementSystem";
import TotoEvHome from "../components/my-side-projects-components/TotoEvHome";
import StudioMcmxcvii97 from "../components/my-side-projects-components/StudioMcmxcVii97";

export default function MySideProjects() {
  return (
    <Layout>
      <div style={{ padding: "2vh 10vw" }}>
        <BlackTitle>My Side Projects</BlackTitle>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <CafeManagemengSystem />
      </motion.div>
      <Divider
        style={{
          width: "90%",
          marginInline: "auto",
          marginBlock: 10,
        }}
      />
      <motion.div
        className="w-100"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <TotoEvHome />
      </motion.div>
      <Divider
        style={{
          width: "90%",
          marginInline: "auto",
          marginBlock: 10,
        }}
      />
      <motion.div
        className="w-100"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <StudioMcmxcvii97 />
      </motion.div>
    </Layout>
  );
}
