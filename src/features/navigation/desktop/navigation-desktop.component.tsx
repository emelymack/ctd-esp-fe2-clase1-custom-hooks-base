import { useLanguage } from 'context/useLanguage';
import { SearchBar } from 'features/search';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';


const NavDesktop: FC = () => {
  const {translate} = useLanguage()
  return (
    <div className={'container nav'} style={{ justifyContent: 'space-between' }}>
              <div className={'container'} style={{ width: 400 }}>
                <NavLink to="/" className={'nav-link'}>
                  <img className={'logo'} src={'/images/logo-dh.png'} />
                </NavLink>
        <NavLink to="/" className={'nav-link'}>
          <h3>{translate('navigation.home')}</h3>
        </NavLink>
              <NavLink to="/following" className={'nav-link'}>
                <h3>{translate('navigation.following')}</h3>
              </NavLink>
            </div>
      <SearchBar />
    </div>
  );
};

export default NavDesktop;
