import { LinkProps } from 'react-router-dom';

import * as S from './styles';

function Link(props: LinkProps) {
  return <S.LinkCustom {...props} />
}

export default Link;