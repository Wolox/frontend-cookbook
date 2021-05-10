import { useCallback, useEffect, useRef, useState } from 'react';

const DEFAULT_COLLAPSE_TIME = 300;

export interface CollapsibleParameters {
  defaultIsOpen?: boolean;
  onChange?: (isOpen: boolean) => void;
  animateOnCollapseEffect?: boolean;
  collapseTime?: number;
}

const useCollapse = <Element extends HTMLElement>({
  defaultIsOpen = true,
  onChange,
  animateOnCollapseEffect = true,
  collapseTime = DEFAULT_COLLAPSE_TIME
}: CollapsibleParameters) => {
  const [collapsed, setCollapsed] = useState(!defaultIsOpen);
  const [originalHeight, setOriginalHeight] = useState(0);
  const collapsibleRef = useRef<Element>(null);

  const setCollapsedStyles = (height: number, isCollapsed: boolean) => {
    const { style } = collapsibleRef.current!;
    const heightString = isCollapsed ? '0' : `${height}px`;

    style.height = heightString;

    style.paddingTop = isCollapsed ? '0' : '';
    style.paddingBottom = isCollapsed ? '0' : '';
    style.marginTop = isCollapsed ? '0' : '';
    style.marginBottom = isCollapsed ? '0' : '';
  };

  const calculateHeight = useCallback(() => {
    const { scrollHeight } = collapsibleRef.current!;

    const newHeight = scrollHeight ?? 0;
    setOriginalHeight(newHeight);
  }, []);

  // Sets initial height values
  useEffect(() => {
    collapsibleRef.current!.style.transition = `height ${collapseTime}ms ease-out, padding ${collapseTime}ms ease-out, margin ${collapseTime}ms ease-out`;
    collapsibleRef.current!.style.overflow = 'hidden';

    calculateHeight();
  }, [calculateHeight, collapseTime]);

  useEffect(() => {
    // Note: There's a small bug that causes the resize not to correctly reduce the collapsible's
    // height when the screen is enlargened. The reason is because the scroll height does not
    // change because the height value is already set. The screen does not break though, the only
    // problem is that the collapsible element has more height than it should but it works.
    window.addEventListener('resize', calculateHeight);
    return () => {
      window.removeEventListener('resize', calculateHeight);
    };
  }, [calculateHeight]);

  // Changes height values when height or collapsible state changes
  useEffect(() => {
    setCollapsedStyles(originalHeight, collapsed);
  }, [originalHeight, collapsed]);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
    setCollapsedStyles(originalHeight, !collapsed);

    if (animateOnCollapseEffect) {
      setTimeout(() => {
        onChange?.(collapsed);
      }, collapseTime);
    } else {
      onChange?.(collapsed);
    }
  };

  return { handleCollapse, collapsibleRef, collapsed };
};

export default useCollapse;
