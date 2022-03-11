import React from 'react';
import { SideRoute } from '../../constants/SideBar/sidebar';
import styled from '@emotion/styled';

interface SideListProps {
  active: boolean;
}

const SideBarWrap = styled.div`
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
  return (
    <SideBarWrap>
      {SideRoute.map((route) => {
        return <SideList active={route.active}>{route.name}</SideList>;
      })}
    </SideBarWrap>
  );
};

export default SideBar;
