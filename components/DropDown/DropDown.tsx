import React from 'react';
import styled from '@emotion/styled';

const DropDownBox = styled.div`
  position: relative;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
`;
const DropDownText = styled.div`
  color: #fff;
`;
const DropDownList = styled.ul`
  position: absolute;
  top: 56px;
  left: 0;
  right: 0;
  max-height: 120px;
  z-index: 5;
`;
const DropDownItems = styled.li``;

const DropDown = () => {
  return (
    <DropDownBox>
      <DropDownText>오몽 지식산업센터</DropDownText>
    </DropDownBox>
  );
};

export default DropDown;
