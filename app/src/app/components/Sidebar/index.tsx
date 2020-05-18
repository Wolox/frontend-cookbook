import React, { useState, useCallback, ChangeEvent } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';

import Routes from '~constants/routes';
import logo from 'assets/logo.svg';
import { getCategories } from '~utils/queries';
import { useAuthContext } from '~context/AuthProvider';
import { useGlobalContext } from '~context/GlobalProvider';
import { actionCreators } from '~context/GlobalProvider/actions';

import { Categories } from './interface';
import styles from './styles.module.scss';

function Sidebar() {
  const categoryType = useLocation().pathname.split('/')[2];
  const [sidebarIsOpen, setsidebarIsOpen] = useState(false);
  const {
    state: { tech },
    dispatch
  } = useGlobalContext();
  const handleTechChange = (event: ChangeEvent<HTMLSelectElement>) =>
    dispatch(actionCreators.setTech(event.target.value));

  const { loading, data } = useQuery(getCategories(tech));
  const categories = !loading && data ? data.repository.object.entries : [];
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
            <div className="row m-bottom-3">
              <span className={styles.techTitle}>Tech:</span>
              <select className={styles.techSelect} value={tech} onChange={handleTechChange}>
                <option value="web">web</option>
                <option value="react">react</option>
              </select>
            </div>
            {categories &&
              categories.map((category: Categories) => (
                <Link
                  key={category.oid}
                  className={cn(styles.simpleLink, {
                    [styles.selected]: categoryType === category.name
                  })}
                  to={Routes.CATEGORY.replace(':category', category.name)}
                >
                  {category.name}
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
