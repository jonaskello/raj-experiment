import { Dispatch, Effect } from "raj";

export function fetchJson<Action>(
  url: string,
  actionCreator: (json: any) => Action
): Effect<Action> {
  return async (dispatch: Dispatch<Action>) => {
    const r = await fetch(url);
    const json = await r.json();
    dispatch(actionCreator(json));
  };
}
