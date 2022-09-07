import { FormControlProps } from "react-bootstrap";

import * as S from "./styles";

function Input(props: React.AllHTMLAttributes<HTMLElement> & FormControlProps) {
  return <S.Input {...props} />
}

export default Input;