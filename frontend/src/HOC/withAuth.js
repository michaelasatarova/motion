// withAuth HOC

import { useHistory } from "react-router";
import { useSelector } from "react-redux";

export const withAuth = (WrappedComponent) => {
  return () => {
    const token = useSelector((state) => state.token);
    const { push } = useHistory();

    if (token) {
      return <WrappedComponent />;
    } else {
      push("/");
      return null;
    }
  };
};
