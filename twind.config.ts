import { Options } from "$fresh/plugins/twind.ts";
import * as color from "twind/colors";

export default {
  selfURL: import.meta.url,
  darkMode: 'class',
  theme: {
    colors: {...color},
    extend: {
      boxShadow: {
        'cyan': '0 0.5rem 1rem 0 rgba(0, 206, 206, 0.35)'
      }
    }
  }
} as Options;
