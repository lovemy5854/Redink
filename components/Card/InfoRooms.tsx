import React from 'react';

import styled from '@emotion/styled';

const InfoRoomsdWrap = styled.div`
  margin-top: 24px;
  padding: 24px;
  border: 1px solid #eeeff0;
`;

const InfoRoomsText = styled.div`
  font-size: 16px;
  color: #2a323e;
`;

const InfoRoomsList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 0;
  ${(props: { line?: boolean }) =>
    props.line && 'border-bottom:1px solid #DBDCDE'}
`;

const InfoRoomsBox = styled.div`
  display: flex;
  flex-direction: row;
  ${(props: { direction?: 'left' | 'right' }) =>
    props.direction === 'right'
      ? `flex:1 0 auto`
      : `flex:2 1 auto;
      justify-content: space-between;
      padding-left:32px;
      border-left:1px solid #DBDCDE;
      text-align: center;`};

  & > ul > li {
    font-size: 14px;
    &:first-of-type {
      padding-bottom: 4px;
    }
  }
`;

const InfoRoomsUnit = styled.p`
  padding: 12px;
  margin-right: 16px;
  background: #f7f8f9;
`;

const InfoRooms = () => {
  return (
    <InfoRoomsdWrap>
      <InfoRoomsText>동별호실 정보</InfoRoomsText>
      <InfoRoomsList line={true}>
        <InfoRoomsBox direction={'right'}>
          <InfoRoomsUnit>A동</InfoRoomsUnit>
          <ul>
            <li>25층</li>
            <li>250실</li>
          </ul>
        </InfoRoomsBox>
        <InfoRoomsBox direction={'left'}>
          <ul>
            <li>주거용</li>
            <li>100</li>
          </ul>
          <ul>
            <li>상가</li>
            <li>50</li>
          </ul>
          <ul>
            <li>오피스</li>
            <li>100</li>
          </ul>
        </InfoRoomsBox>
      </InfoRoomsList>
      <InfoRoomsList>
        <InfoRoomsBox direction={'right'}>
          <InfoRoomsUnit>B동</InfoRoomsUnit>
          <ul>
            <li>25층</li>
            <li>250실</li>
          </ul>
        </InfoRoomsBox>
        <InfoRoomsBox direction={'left'}>
          <ul>
            <li>주거용</li>
            <li>100</li>
          </ul>
          <ul>
            <li>상가</li>
            <li>50</li>
          </ul>
          <ul>
            <li>오피스</li>
            <li>100</li>
          </ul>
        </InfoRoomsBox>
      </InfoRoomsList>
    </InfoRoomsdWrap>
  );
};

export default InfoRooms;
