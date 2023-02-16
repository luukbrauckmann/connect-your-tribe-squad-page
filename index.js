import express from 'express'

const app = express()

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.static('static'))

app.get('/', async (_req, res) => res.render('index'))


// Stel het poortnummer in waar express op gaat luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal het ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})