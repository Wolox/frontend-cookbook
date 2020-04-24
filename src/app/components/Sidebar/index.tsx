import React, { useState, useCallback, useMemo, useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import Routes from '~constants/routes';
import logo from 'assets/logo.svg';
import { getCategories } from '~utils/queries';
import { actionCreators } from '~context/GlobalProvider/actions';
import { GlobalContext } from '~context/GlobalProvider';

import { Categories, User } from './interface';
import styles from './styles.module.scss';

function Sidebar({ currentUser }: User) {
  const { state, dispatch } = useContext(GlobalContext);
  const [sidebarIsOpen, setsidebarIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  if (currentUser) {
    const { loading, data } = useQuery(getCategories());
    !loading && data && setCategories(data);
  }

  const toggleSidebar = useCallback(() => setsidebarIsOpen(!sidebarIsOpen), [sidebarIsOpen]);

  const handleSelect = useMemo(
    () => (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
      dispatch(actionCreators.selectCategory((event.target as any).id)),
    [dispatch]
  );

  const loginToGithubURL = () =>
    `http://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}redirect_uri=${
      process.env.REACT_APP_REDIRECT_URL
    }`;

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
          <Link to={Routes.HOME}>
            <img src={logo} alt="Cookbook Wolox" className="full-width" />
          </Link>
        </div>
        {currentUser ? (
          <div className={`column ${styles.contentLinks} start`}>
            {categories.map((category: Categories) => (
              <button
                type="button"
                key={category.oid}
                id={category.name}
                className={cn(styles.simpleLink, {
                  [styles.selected]: state.category === category.name
                })}
                onClick={handleSelect}
              >
                {category.name}
              </button>
            ))}
          </div>
        ) : (
          <a className={styles.githubLogin} href={loginToGithubURL()}>
            Login with Github
          </a>
        )}
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
