import React, { useState } from 'react';
import styled from '@emotion/styled';

import { PieChart, Pie, Cell, Sector } from 'recharts';
import ProgressBar from '@/components/ProgressBar/ProgressBar';

const InfoProgressWrap = styled.div`
  margin-top: 24px;
  padding: 24px;
  border: 1px solid #eeeff0;
`;

const HeaderWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 8px;
  border-bottom: 1px solid #eeeff0;

  & > p {
    &:nth-child(2) {
      color: #aaadb2;
    }
  }
`;

const ContentsBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 24px 0 14px 0;

  & > div {
    &:first-of-type {
      flex: 1 0 auto;
    }

    &:nth-child(2) {
      flex: 1 0 auto;
      & > div {
        position: relative;
        display: flex;
        padding: 4px 0;
        justify-content: flex-end;

        & > p {
          flex: 0 0 33%;
          &:last-child {
            flex: 0 1 auto;
          }
        }
      }
    }
  }
`;

const Circle = styled.p<{ color: `#E03A45` | '#EEEFF0' }>`
  position: relative;
  &:after {
    content: '';
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: -10px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ color }) => color};
  }
`;

const ContentsBottom = styled.div`
  & > p {
    margin-bottom: 26px;
  }
`;

const InfoProgress = () => {
  const [activeIndex] = useState(0);

  const data = [
    { name: '68%', value: 32 },
    { name: '32%', value: 68 },
  ];

  const COLORS = ['#c4c4c466', '#E03A45'];

  const renderActiveShape = (props: any) => {
    const {
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
    } = props;

    return (
      <g>
        <text
          x={cx}
          y={cy}
          dy={8}
          fontSize={24}
          textAnchor="middle"
          fill={'#E03A45'}
        >
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
      </g>
    );
  };

  return (
    <InfoProgressWrap>
      <HeaderWrap>
        <p>분양 진행 정보</p>
        <p>총 500실</p>
      </HeaderWrap>
      <ContentsBox>
        <div>
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              cx={100}
              cy={100}
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              startAngle={90}
              endAngle={450}
              innerRadius={70}
              outerRadius={86}
              fill="#E03A45"
              paddingAngle={0}
              dataKey="value"
            >
              {data.map((_, index: number) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div>
          <div>
            <Circle color={'#E03A45'}>분양완료</Circle>
            <p style={{ color: '#E03A45' }}>68.0%</p>
            <p>340실</p>
          </div>
          <div>
            <Circle color={'#EEEFF0'}>미분양</Circle>
            <p>32.0%</p>
            <p>160실</p>
          </div>
        </div>
      </ContentsBox>
      <ContentsBottom>
        <p>용도별 분양율</p>
        <div>
          <ProgressBar text={'주거용'} total={200} count={125} />
          <ProgressBar text={'상가'} total={200} count={125} />
          <ProgressBar text={'오피스'} total={200} count={125} />
        </div>
      </ContentsBottom>
    </InfoProgressWrap>
  );
};

export default InfoProgress;
