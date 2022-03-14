import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { SideRoute } from '@/constants/SideBar/sidebar';

import Link from 'next/link';
import styled from '@emotion/styled';

interface SideListProps {
  name?: string;
  active: boolean;
  href: string;
  line?: boolean;
}

const SideBarContent = styled.ul`
  flex: 0 0 220px;
  background: #2a323e;
  padding: 20px 0;
`;

const SideList = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  padding: 16px 17px;
  color: #fff;
  font-weight: 300;
  background: ${(props: SideListProps) =>
    props.active ? `#444B55` : `#2A323E`};
  cursor: pointer;
  &:hover {
    background: #444b55;
  }

  ${(props: any) =>
    props.line &&
    `&:after {
    content: '';
    position: absolute;
    top: 0;
    left:16px;
    right:16px;
    height: 1px;
    background: #595F68;
  }`};
`;

const SideText = styled.span`
  display: block;
  margin-top: 8px;
  padding-left: 10px;
`;

const SideBar: React.FC<any> = () => {
  const route = useRouter();

  const [sideRoute, setSideRoute] = useState(SideRoute);

  useEffect(() => {
    console.log(route.pathname);
    console.log(sideRoute);
    console.log(setSideRoute);
  }, [route.query]);

  return (
    <SideBarContent>
      <li>
        {sideRoute.map((route, idx) => {
          return (
            <Link key={route.name + idx} href={route.href} passHref={true}>
              <SideList
                href={route.href}
                active={route.active}
                line={sideRoute.length - 1 === idx}
              >
                <Image {...route.img} />
                <SideText>{route.name}</SideText>
              </SideList>
            </Link>
          );
        })}
      </li>
    </SideBarContent>
  );
};

export default SideBar;
