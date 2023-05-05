import React from 'react'
import './Header.css'
import { BusinessCenterRounded, HomeRounded, NotificationsRounded, Search, SupervisorAccountRounded, TextsmsRounded } from '@mui/icons-material'
import HeaderOption from './HeaderOption'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from './features/userSlice'
import { auth } from './firebase'

function Header() {

  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  }

  return (
    <div className='header'>
      
            {/* Left part of the header */}
      <div className="header__left">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
        alt="" 
        />

        <div className="header__search">
          {/* Search icon */}
          <Search />
          <input placeholder='Search' type="text" />
          
        </div>
      </div>

      {/* Right part of the header */}
      <div className="header__right">
        <HeaderOption Icon={HomeRounded} title='Home'/>
        <HeaderOption Icon={SupervisorAccountRounded} title='My Network'/>
        <HeaderOption Icon={BusinessCenterRounded} title='Jobs'/>
        <HeaderOption Icon={TextsmsRounded} title='Messaging'/>
        <HeaderOption Icon={NotificationsRounded} title='Notifications'/>
        <HeaderOption 
        avatar={true} 
        title='Me'
        onClick={logoutOfApp}
        />
      </div>

    </div>
  )
}

export default Header
