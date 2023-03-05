import React, { useEffect, useState } from "react";
import { List, ListItem } from "./DateTime.styled";

export const DateTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <List>
      <ListItem>{date.toLocaleDateString()}</ListItem>
      <ListItem>{date.toLocaleTimeString()}</ListItem>
    </List>
  );
};
