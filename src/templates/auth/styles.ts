import styled from "styled-components";

import background from "../../assets/images/background.svg";

export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  min-height: 100vh;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;

  h1 {
    font-size: 24px;
    text-transform: uppercase;
  }
`;
