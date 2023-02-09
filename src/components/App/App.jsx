import React, { useEffect, useState } from 'react';
import { LoadScript } from "@react-google-maps/api";

import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import NavMenu from '../User/NavMenu/NavMenu';
import Header from '../User/Header/Header';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import LandingPage from '../User/LandingPage/LandingPage';
import HomePage from '../User/HomePage/HomePage';
import UserLoginPage from '../User/UserLoginPage/UserLoginPage';
import UserRegisterPage from '../User/UserRegisterPage/UserRegisterPage';
import AdminDashboardPage from '../Admin/AdminDashboardPage/AdminDashboardPage';
import AdminLoginPage from '../Admin/AdminLoginPage/AdminLoginPage';
import CreateReportPage from '../User/CreateReportPage/CreateReportPage';
import MapViewPage from '../User/MapViewPage/MapViewPage';
import TopCitizensPage from '../User/TopCitizensPage/TopCitizensPage';
import UserProfilePage from '../User/UserProfilePage/UserProfilePage';
import UserReportsPage from '../User/UserProfilePage/UserReportsPage';
import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#1C67F6',
        dark: '#2945d7',
        light: '#8cd1ff',
      },
      secondary: {
        main: '#FFBC00',
        bright: '#FF5C3A',
        neutral: '#FFA26B',
      },
      custom: {
        main: '#1cd5f6',
        purple: '#9800f3',
        bright: '#f61c68',
      }
    },
  });

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
    <ThemeProvider theme={theme}>
      {user.id ?
        <div id="logged-in-user">
        {user.isAdmin === true ?
          <div id="admin-user">
            <Router>
              <div>
                <Switch>
                  <Redirect exact from="/admin" to="/admin/dashboard" />
      
                  <Redirect exact from="/admin/login" to="/admin/dashboard" />

                  <ProtectedRoute
                    exact path="/admin/dashboard"
                  >
                    <AdminDashboardPage />
                  </ProtectedRoute>
      
                  {/* If none of the other routes matched, we will show a 404. */}
                  <Route>
                    <h1>404</h1>
                  </Route>
                </Switch>
              </div>
            </Router>
          </div>
        :
          <div id="non-admin-user">
              <Router>
                <div>
                  <Header />
                  <Switch>
                    {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
                    <Redirect exact from="/" to="/home" />
        
                    <Route
                      exact
                      path="/home"
                    >
                      {user.id ?
                        // If the user is already logged in, 
                        // redirect to the /home page
                        <HomePage />
                        :
                        // Otherwise, show the login page
                        <LandingPage />
                      }
                    </Route>
        
                    <Route
                      exact
                      path="/login"
                    >
                      {user.id ?
                        // If the user is already logged in, 
                        // redirect to the /home page
                        <Redirect to="/home" />
                        :
                        // Otherwise, show the login page
                        <UserLoginPage />
                      }
                    </Route>
        
                    <Route
                      exact
                      path="/register"
                    >
                      {user.id ?
                        // If the user is already logged in, 
                        // redirect to the /home page
                        <Redirect to="/home" />
                        :
                        // Otherwise, show the login page
                        <UserRegisterPage />
                      }
                    </Route>
        
                    <ProtectedRoute
                      exact path="/addreport"
                    >
                      <CreateReportPage />
                    </ProtectedRoute>
        
                    <ProtectedRoute
                      exact path="/reportmap"
                    >
                      <MapViewPage />
                    </ProtectedRoute>
        
                    <ProtectedRoute
                      exact path="/topcitizens"
                    >
                      <TopCitizensPage />
                    </ProtectedRoute>
        
                    <ProtectedRoute
                      exact path="/profile"
                    >
                      <UserProfilePage />
                    </ProtectedRoute>
        
                    <ProtectedRoute
                      exact path="/myreports"
                    >
                      <UserReportsPage />
                    </ProtectedRoute>
        
                    {/* If none of the other routes matched, we will show a 404. */}
                    <Route>
                      <h1>404</h1>
                    </Route>
                  </Switch>
                  <NavMenu />
                </div>
              </Router>
          </div>
        }
        </div>
      :
        <div id="non-user">
          <Router>
            <div>
              <Switch>
                {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
                <Redirect exact from="/" to="/home" />
    
                <Route
                  exact
                  path="/home"
                >
                  <LandingPage />
                </Route>
    
                <Route
                  exact
                  path="/login"
                >
                  <UserLoginPage />
                </Route>
    
                <Route
                  exact
                  path="/register"
                >
                    <UserRegisterPage />
                </Route>

                <Redirect exact from="/admin" to="/admin/login" />

                <Redirect exact from="/admin/dashboard" to="/admin/login" />
      
                <Route
                  exact
                  path="/admin/login"
                >
                  {user.id ?
                    // If the admin is already logged in, 
                    // redirect to the admin dashboard page
                    <Redirect to="/admin/dashboard" />
                    :
                    // Otherwise, show the login page
                    <AdminLoginPage />
                  }
                </Route>
    
                {/* If none of the other routes matched, we will show a 404. */}
                <Route>
                  <h1>404</h1>
                </Route>
              </Switch>
            </div>
          </Router>
        </div>
      }
    </ThemeProvider>
    </LoadScript>
  );
}


export default App;
