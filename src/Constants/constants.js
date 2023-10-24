export const ENDPOINTS = {
  submit: {
    name: 'submit',
    path: '/submit',
  },
  receipts: {
    name: 'receipts',
    path: '/receipts',
  },
  login: {
    name: 'login',
    path: '/login',
  },
}

export const USERS = {
  benny: { name: 'benny', password: 'benny' },
  demo: { name: 'demo', password: 'demo' },
  johnny: { name: 'johnny', password: 'johnny' },
  lenny: { name: 'lenny', password: 'lenny' },
  kenny: { name: 'kenny', password: 'kenny' },
  '': { name: '', password: '' },
  test: { name: 'test', password: 'test' },
}

export const NAVIGATION = {
  registrer: {
    path: '/registrer',
    content: 'Registrer udlæg',
  },
  historik: {
    path: '/historik',
    content: 'Historik',
  },
  logUd: {
    path: '/',
    content: 'Log ud',
  },
  logInd: {
    path: '/login',
    content: 'Log ind',
  },
  forsiden: {
    path: '/',
    content: 'Forside',
  },
}

export const ACCOUNT_MENU = [
  {
    path: NAVIGATION.registrer.path,
    content: NAVIGATION.registrer.content,
  },
  {
    path: NAVIGATION.historik.path,
    content: NAVIGATION.historik.content,
  },
  {
    path: NAVIGATION.logUd.path,
    content: NAVIGATION.logUd.content,
  },
]

export const TEXT = {
  long_text:
    'Du can med appen integrere til E-conomic, Billy og Dinero. Udlæggeren kan med mobilen indsende udlæg, som havner direkte i Kassekladen',
  button_ok: 'Ok',
  login: 'Login',
  request_demo: 'Request Demo',
  registrer_button_uploaded: 'Bilag uploadet',
  registrer_button_not_uploaded: 'Upload ét bilag',
  lorem:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl Lorem ipsum dolor sit amet',
  receipt_headers: ['Dato', 'Beløb', 'Kommentar', 'Bilag'],
  registrer_modal_info: [
    '1. Bilag og data sendes til Kassekladen i vores regnskabsprogram.',
    '2. Der bliver sendt en email til dig med en kvittering.',
    '3. Der bliver sendt en email til regnskabsføren om, at der er et udlæg, der skal behandles.',
    "4. Du kan se dit udlæg i historikken under 'Historik' i menuen.",
  ],
  registrer_modal_title: 'Når du klikker registrer:',
  frontpage_title: 'Expenses.nu',
  frontpage_subtitle: 'Udlægshåndtering gjort simpelt',
  error: 'Invalid username or password',
  login_page_header: 'Log In',
  login_page_hint: 'Use EMPTY username and password to login as demo user',
  login_page_button: 'Log In',
  historik_page_header: 'Registration History',
  login_page_username: 'Username',
  login_page_password: 'Password',
  registrer_page_header: 'Registrer udlæg',
  receipt_date: 'Receipt Date',
  receipt_amount: 'Amount in DKK',
  commentary: 'Commentary',
  submit_expense: 'Submit Expense',
  close: 'Close',
  how_to_use: 'How to use the app',
  expense_submitted: 'Expense submitted',
  input_number: 'Please input a number',
}
