import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../Modules/Login/Pages/Login'
import { Surveys } from '../Modules/surveys/Pages/Surveys'
import { Layout } from '../Shared/Layout/Layout'

export const AppRouters = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Layout />}>
        <Route path='surveys' element={<Surveys />} />
      </Route>
    </Routes>
  )
}
