import { FormControl, FormControlProps } from "react-bootstrap";
import styled from "styled-components";

type InputProps = React.AllHTMLAttributes<HTMLElement> & FormControlProps;

export default styled(FormControl)<InputProps>`
  border-radius: 10px;
`;
