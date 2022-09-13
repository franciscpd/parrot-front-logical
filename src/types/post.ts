import { User } from "./user";

export type Post = {
  content?: string;
  user?: User;
  created_at: Date;
  updated_at: Date;
};

export type PostRequest = Partial<Post>;

export type PostRequestResponse = {
  data: Post[] | Post;
};
