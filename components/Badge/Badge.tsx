import React from 'react';

import styled from '@emotion/styled';

const BadgeText = styled.span`
  padding: 3px 4px;
  border-radius: 4px;
  font-size: 12px;
  color: #e65f68;
  background: #ffeeee;
`;

const Badge = ({ text, num }: { text: string; num?: number }) => {
  return (
    <BadgeText>
      {text} {num && <span>+{num}</span>}
    </BadgeText>
  );
};

export default Badge;
