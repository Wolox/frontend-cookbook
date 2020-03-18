import React, { useState, useCallback } from 'react';
import { Link } from "react-router-dom";
import cn from 'classnames';

import Routes from '~constants/routes';

import logo from 'assets/logo.svg';

import styles from './styles.module.scss';

interface Props {
  categories: Array<{
    id: number | string,
    name: string
  }>,
  selectedCategory: string,
  handleSelect: (event: React.MouseEvent<HTMLElement>) => void
}

function Sidebar({ categories, selectedCategory, handleSelect }: Props) {
  const [sidebarIsOpen, setsidebarIsOpen] = useState(false);

  const toggleSidebar = useCallback(() => setsidebarIsOpen(!sidebarIsOpen), [sidebarIsOpen]);

  return (
    <div className={cn(styles.sidebarContainer, 'column space-between', { [styles.visible]: sidebarIsOpen })}>
      <button type="button" className={cn(styles.buttonContainer, {[styles.buttonActive]: sidebarIsOpen})} onClick={toggleSidebar}>
        <span className={cn(styles.hamburger, {[styles.hamburgerActive]: sidebarIsOpen})} />
      </button>
      <div className={styles.sidebarUpperSection}>
        <div className={`column ${styles.sidebarHeader}`}>
        <Link to={Routes.HOME}><img src={logo} alt="Cookbook Wolox" className="full-width" /></Link>
        </div>
        <div className={`column ${styles.contentLinks} start`}>
          {categories &&
            categories.map(category => (
              <button
                type="button"
                key={category.id}
                id={category.name}
                className={cn(styles.simpleLink, { [styles.selected]: selectedCategory === category.name })}
                onClick={handleSelect}
              >
                {category.name}
              </button>
            ))}
        </div>
      </div>
      <div className={`${styles.sidebarFooter} column center`}>
        {'</> with ♥ by Front-End Army'}
        <button type="button" className={`${styles.sidebarSetStyle} m-top-2 row middle center full-width`}>
          SET STYLE
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
