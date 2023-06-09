import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { login, logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import Login from './Login';
import Widgets from './Widgets';



function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // user logged in successfully
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL
          }))
      } else {
        // user was logged out
        dispatch(logout());
      }
    })
  }, [])


  return (
    <div className="app">
      
      {/* Header */}
      <Header />

      {!user ? (
        <Login />
        ) : (
          
          <div className="app__body">

          <Sidebar />

          <Feed />

          <Widgets />

          
          </div>
      )}

    </div>
  );
}

export default App;
