import { runtime, Dispatch } from "raj";

type State = number;

runtime({
  init: [0], // State is an integer to count
  update(_message: {}, state: State) {
    return [state + 1]; // Increment the state
  },
  view(state: State, dispatch: Dispatch<any>) {
    const keepCounting = window.confirm(`Count is ${state}. Increment?`);
    if (keepCounting) {
      dispatch();
    }
  }
});
