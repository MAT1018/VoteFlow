import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React from 'react'
import { LoginForm } from "./pages/auth/LoginForm"
import SignUpForm from "./pages/auth/SignUpForm"
import CreatePoll from "./pages/Dashboard/CreatePoll"
import MyPolls from "./pages/Dashboard/MyPolls"
import VotedPolls from "./pages/Dashboard/VotedPolls"
import Bookmarks from "./pages/Dashboard/Bookmarks"
import Home from "./pages/Dashboard/Home"
import UserProvider from "./context/UserContext"

const App = () => {
  console.log("App component rendering");

  return (
    <div>
     <UserProvider>
       <Router>
        <Routes>
          <Route path="/" element={<Root/>}  />
          <Route path="/login" exact element={<LoginForm/>} />
          <Route path="/signUp" exact element={<SignUpForm/>} />
          <Route path="/dashboard" exact element={<Home/>}/>
          <Route path="/create-poll" exact element={<CreatePoll/>} />
          <Route path="/my-polls" exact element={<MyPolls/>} />
          <Route path="/voted-polls" exact element={<VotedPolls/>} />
          <Route path="/bookmarked-polls" exact element={<Bookmarks/>} />
   

        </Routes>
       </Router>
      </UserProvider>
    </div>

    
  )
}

export default App


//define the root component to handle the initial redirect 

const Root = ()=> {
  //check if token exists in localStorage
  const isAuthenticated = !!localStorage.getItem("token");

  //redirect to dashbaord , if authenticated , otherwise to login
  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : ( <Navigate to="/login"/>
  );


};