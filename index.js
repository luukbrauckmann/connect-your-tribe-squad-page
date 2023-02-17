import express from 'express'

const app = express()

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.static('static'))

app.get('/', async (_req, res) => {
	let members
	const apiUrl = 'https://whois.fdnd.nl/api/v1/members'

	await fetch(apiUrl)
		.then((response) => response.json())
		.then((data) => members = data.members)

	res.render('index', { members })
})


// Stel het poortnummer in waar express op gaat luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal het ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})