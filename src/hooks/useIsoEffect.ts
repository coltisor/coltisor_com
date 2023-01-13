import { useEffect, useLayoutEffect } from "react";

/**
 * We need useLayoutEffect for GSAP, but it cannot run on server, so we get an annoying warning message
 * This hooks solves the inconvenience
 *
 * PS. It is actually a solution proposed by the Greensock itself: https://greensock.com/react-advanced/#useIsomorphicLayoutEffect
 */
export const useIsoEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
