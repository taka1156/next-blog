'use client';
import { IndexNav } from '@/components/molecules/IndexNav/IndexNav';
import { IndexList } from '@/components/molecules/IndexList/IndexList';
import { useChangeStateHook } from '@/hooks/changeStateHook';

type IndexNavigation = {
  tocs: TocItems;
};

const IndexNavigation = ({ tocs }: IndexNavigation) => {
  const { open, changeState } = useChangeStateHook(false);

  return (
    <div>
      <IndexNav isOpen={open} changeState={changeState} />
      {open && tocs.length !== 0 && (
        <IndexList isOpen={open} tocs={tocs} changeState={changeState} />
      )}
    </div>
  );
};

export { IndexNavigation };
