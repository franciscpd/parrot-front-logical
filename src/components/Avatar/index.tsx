import ReactAvatar from "react-avatar";

import { User } from "../../types/user";

function Avatar({ name }: Partial<User>) {
  return <ReactAvatar color="#673ab7" name={name} round size="70" />;
}

export default Avatar;