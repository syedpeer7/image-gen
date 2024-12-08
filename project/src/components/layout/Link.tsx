import React, { ReactNode } from 'react';

interface LinkProps {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
}

export function Link({ href, children, icon }: LinkProps) {
  return (
    <a
      href={href}
      className="flex items-center space-x-2 hover:text-purple-200 transition-colors duration-200"
    >
      {icon}
      <span>{children}</span>
    </a>
  );
}