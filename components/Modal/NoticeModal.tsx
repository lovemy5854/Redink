import React from 'react';

import Badge from '@/components/Badge/Badge';
import FlatList from '@/components/Pagenation/Pagenation';
import Modal from '@/components/Modal/Dialog';

import styled from '@emotion/styled';

import closeBtn from '@/public/images/common/modal_close.png';

const ModalCloseBox = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 24px 24px 18px 0;

  & > button {
    width: 22px;
    height: 22px;
    text-indent: -99999px;
    background: url(${closeBtn.src}) 0 0 no-repeat;
    cursor: pointer;
  }
`;

const ModalHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;

  & > p {
    color: #aaadb2;
  }
`;

const ModalHeadLeft = styled.div`
  display: flex;
  align-items: center;

  & > h2 {
    font-size: 16px;
    font-weight: normal;
  }

  & > span {
    margin-left: 8px;
  }
`;

const ModalListBox = styled.ul``;

const ModalListItems = styled.li<{ read: boolean }>`
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

const ModalBottom = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0 24px 0;
`;

const NoticeModal = ({
  closeModal,
  noticeList,
  pages,
}: {
  closeModal: (status: boolean) => void;
  noticeList: any;
  pages: any;
}) => {
  return (
    <Modal>
      <ModalCloseBox>
        <button onClick={() => closeModal(false)}>닫기</button>
      </ModalCloseBox>
      <ModalHead>
        <ModalHeadLeft>
          <h2>현장 활동 알림</h2>
          <Badge text={'새로운 알림'} num={3} />
        </ModalHeadLeft>
        <p>최근 30일까지</p>
      </ModalHead>
      <ModalListBox>
        {noticeList.map(
          (list: { read: boolean; href: string | undefined }, idx: any) => {
            return (
              <ModalListItems read={list.read} key={`ModalList_${idx}`}>
                <a href={list.href} onClick={() => console.log(list, idx)}>
                  <span>세금계산서 발행이 필요한 계약서가 15건 있습니다.</span>
                  <span>12분 전</span>
                </a>
              </ModalListItems>
            );
          },
        )}
      </ModalListBox>
      <ModalBottom>
        <FlatList
          data={pages}
          dataOffset={4}
          controlsOffset={4}
          render={(data: any, index: number) => (
            <div key={index}>{data.title}</div>
          )}
        />
      </ModalBottom>
    </Modal>
  );
};

export default NoticeModal;
