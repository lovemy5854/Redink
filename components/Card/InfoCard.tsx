import React from 'react';

import styled from '@emotion/styled';

import picture from '@/public/images/common/picture_01.png';

const InfoCardWrap = styled.div`
  border: 1px solid #eeeff0;
`;

const InfoCardImg = styled.img`
  display: block;
  width: 100%;
`;

const InfoCardText = styled.p`
  padding: 24px 0 16px 0;
`;

const InfoCardBox = styled.div`
  padding: 0 24px;
  background: ${(props: { bg?: string }) => props.bg};
`;

const InfoCardItems = styled.li`
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px;
  font-size: 14px;

  & > span {
    color: #595f68;
  }
`;

const InfoCardBottom = styled.ul`
  display: flex;
  justify-content: flex-start;
  margin-top: 16px;
  padding: 9px 0;

  & > li {
    margin-right: 32px;
    font-size: 14px;

    & > span:first-of-type {
      padding-right: 8px;
    }
  }
`;

const InfoCard = () => {
  return (
    <InfoCardWrap>
      <InfoCardImg src={picture.src} />
      <InfoCardBox>
        <InfoCardText>오몽 지식산업센터</InfoCardText>
        <ul>
          <InfoCardItems>
            <span>소재지</span>
            <span>서울특별시 종로구 오몽길로 153</span>
          </InfoCardItems>
          <InfoCardItems>
            <span>현장기간</span>
            <span>2022.01.01 ~ 2022.12.31</span>
          </InfoCardItems>
        </ul>
      </InfoCardBox>
      <InfoCardBox bg={'#F7F8F9'}>
        <InfoCardBottom>
          <li>
            <span>전체 동</span>
            <span>2</span>
          </li>
          <li>
            <span>총 호실</span>
            <span>2</span>
          </li>
          <li>
            <span>용도</span>
            <span>3</span>
          </li>
        </InfoCardBottom>
      </InfoCardBox>
    </InfoCardWrap>
  );
};

export default InfoCard;
