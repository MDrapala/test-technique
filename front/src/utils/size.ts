import { IconVariant } from "../types/icon";

export const getVariantSize = (variant: IconVariant): string => {
  switch (variant) {
    case "large":
      return "24px";
    case "medium":
      return "16px";
    case "small":
      return "14px";
    default:
      return "";
  }
};
