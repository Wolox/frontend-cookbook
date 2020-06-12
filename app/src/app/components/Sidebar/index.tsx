import React, { useState, useCallback, ChangeEvent } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';

import Routes from '~constants/routes';
import logo from 'assets/logo.svg';
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
  const {
    state: { tech: selectedTech },
    dispatch
  } = useGlobalContext();
  const handleTechChange = (event: ChangeEvent<HTMLSelectElement>) =>
    dispatch(actionCreators.setTech(event.target.value));

  const { loading, data } = useQuery<TechsResult>(getCategoriesAndTechs());

  const categories = !loading && data ? parseCategories(data) : [];
  const techs = !loading && data ? parseTechs(data) : [];
  const {
    state: { isUserLoggedIn }
  } = useAuthContext();

  const loginToGithubURL = `http://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URL}`;

  const toggleSidebar = useCallback(() => setsidebarIsOpen(!sidebarIsOpen), [sidebarIsOpen]);

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
        {isUserLoggedIn ? (
          <div className={`column ${styles.contentLinks} start`}>
            <div className="column m-bottom-3">
              <span className={styles.techTitle}>Tech</span>
              <select className={styles.techSelect} value={selectedTech} onChange={handleTechChange}>
                <option value="all">View all</option>
                {techs.map(tech => (
                  <option key={tech.name} value={tech.name}>
                    {tech.name}
                  </option>
                ))}
              </select>
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
        ) : (
          <a className={styles.githubLogin} href={loginToGithubURL}>
            Login with Github
          </a>
        )}
      </div>
      <div className={`${styles.sidebarFooter} column center`}>{'</> with ♥ by Front-End Army'}</div>
    </div>
  );
}

export default Sidebar;
