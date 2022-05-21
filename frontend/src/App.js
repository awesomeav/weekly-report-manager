import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import EmployeeList from './components/EmployeeList'
import EmployeeReports from './components/EmployeeReports'
// import EmployeeReports from './components/EmployeeReports'
import CreateReport from './components/CreateReport'
import ViewReport from './components/ViewReport'
import EditReport from './components/EditReport'

import './App.css'
import MyReport from './components/MyReport'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/employee-list' element={<EmployeeList />} />
          {/* <Route path='/my-reports' element={<EmployeeReports />} /> */}
          <Route path='/employee/:id' element={<EmployeeReports />} />
          <Route path='/employee/:id/new-report' element={<CreateReport />} />
          <Route
            path='/employee/:user_id/view-report/:report_id'
            element={<MyReport />}
          />
          <Route path='/employee/:id/edit-report' element={<EditReport />} />
          {/* <Route path='/employee-reports' element={<EmployeeReports />} /> */}
          {/* <Route path='/create-report' element={<EmployeeList />} />
          <Route path='/update-report' element={<EmployeeList />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
