import { Container as ContainerBase, ContainerProps } from "react-bootstrap";
import styled from "styled-components";

export const Wrapper = styled(ContainerBase)<ContainerProps>`
  max-width: 700px;
  border-width: 0px 1px 0px 1px;
  border-style: solid;
  border-color: #c5c5c5;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-grow: 1;
  height: max-content;
  padding-top: 83px;
  padding: 83px 0px 0px;
`;

export const Container = styled(ContainerBase)<ContainerProps>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
