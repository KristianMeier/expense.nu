const express = require('express')
const app = express()
var cors = require('cors')


app.use(cors())
app.use(express.json())

// PROXY ENDPOINT - ingen sikkerhed
app.get('/economic', async (req, res) => {
    return axios.get(`https://api.economic.com/${req.hostname}`, req.body, {
        headers: {
            Authorization: 'Bearer eyejgroijaoij'
        }
    });
})

app.post('/economic', async (req, res) => {
    return axios.post(`https://api.economic.com/${req.hostname}`, req.body, {
        headers: {
            Authorization: 'Bearer eyejgroijaoij'
        }
    });
})


// Det nnemste sikre (hvis jwt tilføjes)
app.post('/', async (req, res) => {
    const comment = req.body.comment;
    const token = 'eygirjeoahgjeriohjaeorhijreaoihja';

// Tilføj til database
// Fordelen er hvis man får mere data fra sin frontend, end econmic kan udnerstytte
// Så ville man gemme alt dataen i databasen og det econmic skal bruge/man-vil-sende
// vil blive sendt til economic.

  return await axios.post('https://api.e-conomic.com/journals/9/vouchers', {
    entries: {
        financeVouchers: [
            {
                text: comment,
                amount: 35.52,
                currency: 'DKK',
                date: '2023-11-01',
            }
        ]
    }
  }, {
    Authorization: 'Bearer ' + token
  })


})

app.listen(3001, () => {
    console.log('Go!');
})