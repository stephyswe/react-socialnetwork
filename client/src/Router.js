import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/routing/PrivateRoute';

// Routes
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/profiles" component={Profiles} />
    <Route exact path="/profile/:id" component={Profile} />
    <PrivateRoute exact path="/dashboard" component={Dashboard} />
    <PrivateRoute exact path="/create-profile" component={CreateProfile} />
    <PrivateRoute exact path="/edit-profile" component={EditProfile} />
    <PrivateRoute exact path="/add-experience" component={AddExperience} />
    <PrivateRoute exact path="/add-education" component={AddEducation} />
    <PrivateRoute exact path="/posts" component={Posts} />
    <PrivateRoute exact path="/posts/:id" component={Post} />
  </Switch>
);

export default Main;
