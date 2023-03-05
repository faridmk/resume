import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { FcMindMap } from "react-icons/fc";
import { IconContext } from "react-icons";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function EduTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Computer Sciences (MD)" {...a11yProps(0)} />
          <Tab label="Master of BA" {...a11yProps(1)} />
          <Tab label="Engineering Economy (BA)" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <IconContext.Provider
          value={{ color: "green", size: "20", className: "react-icons" }}
        >
          2022 / 2024 <FcMindMap /> Sumy State University (Ukraine){" "}
          <FcMindMap /> Master Degree of Computer Sciences
        </IconContext.Provider>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <IconContext.Provider
          value={{ color: "green", size: "20", className: "react-icons" }}
        >
          2015 / 2017 <FcMindMap /> Sumy State University (Ukraine){" "}
          <FcMindMap /> Master of Business Administration
        </IconContext.Provider>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <IconContext.Provider
          value={{ color: "green", size: "20", className: "react-icons" }}
        >
          2000 / 2004 <FcMindMap /> Azerbaijan State Oli and Industry University
          (Azerbaijan) <FcMindMap /> Bachelor Degree of Engineering Economy
        </IconContext.Provider>
      </TabPanel>
    </Box>
  );
}
