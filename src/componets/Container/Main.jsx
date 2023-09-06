import React from "react";
import SidebarWithHeader from "../Sidebar/Sidebar";
import { Box } from "@chakra-ui/react";

const Main = ({ children }) => {
  return <SidebarWithHeader>{children}</SidebarWithHeader>;
};

export default Main;
