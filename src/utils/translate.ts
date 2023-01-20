import React from "react";
const ro = require("@locale/ro.json");

/**
 * Translation Function ___ (Three Dashes)
 * -> returns a <span>
 */
export const ___ = <T extends Record<string, React.ReactNode>>(
  key: string,
  lang?: "en" | "ro",
  replacements?: T
): React.ReactNode => {
  let result = __(key, lang);

  if (replacements) {
    const split = result.split(/(\%[\w\d]+\%)/g);
    const children = split.map((item, index) => {
      return React.createElement(
        "span",
        { key: index },
        replacements[item] ?? item
      );
    });

    return React.createElement("span", null, children);
  }

  return result;
};

/**
 * Translation Function __ (Two Dashes)
 * -> returns a string
 */
export const __ = (key: string, lang?: "en" | "ro"): string => {
  if (lang && lang === "ro") {
    return (ro[key] as string) ?? key;
  }

  return key;
};
