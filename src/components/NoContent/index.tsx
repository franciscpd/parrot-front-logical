import { Image } from "react-bootstrap";

import logoAlpha from "../../assets/images/logo-alpha.svg";

import * as S from "./styles";

function NoContent() {
  return (
    <S.Wrapper>
      <S.H2>Você ainda não fez nenhuma publicação :(</S.H2>
      <Image src={logoAlpha} width="126" height="126" />
    </S.Wrapper>
  );
}

export default NoContent;