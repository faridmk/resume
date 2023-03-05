import React from 'react';

import { AccordionStyle, HomeStyle, HomeTitle } from './Home.styled';

import TransitionsModal from '../../components/Modal/Modal';
import LinearColor from '../../components/LinearProgress/LinearProgress';
import FullWidthGrid from '../../components/GridContainer/GridContainer';
import SimpleAccordion from '../../components/Accordion/Accordion';
import { TaskCalculate } from '../../components/TaskCalculate/TaskCalculate';

export const Home = () => {
  return (
    <HomeStyle>
      <TaskCalculate />

      <HomeTitle>I use ...</HomeTitle>
      <LinearColor />
      <FullWidthGrid />
      <LinearColor />
      <TransitionsModal />
      <AccordionStyle>
        <SimpleAccordion />
      </AccordionStyle>
    </HomeStyle>
  );
};
