import styled from "styled-components";
import { Navbar as NavbarBase, NavbarProps } from "react-bootstrap";

export const User = styled.div`
  font-size: 24px;
  color: #76bb4c;
`;

export const Link = styled.div`
  font-size: 16px;
  color: #6033aa;
  margin-left: 6px;
  cursor: pointer;
`;

export const Navbar = styled(NavbarBase)<NavbarProps>`
  height: 83px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.08);
`;
