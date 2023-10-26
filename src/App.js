import { Layout } from './Components/Layouts'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NAVIGATION } from './Constants/constants'
import { ReceiptPage } from './Pages/ReceiptPage'
import { DrivingPage } from './Pages/DrivingPage'
import { Test } from './Pages/Test'
import { FrontPage } from './Pages/FrontPage'
import { FeedbackPage } from './Pages/Feedback'
import { LogInPage } from './Pages/LogInPage'
import { SignUpPage } from './Pages/SignUpPage'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path={NAVIGATION.receipt}
            element={<ReceiptPage />}
          />
          <Route
            path={NAVIGATION.driving}
            element={<DrivingPage />}
          />
          <Route
            path={NAVIGATION.frontpage}
            element={<FrontPage />}
          />
          <Route
            path={NAVIGATION.login}
            element={<LogInPage />}
          />
          <Route
            path={NAVIGATION.signup}
            element={<SignUpPage />}
          />
          {/* Ikke en del af feedback siden */}
          <Route
            path={NAVIGATION.test}
            element={<Test />}
          />
          <Route
            path={NAVIGATION.feedback}
            element={<FeedbackPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
