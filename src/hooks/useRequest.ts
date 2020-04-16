import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

export default (action: (args: any) => Promise<any>) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const sendRequest = useCallback(
    (args = {}) => {
      setData(null);
      setIsLoading(true);
      return dispatch(action(args))
        .then(({ response }: any) => setData(response))
        .then(() => setIsLoading(false))
        .catch((err: any) => {
          setError(err);
          setIsLoading(false);
          throw err;
        });
    },
    [action, dispatch]
  );

  return { isLoading, data, error, sendRequest };
};
