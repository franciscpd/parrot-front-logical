import styled from "styled-components";

import { Col as ColBase } from "react-bootstrap";

import background from "../../assets/images/background.svg";

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 24px;
    text-transform: uppercase;
    margin-bottom: 40px;
  }

  form {
    margin-bottom: 39px;
  }
`;

export const Col = styled(ColBase)`
  max-width: 487px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 72px 80px 65px;
`;
