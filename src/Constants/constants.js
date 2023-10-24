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

export const RECEIPT_HEADERS = ['Dato', 'Beløb', 'Kommentar', 'Bilag']

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

export const INFO_REGISTRERING = {
  title: 'Når du klikker registrer:',
  contents: [
    '1. Bilag og data sendes til Kassekladen i vores regnskabsprogram.',
    '2. Der bliver sendt en email til dig med en kvittering.',
    '3. Der bliver sendt en email til regnskabsføren om, at der er et udlæg, der skal behandles.',
    "4. Du kan se dit udlæg i historikken under 'Historik' i menuen.",
  ],
}

export const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl Lorem ipsum dolor sit amet'

export const users = {
  benny: { name: 'benny', password: 'benny' },
  demo: { name: 'demo', password: 'demo' },
  johnny: { name: 'johnny', password: 'johnny' },
  lenny: { name: 'lenny', password: 'lenny' },
  kenny: { name: 'kenny', password: 'kenny' },
  '': { name: '', password: '' },
  test: { name: 'test', password: 'test' },
}
