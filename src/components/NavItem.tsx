// components/NavItem.tsx

import React from 'react';
import Link from 'next/link';

type NavItemProps = {
  href: string;
  title: string;
  description?: string; // 可选属性
};

const NavItem: React.FC<NavItemProps> = ({ href, title, description }) => {
  return (
    <div className="p-4 m-2 border border-gray-200 rounded shadow hover:shadow-md">
      <Link href={href}>
        <p className="text-lg font-bold">{title}</p>
      </Link>
      {description && <p className="text-sm text-gray-600">{description}</p>}
    </div>
  );
};

export default NavItem;