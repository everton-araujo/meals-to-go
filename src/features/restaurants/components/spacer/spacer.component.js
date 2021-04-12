import React from "react";

import {
  TopSmall,
  TopMedium,
  TopLarge,
  LeftSmall,
  LeftMedium,
  LefLarge,
  RightSmall,
  RightMedium,
  RightLarge,
  BottomSmall,
  BottomMedium,
  BottomLarge,
} from "./spacer.component.style";

export const Spacer = ({ size }) => {
  switch (size) {
    case "top-medium":
      return <TopMedium />;

    case "top-large":
      return <TopLarge />;

    case "left-small":
      return <LeftSmall />;

    case "left-medium":
      return <LeftMedium />;

    case "left-large":
      return <LefLarge />;

    case "right-small":
      return <RightSmall />;

    case "right-medium":
      return <RightMedium />;

    case "right-large":
      return <RightLarge />;

    case "bottom-small":
      return <BottomSmall />;

    case "bottom-medium":
      return <BottomMedium />;

    case "bottom-large":
      return <BottomLarge />;

    default:
      return <TopSmall />;
  }
};
