import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { SideRoute } from '../../constants/SideBar/sidebar';

import Link from 'next/link';
import styled from '@emotion/styled';

interface SideListProps {
  name?: string;
  active: boolean;
  href: string;
}

const SideBarContent = styled.ul`
  flex: 0 0 220px;
  background: #2a323e;
  padding: 20px 0;
`;

const SideList = styled.a`
  display: block;
  padding: 16px 17px;
  color: #fff;
  font-weight: 300;
  background: ${(props: SideListProps) =>
    props.active ? `#444B55` : `#2A323E`};
  cursor: pointer;
  &:hover {
    background: #444b55;
  }
`;

const SideBar: React.FC<any> = () => {
  const route = useRouter();

  const [sideRoute, setSideRoute] = useState(SideRoute);

  useEffect(() => {
    console.log(route.pathname);
    console.log(sideRoute);
  }, [route.query]);

  return (
    <SideBarContent>
      <li>
        {sideRoute.map((route, idx) => {
          return (
            <Link key={route.name + idx} href={route.href} passHref={true}>
              <SideList href={route.href} active={route.active}>
                {route.name}
              </SideList>
            </Link>
          );
        })}
      </li>
    </SideBarContent>
  );
};

export default SideBar;
