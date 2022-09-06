import { Outlet } from 'react-router-dom';
import { Col, Row, Image } from "react-bootstrap";

import logo from "../../assets/images/logo-color.svg";

import * as S from './styles';

function AuthTemplate() {
  return (
    <S.Container className="bg-black">
      <Row className="w-100">
        <Col
          xs={{ offset: 1, span: 10 }}
          md={{ offset: 3, span: 6 }}
          lg={{ offset: 4, span: 4 }}
          className="bg-white border border-gray-400 p-5 d-flex flex-column align-items-center" >
          <Image src={logo} width={171} height={185} className="mt-4 mb-4" />
          <Outlet />
        </Col>
      </Row>
    </S.Container>
  );
}


export default AuthTemplate;