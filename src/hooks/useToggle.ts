'use client';
import { useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useToggle as useToggleState } from 'usehooks-ts';

const useOpen = (initState: boolean = false) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [open, toggleOpen, setOpen] = useToggleState(initState);

  // 過去のURLを保持するためのstate
  const [prevKey, setPrevKey] = useState(`${pathname}?${searchParams}`);
  // 現在のURLを取得するための変数
  const currentKey = `${pathname}?${searchParams}`;

  // URLが変化した場合、openをfalseにする
  // グローバルナビゲーションやインデックスナビゲーションの開閉状態をリセットするために使用
  if (currentKey !== prevKey) {
    setPrevKey(currentKey);
    setOpen(false);
  }

  return {
    open,
    toggleOpen
  };
};

export { useOpen };
