import { Layout } from './Components/Layouts'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NAVIGATION } from './Constants/constants'
import { ReceiptPage } from './Pages/ReceiptPage'
import { DrivingPage } from './Pages/DrivingPage'
import { Test } from './Pages/Test'
import { FrontPage } from './Pages/FrontPage'
import { FeedbackPage } from './Pages/Feedback'
import { SignInPage } from './Pages/SignInPage'
import { SignUpPage } from './Pages/SignUpPage'
import { ForgotPage } from './Pages/ForgotPage'

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
            path={NAVIGATION.signin}
            element={<SignInPage />}
          />
          <Route
            path={NAVIGATION.signup}
            element={<SignUpPage />}
          />
          <Route
            path={NAVIGATION.forgot}
            element={<ForgotPage />}
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
