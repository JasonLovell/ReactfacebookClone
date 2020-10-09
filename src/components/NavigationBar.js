import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationBar.css';
import facebookIcon from './facebook-icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell,
  faCaretDown,
  faFlag,
  faHome,
  faPlus,
  faSearch,
  faStoreAlt,
  faTv,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';

function NavigationBar() {
  return (
    <React.Fragment>
      <table className='NavigationBar'>
        <div className='LogoSearch'>
          <img
            className='facebookIcon'
            src={facebookIcon}
            alt='Facebook-Icon'
            width='140'
          />
          <div class='search'>
            <FontAwesomeIcon icon={faSearch} />
            <input className="HeaderInput" placeholder='Search Facebook' />
          </div>
        </div>
        <ul className='NavigationItems'>
          <li className='HomeLink'>
            <NavLink
              exact
              activeClassName='navbar__link--active'
              className='navbar__link'
              to={'/'}
            >
              <FontAwesomeIcon
                style={{ width: '100' }}
                icon={faHome}
                size='10x'
              />
            </NavLink>
          </li>
          <li className='MarketLink'>
            <NavLink
              activeClassName='navbar__link--active'
              className='navbar__link'
              to={'/Pages'}
            >
              <FontAwesomeIcon
                style={{ width: '100' }}
                icon={faFlag}
                size='10x'
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName='navbar__link--active'
              className='navbar__link'
              to={'/Watch'}
            >
              <FontAwesomeIcon style={{ width: '100' }} icon={faTv} size='10x' />
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName='navbar__link--active'
              className='navbar__link'
              to={'/Marketplace'}
            >
              <FontAwesomeIcon
                style={{ width: '100' }}
                icon={faStoreAlt}
                size='10x'
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName='navbar__link--active'
              className='navbar__link'
              to={'/Groups'}
            >
              <FontAwesomeIcon
                style={{ width: '100' }}
                icon={faUsers}
                size='10x'
              />
            </NavLink>
          </li>
          <div className='AccountSection'>
            <div className='ProfileSection'>
              <img
                className='ProfileImage'
                src='https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/118881626_3369373789752261_450760895870403241_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_eui2=AeE4M023gvfJBfN8YLbvQ0n6vXjbhXmdpx29eNuFeZ2nHVCLnQUiGQ5DO1n2fXuABSASM-Pdzqq14KsGSHJOiaLs&_nc_ohc=FMd1y2Fl0OQAX9pyBRP&_nc_ht=scontent-lht6-1.xx&oh=7afbe9775902071ba1ff9227ec5bb65a&oe=5F983C9B'
                alt='profile'
                width='30'
              />
              <h4>Jason</h4>
            </div>
            <NavLink
              activeClassName='navbar2__link--active'
              className='navbar__link RoundButton'
              to={'/Groups'}
            >
              <FontAwesomeIcon icon={faPlus} size='10x' />
            </NavLink>
            <NavLink
              activeClassName='navbar2__link--active'
              className='navbar__link RoundButton'
              to={'/Groups'}
            >
              <FontAwesomeIcon icon={faFacebookMessenger} size='10x' />
            </NavLink>
            <NavLink
              activeClassName='navbar2__link--active'
              className='navbar__link RoundButton'
              to={'/Groups'}
            >
              <FontAwesomeIcon icon={faBell} size='10x' />
            </NavLink>
            <NavLink
              activeClassName='navbar2__link--active'
              className='navbar__link RoundButton'
              to={'/Groups'}
            >
              <FontAwesomeIcon icon={faCaretDown} size='10x' />
            </NavLink>
          </div>
        </ul>
      </table>
      
    </React.Fragment>
  );
}

export default NavigationBar;
