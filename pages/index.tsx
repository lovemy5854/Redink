import React from 'react';

import HeaderWrap from '@/components/Header/Header';
import SideBar from '@/components/SideBar/SideBar';

import styled from '@emotion/styled';

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex: 0 0 calc(100% - 56px);
`;

const ContentsBox = styled.div`
  flex: 1 0 auto;
`;

const SideToggleBar = styled.button`
  position: absolute;
  bottom: 32px;
  left: 0;
  width: 56px;
  height: 56px;
  border-radius: 0px 16px 16px 0px;
  background: #fff;
  cursor: pointer;
`;

const Main = () => {
  return (
    <Wrap>
      <HeaderWrap />
      <ContentWrap>
        <SideBar />
        <ContentsBox>contents</ContentsBox>
      </ContentWrap>
      <SideToggleBar>버튼</SideToggleBar>
    </Wrap>
  );
};

export default Main;
