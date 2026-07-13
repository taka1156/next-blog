'use client';
import { useEffect, useSyncExternalStore } from 'react';
import { BaseImg } from '@/components/shared/BaseImg/BaseImg';
import { useResponsive } from '@/hooks/useResponsive';
import { styles } from './SplashAnimation.css';

const STORAGE_KEY = 'animation';
const STARTED_AT_KEY = 'animationStartedAt';
const DURATION = 4600;

const listeners = new Set<() => void>();

const markAnimationAsSeen = () => {
  localStorage.setItem(STORAGE_KEY, 'false');
  listeners.forEach((listener) => listener());
};

const subscribe = (callback: () => void) => {
  listeners.add(callback);
  return () => listeners.delete(callback);
};

const getSnapshot = () => localStorage.getItem(STORAGE_KEY) !== 'false';
const getServerSnapshot = () => true;

const SplashAnimation = () => {
  const showSplash = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const { isMobile } = useResponsive();

  useEffect(() => {
    if (!showSplash) return;

    // 開始時刻を永続化しておく。再マウントされても最初の1回の値を使い回す
    const startedAt = Number(localStorage.getItem(STARTED_AT_KEY)) || Date.now();
    localStorage.setItem(STARTED_AT_KEY, String(startedAt));

    const remaining = Math.max(0, DURATION - (Date.now() - startedAt));

    const timer = setTimeout(() => {
      localStorage.removeItem(STARTED_AT_KEY);
      markAnimationAsSeen();
    }, remaining);

    return () => clearTimeout(timer);
  }, [showSplash]);

  if (showSplash) {
    return (
      <BaseImg
        src={
          isMobile
            ? '/img/icon/utils/logo-animation.sp.svg'
            : '/img/icon/utils/logo-animation.svg'
        }
        alt='Logo Animation'
        className={styles.splash}
      />
    );
  }

  return null;
};

export { SplashAnimation };
