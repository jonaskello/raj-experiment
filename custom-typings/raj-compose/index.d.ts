import { Effect } from "raj";

export function mapEffect<M1, M2>(
  effect: Effect<M1>,
  callback: (a: M1) => M2
): Effect<M2>;
