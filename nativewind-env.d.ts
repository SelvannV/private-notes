/// <reference types="nativewind/types" />

import type { Config } from "tailwindcss";

declare module "*tailwind.config.js" {
  const content: Config;
  export default content;
}
