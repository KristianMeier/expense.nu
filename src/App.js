import { RegistrerPage } from './Pages/RegistrerPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HistorikPage } from './Pages/HistorikPage'
import { LogindPage } from './Pages/LogIndPage'
import { ForsidePage } from './Pages/ForsidePage'
import { NAVIGATION } from './Constants/constants'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<ForsidePage />}
        />
        <Route
          path={NAVIGATION.logInd.path}
          element={<LogindPage />}
        />
        <Route
          path={NAVIGATION.registrer.path}
          element={<RegistrerPage />}
        />
        <Route
          path={NAVIGATION.historik.path}
          element={<HistorikPage />}
        />
      </Routes>
    </BrowserRouter>
  )
}
