import React, { useState } from 'react';

import HeaderWrap from '@/components/Header/Header';
import SideBar from '@/components/SideBar/SideBar';
import InfoCard from '@/components/Card/InfoCard';
import InfoRooms from '@/components/Card/InfoRooms';
import InfoAlarm from '@/components/Card/infoAlarm';
import InfoProgress from '@/components/Card/InfoProgress';

import styled from '@emotion/styled';

import sideToggle from '@/public/images/common/side_toggle.png';
import NoticeModal from '@/components/Modal/NoticeModal';

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
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;
  padding: 31px 32px;
`;

const ContentsLeft = styled.div`
  flex: 0 0 40%;
`;

const ContentsRight = styled.div`
  flex: 1 0 auto;
  margin-left: 30px;
`;

const SideToggleBar = styled.button`
  position: absolute;
  bottom: 32px;
  left: 0;
  width: 56px;
  height: 56px;
  text-indent: -9999px;
  border-radius: 0px 16px 16px 0px;
  box-shadow: 0px 0px 10px rgba(62, 73, 88, 0.12);
  background: #fff url(${sideToggle.src}) 50% 50% no-repeat;
  cursor: pointer;
`;

const Main = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [isToggle, setToggle] = useState(true);
  const [pages] = useState(
    Array.from({ length: 100 }).map((_, index) => `Item ${index + 1}`),
  );

  const handleModal = (isModalStatus: boolean) => {
    setIsShowing(isModalStatus);
  };

  const handleToggle = () => {
    setToggle(!isToggle);
  };

  const [noticeList, _] = useState([
    {
      text: '세금계산서 발행이 필요한 계약서가 15건 있습니다.',
      read: true,
      href: '#n',
    },
    {
      text: '세금계산서 발행이 필요한 계약서가 15건 있습니다.',
      read: false,
      href: '#n',
    },
    {
      text: '세금계산서 발행이 필요한 계약서가 15건 있습니다.',
      read: true,
      href: '#n',
    },
    {
      text: '세금계산서 발행이 필요한 계약서가 15건 있습니다.',
      read: false,
      href: '#n',
    },
  ]);

  return (
    <Wrap>
      <HeaderWrap onModal={() => console.log(333)} toggle={isToggle} />
      <ContentWrap>
        <SideBar toggle={isToggle} />
        <ContentsBox>
          <ContentsLeft>
            <InfoCard />
            <InfoRooms />
          </ContentsLeft>
          <ContentsRight>
            <InfoAlarm onDetailNotice={() => handleModal(true)} />
            <InfoProgress />
          </ContentsRight>
        </ContentsBox>
      </ContentWrap>
      <SideToggleBar onClick={handleToggle}>버튼</SideToggleBar>
      <div>
        {isShowing && (
          <NoticeModal
            noticeList={noticeList}
            closeModal={() => handleModal(false)}
            pages={pages}
          />
        )}
      </div>
    </Wrap>
  );
};

export default Main;
