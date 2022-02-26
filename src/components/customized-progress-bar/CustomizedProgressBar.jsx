import React from "react";
import { styled } from "@mui/material/styles";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";

import { PROGRESS_BAR_BACKGROUND } from "../../utils/constants";

export default function CustomizedProgressBars(props) {

  const { value = 1, colorValue = '', height = 10 } = props;

  const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: height,
    borderRadius: 15,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      background: PROGRESS_BAR_BACKGROUND
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 15,
      background: colorValue,
    }
  }));

  return (
    <BorderLinearProgress variant="determinate" value={value} />
  );
}
