import { Layout } from './Components/Layouts'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NAVIGATION } from './Constants/constants'
import { ReceiptPage } from './Pages/ReceiptPage'
import { DrivingPage } from './Pages/AdminPage'
import { SignInPage } from './Pages/AdminSignInPage'

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
          {/* Signup er frontpage mens den vises frem */}
          <Route
            path={NAVIGATION.frontpage}
            element={<SignInPage />}
          />
          {/* <Route
            path={NAVIGATION.frontpage}
            element={<FrontPage />}
          /> */}
          <Route
            path={NAVIGATION.signin}
            element={<SignInPage />}
          />
          {/* <Route
            path={NAVIGATION.signup}
            element={<SignUpPage />}
          />
          <Route
            path={NAVIGATION.forgot}
            element={<ForgotPage />}
          /> */}
          {/* Ikke en del af feedback siden */}
          {/* <Route
            path={NAVIGATION.test}
            element={<Test />}
          />
          <Route
            path={NAVIGATION.feedback}
            element={<FeedbackPage />}
          /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
