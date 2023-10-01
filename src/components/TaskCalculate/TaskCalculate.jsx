import React, { useEffect, useState } from "react";
import ErrorMessageTask from "../ErrorMessageTask/ErrorMessageTask";
import SuccessMessageTask from "../SuccessMessageTask/SuccessMessageTask";
import {
  CheckButton,
  RefreshButton,
  Style,
  Task,
  TaskInput,
  TaskStyle,
  TaskTitle,
  TextBeforeInput,
} from "./TaskCalculate.styled";

import { FcBookmark } from "react-icons/fc";
import { FcRedo } from "react-icons/fc";

export const TaskCalculate = () => {
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [result, setResult] = useState("");
  const [add, setAdd] = useState("");
  const [check, setCheck] = useState("");
  const [refresh, setRefresh] = useState("");

  useEffect(() => {
    setFirstNum(Math.floor(Math.random() * 44 + 10));
  }, [refresh]);

  useEffect(() => {
    setSecondNum(Math.floor(Math.random() * 15 + 10));
  }, [refresh]);

  useEffect(() => {
    setResult(firstNum + secondNum);
  }, [firstNum, secondNum]);

  const CheckOption = () => {
    setCheck(() => {
      return +add === +result ? <SuccessMessageTask /> : <ErrorMessageTask />;
    });
  };

  const RefreshTask = () => {
    setRefresh(!refresh);
  };

  const EnterKey = (e) => {
    if (e.key === "Enter") {
      setCheck(() => {
        return +add === +result ? <SuccessMessageTask /> : <ErrorMessageTask />;
      });
    }
  };
  return (
    <Style>
      <TaskTitle>
        <FcBookmark />
        Check your Math skills:{" "}
      </TaskTitle>
      <TaskStyle>
        <Task>
          {firstNum} + {secondNum}
        </Task>
        <TextBeforeInput>
          Enter your result here <FcRedo />
        </TextBeforeInput>
        <TaskInput
          type="text"
          placeholder="number"
          value={add}
          onChange={(e) => setAdd(e.target.value)}
          onKeyDown={EnterKey}
        />
        <CheckButton type="button" onClick={CheckOption}>
          Check
        </CheckButton>
        <RefreshButton type="button" onClick={() => RefreshTask()}>
          Refresh Task
        </RefreshButton>
      </TaskStyle>
      <div>{check}</div>
    </Style>
  );
};
