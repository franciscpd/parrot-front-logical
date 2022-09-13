import { useMemo } from "react";
import { useSelector } from "react-redux";

import NoContent from "../../components/NoContent";
import Post from "../../components/Post";
import { RootState } from "../../store";
import { Post as PostType } from "../../types/post";

import Profile from "./components/Profile";

function FeedView() {
  const posts = useSelector<RootState>((state) => state.post.posts) as PostType[];

  const sortedPosts = useMemo(() => {
    return [...posts]?.sort((a, b) => {
      if (b?.created_at?.toLocaleString() > a?.created_at?.toLocaleString()) {
        return 1;
      }

      return -1;
    });
  }, [posts]);

  return (
    <>
      <Profile />
      {sortedPosts && sortedPosts.length ? sortedPosts.map((post, index) => {
        return (<Post key={index} {...post} />);
      }) : <NoContent />}
    </>
  );
}

export default FeedView;