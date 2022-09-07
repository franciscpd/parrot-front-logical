import { Navigate, Outlet } from 'react-router-dom';
import { Row, Image } from "react-bootstrap";
import { useSelector } from 'react-redux';

import { getCurrentUser, RootState } from '../../store';

import logo from "../../assets/images/logo-color.svg";

import * as S from './styles';

function AuthTemplate() {
  const user = useSelector<RootState>(getCurrentUser);

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <S.Container className="bg-black">
      <Row className="w-100 d-flex justify-content-center align-items-center">
        <S.Col xs={10} sm={8} md={6} lg={4} className="bg-white border border-gray-400" >
          <Image src={logo} width={171} height={185} className="mt-4 mb-4" />
          <Outlet />
        </S.Col>
      </Row>
    </S.Container>
  );
}


export default AuthTemplate;