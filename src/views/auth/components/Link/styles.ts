import { Link as LinkBase } from "react-router-dom";
import styled from "styled-components";

export const LinkCustom = styled(LinkBase)`
  text-decoration: none;
  color: #555555;
  font-size: 18px;
  text-transform: lowercase;
  font-weight: 400;

  &:hover {
    color: #555555;
  }
`;
