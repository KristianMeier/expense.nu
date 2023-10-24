import { RegistrerPage } from './Pages/RegistrerPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HistorikPage } from './Pages/HistorikPage'
import { LogindPage } from './Pages/LogIndPage'
import { ForsidePage } from './Pages/ForsidePage'
import { NAVIGATION } from './Constants/constants'
import Album from './Pages/AlbumPage'
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
          <Route
            path="/album"
            element={<Album />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
