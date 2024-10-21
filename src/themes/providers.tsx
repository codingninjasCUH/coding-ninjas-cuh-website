// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import { ThemeProvider } from "@/themes/ThemeContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </ThemeProvider>
  );
}
