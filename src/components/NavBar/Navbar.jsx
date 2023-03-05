import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MenuItem, MenuList } from './Navbar.styled';
import { Home } from '../../pages/Home/Home';
import { Experience } from '../../pages/Experience/Experience';
import { Education } from '../../pages/Education/Education';
import { SoftSkills } from '../../pages/SoftSkills/SoftSkills';
import { Languages } from '../../pages/Languages/Languages';
import { NotFound } from '../../pages/404/404';

export const Navbar = () => {
  return (
    <>
      <MenuList>
        <MenuItem to="/" end>
          Home
        </MenuItem>
        <MenuItem to="/experience">Experience</MenuItem>
        <MenuItem to="/education">Education</MenuItem>
        <MenuItem to="/soft-skills">Soft Skills</MenuItem>
        <MenuItem to="/languages">Languages</MenuItem>
      </MenuList>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/soft-skills" element={<SoftSkills />} />
        <Route path="/languages" element={<Languages />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/resume" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
