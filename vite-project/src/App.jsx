import { Route, Routes } from 'react-router-dom'
import { appRoutes } from './lib/appRoutes'
import SigninPage from './pages/SigninPage/SigninPage'
import SignupPage from './pages/SignupPage/SignupPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import MainPage from './pages/MainPage/MainPage'
import TaskPage from './pages/TaskPage/TaskPage'
import ExitPage from './pages/ExitPage/ExitPage'
import './App.css'

export default function App() {

  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path={appRoutes.MAIN} element={<MainPage />}>
          <Route path={appRoutes.TASK} element={<TaskPage />} />
          <Route path={appRoutes.EXIT} element={<ExitPage />} />
        </Route>
      </Route>
      <Route path={appRoutes.SIGNIN} element={<SigninPage />} />
      <Route path={appRoutes.SIGNUP} element={<SignupPage />} />
      <Route path={appRoutes.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  )
}