import { Layout } from './Components/Layouts'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NAVIGATION } from './Constants/constants'
import { ReceiptPage } from './Pages/ReceiptPage'
import { DrivingPage } from './Pages/DrivingPage'
import { CreateUserPage } from './Pages/CreateUserPage'
// import { LogindPage } from './Pages/LogIndPage'
// import { Test } from './Pages/Test'
// import { FrontPage } from './Pages/FrontPage'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path={NAVIGATION.registrer}
            element={<ReceiptPage />}
          />
          <Route
            path={NAVIGATION.driving}
            element={<DrivingPage />}
          />

          <Route
            path={NAVIGATION.create_user}
            element={<CreateUserPage />}
          />
          {/* <Route
            path={NAVIGATION.forsiden}
            element={<FrontPage />}
          />
          <Route
            path={NAVIGATION.logInd}
            element={<LogindPage />}
          />
          <Route
            path={NAVIGATION.test}
            element={<Test />}
          />*/}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
