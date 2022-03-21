import React from 'react';
import styled from '@emotion/styled';

import logo from '@/public/images/common/logo.png';
import selectArrow from '@/public/images/common/select-arrow.png';

const Header = styled.div`
  display: flex;
  flex: 0 0 56px;
`;

const HeaderListBox = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  flex: 0 0 220px;
  background: ${({ active }) => (active ? '#2a323e' : '#F7F8F9')};

  & > button > span {
    color: ${({ active }) => (active ? '#fff' : '#2A323E')};
  }
`;

const HeaderRightBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1 0 auto;
  padding: 0 20px;
  box-shadow: 0px 0px 10px rgba(62, 73, 88, 0.12);
`;

const MenuBox = styled.ul`
  display: flex;
  flex-direction: row;
`;
const MenuItems = styled.li`
  margin-left: 30px;
  margin-right: ${(props: { last?: boolean }) => props.last && '20px'};
`;

const SelectBox = styled.button`
  display: block;
  padding: 0 16px;
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  background: none;
  border: 0;
`;
const SelectText = styled.span`
  display: block;
  font-size: 16px;
  color: #fff;
  background: url(${selectArrow.src}) 100% 50% no-repeat;
  text-align: left;
  cursor: pointer;
`;

const HeaderWrap = ({
  onModal,
  toggle,
}: {
  onModal?: () => void;
  toggle: boolean;
}) => {
  return (
    <Header>
      <HeaderListBox active={toggle}>
        <SelectBox onClick={onModal}>
          <SelectText>오몽 지식산업센터</SelectText>
        </SelectBox>
      </HeaderListBox>
      <HeaderRightBox>
        <h1>
          <img src={logo.src} />
        </h1>
        <MenuBox>
          <MenuItems>검색</MenuItems>
          <MenuItems>알림</MenuItems>
          <MenuItems last={true}>유저</MenuItems>
        </MenuBox>
      </HeaderRightBox>
    </Header>
  );
};

export default HeaderWrap;
