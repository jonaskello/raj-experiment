import { Action as CounterAction } from "../counter/counter-actions";
import { Action as HelloAction } from "../hello/hello-actions";

export type Action = DispatchHello | DispatchCounter1 | DispatchCounter2;

export interface DispatchHello {
  type: "DispatchHello";
  action: HelloAction;
}

export function dispatchHello(action: HelloAction): DispatchHello {
  return { type: "DispatchHello", action };
}

export interface DispatchCounter1 {
  type: "DispatchCounter1";
  action: CounterAction;
}

export function dispatchCounter1(action: CounterAction): DispatchCounter1 {
  return { type: "DispatchCounter1", action };
}

export interface DispatchCounter2 {
  type: "DispatchCounter2";
  action: CounterAction;
}

export function dispatchCounter2(action: CounterAction): DispatchCounter2 {
  return { type: "DispatchCounter2", action };
}
