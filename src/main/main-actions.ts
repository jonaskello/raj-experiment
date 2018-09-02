import { Action as CounterAction } from "../counter/counter-actions";
import { Action as HelloAction } from "../hello/hello-actions";
import { Action as CatAction } from "../cat/cat-actions";
import { Action as TickerAction } from "../ticker/ticker-actions";

export type Action =
  | DispatchHello
  | DispatchCounter1
  | DispatchCounter2
  | DispatchCat
  | DispatchTicker;

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

export interface DispatchCat {
  type: "DispatchCat";
  action: CatAction;
}

export function dispatchCat(action: CatAction): DispatchCat {
  return { type: "DispatchCat", action };
}

export interface DispatchTicker {
  type: "DispatchTicker";
  action: TickerAction;
}

export function dispatchTicker(action: TickerAction): DispatchTicker {
  return { type: "DispatchTicker", action };
}
