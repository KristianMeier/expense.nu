export const USERS = {
  '': { name: '', password: '' },
  test: { name: 'test', password: 'test' },
}

export const NAVIGATION = {
  receipt: '/receipt',
  login: '/login',
  frontpage: '/',
  driving: '/driving',
  signup: '/signup',
  // Ikke en del af feedback siden
  feedback: '/feedback',
  test: '/test',
}

export const FEEDBACK_LINKS = [
  { content: 'Front Page - Demo', path: NAVIGATION.frontpage },
  { content: 'Log In Page - Demo', path: NAVIGATION.login },
  { content: 'Sign Up Page - Demo', path: NAVIGATION.signup },
  { content: 'Driving Page - Demo', path: NAVIGATION.driving },
  { content: 'Receipt Page - Demo', path: NAVIGATION.receipt },
]
