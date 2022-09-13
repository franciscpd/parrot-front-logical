import styled, { css } from "styled-components";
import {
  Button as ButtonBase,
  ButtonProps as ButtonPropsBase,
} from "react-bootstrap";

type ButtonProps = ButtonPropsBase & {
  fullWidth?: boolean;
  size?: "sm" | "lg";
  backgroundColor?: "purple" | "green";
  color?: "black" | "white";
  width?: number;
};

const fontSizes = {
  lg: 24,
  sm: 16,
};

const backgroundColors = {
  purple: "#673ab7",
  green: "#76bb4c",
};

const sizes = {
  lg: 39,
  sm: 28,
};

export default styled(ButtonBase)<ButtonProps>`
  text-align: center;
  border-radius: 10px;
  font-weight: 400;
  text-transform: lowercase;
  padding: 2px;
  border: none;

  ${({
    fullWidth,
    size = "lg",
    backgroundColor = "green",
    color = "black",
    width,
  }) => css`
    width: ${fullWidth ? "100%" : width ? `${width}px` : "auto"};
    font-size: ${fontSizes[size]}px;
    color: ${color};
    background-color: ${backgroundColors[backgroundColor]};
    height: ${sizes[size]}px;

    &:hover,
    &:active,
    &:focus,
    &:disabled {
      background-color: ${backgroundColors[backgroundColor]};
      color: ${color};
      border: none;
    }
  `}
`;
