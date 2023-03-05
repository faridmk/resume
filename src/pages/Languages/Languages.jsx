import React from 'react';
import { useNavigate } from 'react-router-dom';
import LangRating from '../../components/LanguageRating/LanguageRating';
import { Btn } from './Language.styled';

export const Languages = () => {
  const navigate = useNavigate();
  return (
    <div>
      <LangRating />
      <Btn onClick={() => navigate('/')}>Go to Home Page</Btn>
    </div>
  );
};
