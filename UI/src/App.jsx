import React from "react";
import Login from "./pages/Login";
import TypeofUser from "./pages/TypeofUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpEmployer from "./pages/SignUpEmployer";
import SignUpJobSeeker from "./pages/SignUpJobSeeker";
import JobSeekerHomePage from "./pages/JobSeekerHomePage"; 
import JobSeekerProfilePage from "./pages/JobSeekerProfilePage"; 
import EmployerHomePage from "./pages/EmployerHomePage";
import PostJobPage from "./pages/PostJobPage";
import FindJobHomePage from "./pages/FindJobHomePage"
import JobProfile from "./components/JobProfile"
import ApplicationStatusPage from "./pages/ApplicationStatusPage"

const App = () => {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Routes>
          <Route path="/signup" element={<TypeofUser />} />
          <Route exact path="/" element={<Login />} />
          <Route path="/signup-employer" element={<SignUpEmployer />} />
          <Route path="/signup-jobseeker" element={<SignUpJobSeeker />} />
          <Route path="/jobseeker-home-page" element={<JobSeekerHomePage />} />
          <Route path="/jobseeker-profile-page" element={<JobSeekerProfilePage />} />
          <Route path="/employer-home-page" element={<EmployerHomePage/>}/>
          <Route path="/find-job-page" element={<FindJobHomePage/>}/>
          <Route path="/view-profile-page" element={<JobProfile/>}/>
          <Route path="/post-job-page" element={<PostJobPage/>}/>
          <Route path="/view-application-status" element={<ApplicationStatusPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
