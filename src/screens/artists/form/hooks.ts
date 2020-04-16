import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import qs from "query-string";

export const useFormActions = () => {
  const history = useHistory();
  const onSubmit = useCallback(
    (params) => {
      history.push({ pathname: "/artists", search: qs.stringify(params) });
    },
    [history]
  );

  return { onSubmit };
};
