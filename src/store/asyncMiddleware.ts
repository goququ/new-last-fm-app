// @ts-ignore
import { createAsyncMiddleware } from "redux-arc";
import axios from "axios";

const DEFAULT_PARAMS = {
  api_key: process.env.API_KEY,
  format: "json",
};

interface ActionArgs {
  url: string;
  params: Record<string, string | number>;
  method: "POST" | "GET";
  payload: object;
}

interface Response {
  request: object;
  response: object;
}

type DoneFunc = (err: object | null, res: Response) => Promise<Response>;

const task = () => (done: DoneFunc) => ({
  url,
  method,
  params,
  payload,
}: ActionArgs) => {
  return axios
    .request({
      url,
      method,
      params: {
        ...DEFAULT_PARAMS,
        ...params,
        ...(payload || {}),
      },
    })
    .then((response) => done(null, { request: {}, response: response.data }));
};

export default createAsyncMiddleware(task);
