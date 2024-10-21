"use client";
import React from "react";

import { Switch } from "@nextui-org/switch";
import { useTheme } from "@/themes/ThemeContext";
import { SunIcon } from "@/icons/SunIcon";
import { MoonIcon } from "@/icons/MoonIcon";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Switch
      checked={theme === "dark"}
      onChange={toggleTheme}
      size="lg"
      color="primary"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
    />
  );
}
