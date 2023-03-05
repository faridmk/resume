import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import {
  LangStyle,
  LangTitle,
  LangTitle2,
  LangTitle3,
} from "./LanguageRating.styled";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Intermediate",
  4.5: "Upper Intermediate",
  5: "Native / Advanced",
};

export default function LangRating() {
  const initialValue = {
    en: 4,
    az: 5,
    ru: 5,
    ukr: 4,
    tr: 4.5,
  };

  return (
    <LangStyle>
      <Box
        sx={{
          width: 500,
          display: "flex",
          alignItems: "center",
        }}
      >
        <LangTitle> English </LangTitle>
        <Rating
          name="text-feedback"
          value={initialValue.en}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />

        <Box sx={{ ml: 2 }}>{labels[initialValue.en]}</Box>
      </Box>

      <Box
        sx={{
          width: 500,
          display: "flex",
          alignItems: "center",
        }}
      >
        <LangTitle3>Azerbaijani</LangTitle3>
        <Rating
          name="text-feedback"
          value={initialValue.az}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />

        <Box sx={{ ml: 2 }}>{labels[initialValue.az]}</Box>
      </Box>

      <Box
        sx={{
          width: 500,
          display: "flex",
          alignItems: "center",
        }}
      >
        <LangTitle> Russian </LangTitle>
        <Rating
          name="text-feedback"
          value={initialValue.ru}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />

        <Box sx={{ ml: 2 }}>{labels[initialValue.ru]}</Box>
      </Box>

      <Box
        sx={{
          width: 500,
          display: "flex",
          alignItems: "center",
        }}
      >
        <LangTitle2> Ukrainian </LangTitle2>
        <Rating
          name="text-feedback"
          value={initialValue.ukr}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />

        <Box sx={{ ml: 2 }}>{labels[initialValue.ukr]}</Box>
      </Box>

      <Box
        sx={{
          width: 500,
          display: "flex",
          alignItems: "center",
        }}
      >
        <LangTitle> Turkish </LangTitle>
        <Rating
          name="text-feedback"
          value={initialValue.tr}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />

        <Box sx={{ ml: 2 }}>{labels[initialValue.tr]}</Box>
      </Box>
    </LangStyle>
  );
}
