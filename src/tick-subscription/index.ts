import { Dispatch } from "raj";

export function tickSubscription<Action>(
  actionCreator: (count: number) => Action
) {
  let timerId: NodeJS.Timer;
  let count = 1;
  return {
    effect(dispatch: Dispatch<Action>) {
      timerId = setInterval(() => {
        console.log("dispatching tick");
        dispatch(actionCreator(count++));
      }, 1000);
    },
    cancel() {
      clearInterval(timerId);
    }
  };
}
