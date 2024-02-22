import { create } from 'zustand';

const useMenuOrderStore = create((set) => ({
  id: 0,
  setId: () => set({ id: id + 1 }),
}));

const MenuOrderData = [
  {
    id: 0,
    menu: '오늘의 초밥10p + 리뷰서비스 2p',
    option: [
      '- 기본: 10pcs (13,000원)',
      '- 초밥 추가 선택 : 타코와사비 1pcs추가 (1,400원) / 연어초밥 1pcs 추가(1,600원)',
    ],
    price: '16000',
  },
];

export default MenuOrderData;
