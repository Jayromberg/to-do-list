import React from "react";
import { NumberClock, DivisionClock } from "./styles";

export default function Clock() {
  return (
    <React.Fragment>
      <NumberClock>0</NumberClock>
      <NumberClock>0</NumberClock>
      <DivisionClock>:</DivisionClock>
      <NumberClock>0</NumberClock>
      <NumberClock>0</NumberClock>
    </React.Fragment>
  )
}