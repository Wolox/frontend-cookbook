import React, { useCallback, useEffect, useRef } from 'react';
import i18next from 'i18next';

import styles from './styles.module.scss';

type ElementType = JSX.Element | string;

interface Props {
  children: React.ReactNode;
  onLoadMore: () => void;
  isLoading: boolean;
  hasMore: boolean;
  loader?: ElementType;
  endMessage?: ElementType;
  className?: string;
}

const getAlertMessage = (defaultText: string, element?: ElementType, loading?: boolean) => {
  if (!element) {
    return (
      <div className={styles.alert}>
        {loading && <div className={styles.spinner} />} {defaultText}
      </div>
    );
  }

  if (typeof element === 'string') {
    return (
      <div className={styles.alert}>
        {loading && <div className={styles.spinner} />} {element}
      </div>
    );
  }

  return element;
};

function InfiniteScroll({ children, onLoadMore, isLoading, hasMore, loader, endMessage, className }: Props) {
  const contentListRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNextPage = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [element] = entries;
      if (element.isIntersecting && contentListRef.current && hasMore && !isLoading) {
        onLoadMore();
      }
    },
    [hasMore, isLoading, onLoadMore]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleNextPage, {
      threshold: 0.9
    });

    if (contentListRef.current) {
      observer.observe(contentListRef.current);
    }

    return () => observer.disconnect();
  }, [handleNextPage]);

  return (
    <>
      <div className={className} ref={containerRef}>
        {children}
      </div>
      {isLoading && getAlertMessage(i18next.t('InfiniteScroll:loading'), loader, true)}
      {!hasMore && getAlertMessage(i18next.t('InfiniteScroll:end'), endMessage)}
      <div ref={contentListRef} />
    </>
  );
}

export default InfiniteScroll;
