import React, { useState } from 'react';

import styled from '@emotion/styled';

import BadgeText from '@/components/Badge/Badge';

const InfoAlarmWrap = styled.div`
  padding: 24px 0;
  border: 1px solid #eeeff0;
`;

const InfoAlarmHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  padding: 0 24px;
`;

const InfoAlarmLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const InfoAlarmText = styled.p`
  font-size: 16px;
  margin-right: 8px;
`;

const InfoAlarmListBox = styled.ul``;

const InfoAlarmListItems = styled.li<{ read: boolean }>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 9px 24px 9px 40px;
  border-top: 1px solid #eeeff0;

  ${(props) =>
    props.read &&
    `
    & a > span {
      color:#ccc;
    }
    &:after{
    content:"";
    position:absolute;
    top:50%;
    left:26px;
    width:4px;
    height:4px;
    margin-top:-2px;
    border-radius:50%;
    background:#E03A45;
  }`};

  & > a {
    display: flex;
    flex: 1 0 auto;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    & > span {
      font-size: 14px;
    }
  }

  &:hover {
    background: #f7f8f9;
  }
`;

const InfoAlarm = ({ onDetailNotice }: { onDetailNotice?: () => void }) => {
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

  const onListClick = (
    list: { text: string; read: boolean; href: string },
    idx: number,
  ) => {
    console.log(list, idx);
  };

  return (
    <InfoAlarmWrap>
      <InfoAlarmHeader>
        <InfoAlarmLeft>
          <InfoAlarmText>현장 활동 알림</InfoAlarmText>
          <BadgeText text={'새로운 알림'} num={3} />
        </InfoAlarmLeft>
        <button onClick={onDetailNotice}>더보기</button>
      </InfoAlarmHeader>
      <InfoAlarmListBox>
        {noticeList.map((list, idx) => {
          return (
            <InfoAlarmListItems read={list.read}>
              <a href={list.href} onClick={() => onListClick(list, idx)}>
                <span>세금계산서 발행이 필요한 계약서가 15건 있습니다.</span>
                <span>12분 전</span>
              </a>
            </InfoAlarmListItems>
          );
        })}
      </InfoAlarmListBox>
    </InfoAlarmWrap>
  );
};

export default InfoAlarm;
