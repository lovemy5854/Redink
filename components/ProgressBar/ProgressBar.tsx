import React from 'react';
import styled from '@emotion/styled';

interface ProgressBarProps {
  text?: string;
  total?: number;
  count?: number;
}

const ProgressWrap = styled.div`
  padding-top: 8px;
`;

const ProgressHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 4px;
`;

const HeaderRight = styled.div`
  display: flex;
  flex-direction: row;

  & > p {
    font-size: 12px;
    &:first-of-type {
      & > span {
        font-size: 16px;
      }
    }

    &:last-child {
      font-size: 14px;
      margin-left: 16px;
    }
  }
`;

const TextSpace = styled.span`
  margin: 0 4px;
`;

const StyledDiv = styled.div`
  background-color: #eeeff0;
`;

const StyledBar = styled.div<ProgressBarProps>`
  background-color: #ffc0c0;
  height: 8px;
  width: ${({ count, total }) => count && total && (count / total) * 100}%;
`;

const ProgressBar: React.FC<ProgressBarProps> = ({ text, total, count }) => {
  return (
    <ProgressWrap>
      <ProgressHeader>
        <p>{text}</p>
        {total && count ? (
          <HeaderRight>
            <p>
              <span>{count}</span>
              <TextSpace>/</TextSpace>
              {total}
            </p>
            <p>{(count / total) * 100}%</p>
          </HeaderRight>
        ) : (
          ''
        )}
      </ProgressHeader>
      <StyledDiv>
        <StyledBar count={count} total={total} />
      </StyledDiv>
    </ProgressWrap>
  );
};

export default ProgressBar;
