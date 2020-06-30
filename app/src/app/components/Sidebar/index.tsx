import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';

import Routes from '~constants/routes';
import logo from 'assets/logo.svg';
import checkIcon from 'assets/ic_check.svg';
import { getCategoriesAndTechs } from '~utils/queries';
import { useAuthContext } from '~context/AuthProvider';
import { useGlobalContext } from '~context/GlobalProvider';
import { actionCreators } from '~context/GlobalProvider/actions';
import { ALL_TECHS } from '~context/GlobalProvider/reducer';
import { parseCategories, parseTechs, TechsResult } from '~utils/techs';

import styles from './styles.module.scss';

function Sidebar() {
  const categoryType = useLocation().pathname.split('/')[1];
  const [sidebarIsOpen, setsidebarIsOpen] = useState(false);
  const [toggleOpen, setToggleOpen] = useState(false);
  const select = useRef<HTMLButtonElement>(null);
  const {
    state: { tech: selectedTech },
    dispatch
  } = useGlobalContext();

  const handleTechChange = (option: string) => {
    setToggleOpen(false);
    dispatch(actionCreators.setTech(option));
  };

  const handleClickOutside = (event: Event) => {
    const target = event.target as HTMLElement;
    if (select.current && !select.current.contains(target)) {
      setToggleOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  const { loading, data } = useQuery<TechsResult>(getCategoriesAndTechs());

  const categories = !loading && data ? parseCategories(data) : [];
  const techs = !loading && data ? parseTechs(data) : [];
  const options = ALL_TECHS ? [{ name: ALL_TECHS }, ...techs] : techs;

  const {
    state: { isUserLoggedIn }
  } = useAuthContext();

  const toggleSidebar = useCallback(() => setsidebarIsOpen(!sidebarIsOpen), [sidebarIsOpen]);
  const toggleSelectMenu = useCallback(() => setToggleOpen(!toggleOpen), [toggleOpen]);

  return (
    <div className={cn(styles.sidebarContainer, 'column space-between', { [styles.visible]: sidebarIsOpen })}>
      <button
        type="button"
        className={cn(styles.buttonContainer, { [styles.buttonActive]: sidebarIsOpen })}
        onClick={toggleSidebar}
      >
        <span className={cn(styles.hamburger, { [styles.hamburgerActive]: sidebarIsOpen })} />
      </button>
      <div className={styles.sidebarUpperSection}>
        <div className={`column ${styles.sidebarHeader}`}>
          <Link to={Routes.DASHBOARD}>
            <img src={logo} alt="Cookbook Wolox" className="full-width" />
          </Link>
        </div>
        <div className={`column ${styles.contentLinks} start`}>
          <div className="column relative m-bottom-3">
            <span className={styles.techTitle}>Tech</span>
            <button
              className={cn(styles.boxTech, { [styles.boxTechOpen]: toggleOpen })}
              onClick={toggleSelectMenu}
              type="button"
              ref={select}
            >
              <span className={styles.optionSelected}>{selectedTech}</span>
            </button>
            <ul className={cn(styles.menuSelect, { [`${styles.menuSelectOpen}`]: toggleOpen })}>
              {options.map(tech => (
                <li key={tech.name} className={styles.itemList} onClick={() => handleTechChange(tech.name)}>
                  <img
                    src={checkIcon}
                    alt="selected"
                    className={cn(styles.iconCheck, {
                      [`${styles.itemSelected}`]: tech.name === selectedTech
                    })}
                  />
                  {tech.name}
                </li>
              ))}
            </ul>
          </div>
          {categories &&
            (selectedTech === ALL_TECHS
              ? categories
              : techs.find(tech => tech.name === selectedTech)?.categories || []
            ).map((category: string) => (
              <Link
                key={category}
                className={cn(styles.simpleLink, {
                  [styles.selected]: categoryType === category
                })}
                to={Routes.CATEGORY.replace(':category', category)}
              >
                {category}
              </Link>
            ))}
        </div>
      </div>
      <div className={`${styles.sidebarFooter} column center`}>{'</> with ♥ by Front-End Army'}</div>
    </div>
  );
}

export default Sidebar;
