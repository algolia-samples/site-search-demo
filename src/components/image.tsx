import { ImgHTMLAttributes } from 'react';

export default function Image({
  alt,
  ...props
}: JSX.IntrinsicAttributes & ImgHTMLAttributes<HTMLImageElement>) {
  return <img alt={alt} {...props} />;
}
