import React from "react";
import { NumberClock, DivisionClock } from "./styles";
import { converterForStopwatch } from "../../../common/utils/time";

interface IProps {
  time: number | undefined,
}

export default function Clock({ time = 0 }: IProps) {
  const { 
    firstNumberMinute,
    secondNumberMinute,
    firstNumberSecond,
    secondNumberSecond } = converterForStopwatch(time);

  return (
    <React.Fragment>
      <NumberClock>{firstNumberMinute}</NumberClock>
      <NumberClock>{secondNumberMinute}</NumberClock>
      <DivisionClock>:</DivisionClock>
      <NumberClock>{firstNumberSecond}</NumberClock>
      <NumberClock>{secondNumberSecond}</NumberClock>
    </React.Fragment>
  )
}