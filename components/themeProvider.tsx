"use client";

import * as React from "react";

export function ThemeProvider({ children, ...props }: any) {
  return <div {...props}>{children}</div>;
}