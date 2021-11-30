import type { AnchorHTMLAttributes } from 'react';
import { forwardRef } from 'react';

// allow this component to accept all properties of "a" tag
export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  scroll?: boolean;
}

const Link = forwardRef(
  ({ to, scroll = true, ...props }: LinkProps, ref: any) => (
      <a {...props} href={to} ref={ref} />
  )
);

export default Link;
