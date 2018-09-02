import { Effect } from "raj";

export function mapEffect<M1, M2>(
  effect: Effect<M1> | undefined,
  callback: (a: M1) => M2
): Effect<M2> | undefined;

export function batchEffects<M>(
  effects: ReadonlyArray<Effect<M> | undefined>
): Effect<M>;
