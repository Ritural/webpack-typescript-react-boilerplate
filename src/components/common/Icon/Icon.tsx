import * as React from 'react';

import ALL_ICONS from 'public/svg/all';

export type IconName = keyof typeof ALL_ICONS;

interface IProps {
  name: IconName;
  className?: string;
}

export const Icon = (props: IProps) => {
  const {
    name,
    className,
  } = props;

  const icon = ALL_ICONS[name];

  if (!icon) {
    console.warn(`No icon found for <${name}>`);
    return null;
  }

  const classes = className ? `SVG ${className}` : 'SVG';

  return (
    <span className={classes} data-icon={name}>
      {icon}
    </span>
  );
};
