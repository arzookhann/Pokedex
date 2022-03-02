import React from "react";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

import colors from "../../theme/color.scss";

const CustomizedProgressBars = (props) => {
  const { value = 1, colorValue = colors.pastelGreen, height = 10 } = props;

  const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: height,
    borderRadius: 15,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      background: colors.athensGrey,
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 15,
      background: colorValue,
    },
  }));

  return <BorderLinearProgress variant="determinate" value={value} />;
};

export default CustomizedProgressBars;
