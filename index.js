import express from 'express'

const app = express()

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.static('static'))

app.get('/', async (request, response) => {
	let { page } = request.query
	if (!page) page = 0
	let activePage = +page
	console.log(activePage);
	let pages = [0, 1, 2, 3, 4]

	const apiUrl = `https://whois.fdnd.nl/api/v1/members?first=20&skip=${ 20 * (page ?? 0) }`
	const data = await fetch(apiUrl)
		.then((response) => response.json())
		.then((data) => data)

	const { members, membersConnection } = data

	response.render('index', { members, pages, activePage, membersConnection })
})

app.set('port', process.env.PORT || 8000)

app.listen(app.get('port'), () => console.log(`Application started on http://localhost:${app.get('port')}`))