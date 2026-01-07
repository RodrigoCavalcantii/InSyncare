import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from '../pages/auth/Login'
import Today from '../pages/Today'
import { PrivateRoute } from './PrivateRoute'
import { PrivateLayout } from '../components/layout/PrivateLayout'
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<PrivateRoute />}>
        <Route element={<PrivateLayout />}>
          <Route path="/" element={<Navigate to="/today" replace />} />
          <Route path="/today" element={<Today />} />
          <Route path="/stats" element={<h2>Em breve</h2>} />
          <Route path="/groups" element={<h2>Em breve</h2>} />
          <Route path="/profile" element={<h2>Em breve</h2>} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}
