import { RegistrerPage } from './Pages/RegistrerPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LogindPage } from './Pages/LogIndPage'
import { NAVIGATION } from './Constants/constants'
import { Layout } from './Components/Layouts'
import { Test } from './Pages/Test'
import { DrivingPage } from './Pages/DrivingPage'
import { VolunteerPage } from './Pages/VolunteerPage'
import { FrontPage } from './Pages/FrontPage'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            index
            element={<FrontPage />}
          />
          <Route
            path={NAVIGATION.logInd}
            element={<LogindPage />}
          />
          <Route
            path={NAVIGATION.registrer}
            element={<RegistrerPage />}
          />
          <Route
            path={NAVIGATION.test}
            element={<Test />}
          />
          <Route
            path={NAVIGATION.driving}
            element={<DrivingPage />}
          />
          <Route
            path={NAVIGATION.volunteers}
            element={<VolunteerPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
