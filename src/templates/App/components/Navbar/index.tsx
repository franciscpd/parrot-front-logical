import {
  Button,
  Container,
  Nav,
  Image,
  Offcanvas,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import logo from "../../../../assets/images/logo-hor-color.svg";
import { getCurrentUser, logout, RootState } from "../../../../store";
import { User } from "../../../../types/user";

import * as S from "./styles";

function Navbar() {
  const { name: username } = useSelector<RootState>(getCurrentUser) as User;
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <S.Navbar bg="white" expand="sm">
      <Container fluid="lg">
        <Link to="/">
          <S.Navbar.Brand>
            <Image src={logo} height={80} />
          </S.Navbar.Brand>
        </Link>
        <S.Navbar.Toggle aria-controls="offcanvasNavbar-expand" />
        <S.Navbar.Offcanvas
          id="offcanvasNavbar-expand"
          aria-labelledby="offcanvasNavbarLabel-expand"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand">
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Item className="d-flex align-items-center">
                <S.User>
                  Olá, {username} |
                </S.User>
                <S.Link onClick={handleLogout}>Sair</S.Link>
              </Nav.Item>
            </Nav>
          </Offcanvas.Body>
        </S.Navbar.Offcanvas>
      </Container>
    </S.Navbar>
  );
}

export default Navbar;