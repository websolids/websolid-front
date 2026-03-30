/* eslint-disable @typescript-eslint/no-explicit-any */
type ReactTagProps<T> = import("react").ComponentPropsWithRef<T>;
type ReactRef<T> =
  | React.RefObject<T>
  | React.MutableRefObject<T>
  | React.Ref<T>;
