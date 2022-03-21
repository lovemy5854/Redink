import React from 'react';
import { createPortal } from 'react-dom';

import styled from '@emotion/styled';

const ModalWrap = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(0 0 0 / 12%);
  width: 100%;
  height: 100%;
  top: 0;
`;

const ModalContentsBox = styled.div`
  width: 40%;
  border-radius: 10px;
  background: #fff;
`;

const Modal = ({ children }: { children: React.HTMLProps<any> }) => {
  return createPortal(
    <ModalWrap>
      <ModalContentsBox>{children}</ModalContentsBox>
    </ModalWrap>,
    document.body,
  );
};

export default Modal;
