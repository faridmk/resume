import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Array Methods</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            map(), filter(), sort(), includes(), join(), find(), forEach(),
            indexOf(), findIndex(), every(), sort(), slice(), splice(), push(),
            reverse(), some(), shift(), unshift(), reduce(), pop(),
            lastIndexOf(), concat(), toString(){" "}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>React Hooks</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            useState(), useEffect(), useContext(), useMemo(), useReducer(),
            useCallback(), useRef()
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Object Methods</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Object.keys(), Object.values(), Object.entries(), Object.freeze()
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
