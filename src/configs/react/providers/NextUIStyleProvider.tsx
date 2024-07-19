import { type ReactNode } from 'react';
import { NextUIProvider } from '@nextui-org/react';

export const NextUIStyleProvider = ({ children }: { children: ReactNode }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};
