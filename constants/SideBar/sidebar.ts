import dashboard from '@/public/images/sidebar/dashboard.png';
import management from '@/public/images/sidebar/management.png';
import contract from '@/public/images/sidebar/contract.png';
import report from '@/public/images/sidebar/report-contract.png';
import information from '@/public/images/sidebar/information.png';
import tax from '@/public/images/sidebar/tax-contract.png';
import setting from '@/public/images/sidebar/setting.png';

export const SideRoute = [
  {
    name: '대시보드',
    href: '/dashboard',
    active: true,
    img: dashboard,
  },
  {
    name: '현장관리',
    href: '/management',
    active: false,
    img: management,
  },
  {
    name: '계약대장',
    href: '/contract',
    active: false,
    img: contract,
  },
  {
    name: '현황 리포트',
    href: '/report',
    active: false,
    img: report,
  },
  {
    name: '분양정보 및 가격',
    href: '/information',
    active: false,
    img: information,
  },
  {
    name: '세금계산서발행',
    href: '/tax',
    active: false,
    img: tax,
  },
  {
    name: '설정',
    href: '/setting',
    active: false,
    img: setting,
  },
];
