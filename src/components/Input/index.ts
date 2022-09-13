import styled from "styled-components";
import { FormControl, FormControlProps } from "react-bootstrap";

type InputProps = React.AllHTMLAttributes<HTMLElement> & FormControlProps;

export default styled(FormControl)<InputProps>`
  font-size: 24px;
  text-align: center;
  border-radius: 10px;
  border: 1px solid #919191;
  color: #919191;
  height: 39px;
`;
