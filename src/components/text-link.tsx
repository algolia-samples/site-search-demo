import type { FC } from "react";
import cx from "classnames";

import Link from "./link";

const isInternalLink = (link: string) => {
  const externalRoutes = [
    "blog",
    "dashboard",
    "doc",
    "ebook",
    "event",
    "lp",
    "pdfs",
    "study",
    "support",
    "thank-you",
    "users",
    "webinar"
  ];
  return !new RegExp(
    `(^[A-Za-z])${
      externalRoutes.length > 0
        ? `|(^\\/(${externalRoutes.join("|")})(\\/|\\?|$))`
        : ""
    }`
  ).test(link);
};

const COLORS = {
  blue: "uil-color-nebula-500",
  green: "uil-color-green-700",
  grey: "uil-color-grey-700",
  pink: "uil-color-pink-600",
  white: "uil-color-white"
};

interface TextLinkProps {
  color?: "blue" | "green" | "grey" | "pink" | "white";
  to: string;
  [key: string]: any;
}

const TextLink: FC<TextLinkProps> = ({
  children,
  color = "blue",
  to,
  ...other
}) => {
  const isInternal = isInternalLink(to);
  const { className: otherClassName, ...otherProps } = other;
  return isInternal ? (
    <Link
      {...otherProps}
      className={cx("td-none", COLORS[color], otherClassName)}
      to={to}
    >
      {children}
    </Link>
  ) : (
    <a
      {...otherProps}
      className={cx("td-none", COLORS[color], otherClassName)}
      href={to}
    >
      {children}
    </a>
  );
};

export default TextLink;
