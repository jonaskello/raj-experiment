import { Dispatch, Effect } from "raj";

export function fetchJson<Action>(
  url: string,
  actionCreator: (json: any) => Action
): Effect<Action> {
  console.log("in fetchJson");
  return async (dispatch: Dispatch<Action>) => {
    const r = await fetch(url);
    const json = await r.json();
    console.log("in effect", json);
    dispatch(actionCreator(json));
  };
}
