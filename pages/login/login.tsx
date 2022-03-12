import React from 'react';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const route = useRouter();
  return (
    <div>
      login
      <button onClick={() => route.push('/')}>로그인</button>
    </div>
  );
};

export default LoginPage;
