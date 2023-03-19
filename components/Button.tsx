import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "https://esm.sh/v111/twind@0.16.17/twind";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      className={tw`px-2 py-1 rounded-md shadow-sm`}
    />
  );
}
