import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import Nav from '../User/NavMenu/NavMenu';
import Header from '../User/Header/Header';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import LandingPage from '../User/LandingPage/LandingPage';
import UserLoginPage from '../User/UserLoginPage/UserLoginPage';
import UserRegisterPage from '../User/UserRegisterPage/UserRegisterPage';
import AdminDashboardPage from '../Admin/AdminDashboardPage/AdminDashboardPage';
import AdminLoginPage from '../Admin/AdminLoginPage/AdminLoginPage';
import ReportDetailView from '../Admin/ReportDetailView/ReportDetailView';
import CreateReportPage from '../User/CreateReportPage/CreateReportPage';
import MapViewPage from '../User/MapViewPage/MapViewPage';
import TopCitizensPage from '../User/TopCitizensPage/TopCitizensPage';
import UserProfilePage from '../User/UserProfilePage/UserProfilePage';
import UserReportsPage from '../User/UserReportsPage/UserReportsPage';

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
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Header />
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />

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
              <UserRegisterPage />
            </Route>

            <Route
              exact
              path="/home"
            >
              <LandingPage />
<<<<<<< feature-theme-vanessa
            </Route>

            <ProtectedRoute
              exact path="/admindashboard"
            >
              <AdminDashboardPage />
            </ProtectedRoute>

            <ProtectedRoute
              exact path="/adminloginpage"
            >
              <AdminLoginPage />
            </ProtectedRoute>

            <ProtectedRoute
              exact path="/reportdetail/:id"
            >
              <ReportDetailView />
            </ProtectedRoute>

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
        </div>
      </Router>
    </ThemeProvider>
=======
            }
          </Route>

          <Route
            exact path="/admindashboard"
          >
            <AdminDashboardPage />
          </Route>

          <Route
            exact path="/adminlogin"
          >
            <AdminLoginPage />
          </Route>

          <ProtectedRoute
            exact path="/reportdetail/:id"
          >
            <ReportDetailView />
          </ProtectedRoute>

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
            exact path="/login"
          >
            <UserLoginPage />
          </ProtectedRoute>

          <ProtectedRoute
            exact path="/profile"
          >
            <UserProfilePage />
          </ProtectedRoute>

          <ProtectedRoute
            exact path="/register"
          >
            <UserRegisterPage />
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
        {/* <Footer /> */}
      </div>
    </Router>
>>>>>>> main
  );
}

export default App;
