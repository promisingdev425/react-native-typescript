import { themeGet } from "@styled-system/theme-get";
import { mapToTheme as theme } from "styled-map";

import get from "lodash/get";
import isNumber from "lodash/isNumber";

const px = (n: number) => {
  return isNumber(n) && n !== 0 ? `${n}px` : n;
};

export const getPx = (n: any, scale: number[]) => {
  return px(get(scale, n));
};

export const mapProps = (mapper: any) => {
  return (func: any) => {
    return (props: any) => {
      return func(mapper(props));
    };
  };
};

export const mapToTheme = (key: string, prop = "variant") => {
  return (props?: string) => {
    return theme(key, prop)(props)(props)(props);
  };
};

export const getColor = (key: string) => {
  return themeGet(`colors.${key}`);
};

export const getMetrics = (key: string) => {
  return themeGet(`metrics.${key}`);
};

export const getSpace = (key: string) => {
  return themeGet(`space.${key}`);
};

export const getRadii = (key: string) => {
  return themeGet(`radii.${key}`);
};

export const getTypography = (key: string) => {
  return themeGet(`typography.${key}`);
};

export const getFontSize = (key: string) => {
  return themeGet(`fontSizes.${key}`);
};

export const getLineHeight = (key: string) => {
  return themeGet(`lineHeights.${key}`);
};
