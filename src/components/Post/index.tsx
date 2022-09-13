import { Post as PostType } from "../../types/post";
import Avatar from "../Avatar";

import * as S from "./styles";

type PostProps = PostType;

function Post({ content, user, created_at }: PostProps) {
  return (
    <S.Wrapper>
      <Avatar {...user} />
      <S.Post>
        <S.Title>{user?.name} - {user?.apartment}</S.Title>
        <S.Subtitle>{new Date(created_at).toLocaleString("pt-BR")}</S.Subtitle>
        <S.Content>{content}</S.Content>
      </S.Post>
    </S.Wrapper>
  );
}

export default Post;