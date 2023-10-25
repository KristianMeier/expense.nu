import { RegistrerPage } from './Pages/RegistrerPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LogindPage } from './Pages/LogIndPage'
import { ForsidePage } from './Pages/ForsidePage'
import { NAVIGATION } from './Constants/constants'
import { Layout } from './Components/Layouts'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            index
            element={<ForsidePage />}
          />
          <Route
            path={NAVIGATION.logInd}
            element={<LogindPage />}
          />
          <Route
            path={NAVIGATION.registrer}
            element={<RegistrerPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
