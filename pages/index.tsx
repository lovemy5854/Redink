import React from 'react';

import SideBar from '@/components/SideBar/SideBar';

import styled from '@emotion/styled';

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  flex: 0 0 56px;
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
`;

const ContentsBox = styled.div`
  flex: 1 0 auto;
`;

const SideToggleBar = styled.button`
  position: relative;
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
      <Header>111</Header>
      <ContentWrap>
        <SideBar />
        <ContentsBox>contents</ContentsBox>
      </ContentWrap>
      <SideToggleBar>버튼</SideToggleBar>
    </Wrap>
  );
};

export default Main;
