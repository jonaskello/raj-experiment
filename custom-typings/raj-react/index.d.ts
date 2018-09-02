import * as React from "react";
import { Program } from "raj";

export interface CreateApp<P, S, M> {
  (props: P): Program<S, M, React.ReactNode>;
}

export function program<P, S, M>(
  component: React.ComponentType<P>,
  createApp: CreateApp<P, S, M>
): React.ReactType<P>;
