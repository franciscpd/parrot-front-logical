import styled from "styled-components";
import { Button as ButtonBase, ButtonProps } from "react-bootstrap";

export const Button = styled(ButtonBase)<ButtonProps>`
  font-size: 24px;
  text-align: center;
  border-radius: 10px;
  font-weight: 400;
  color: black;
  background-color: #76bb4c;
  height: 39px;
  text-transform: lowercase;
  width: 100%;
  padding: 2px;
  border: none;

  &:hover,
  &:active,
  &:focus {
    background-color: #76bb4c;
    color: black;
    border: none;
  }
`;
