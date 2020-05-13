document.addEventListener("DOMContentLoaded", function(){
	
	class Model {
		
		constructor() {
			this.pages = [
				{
					title: 'Home',
					url: '#',
					background: 'black',
					color: 'white',
					content: `
						
						<img src="../asset/img/sport.jpg" alt="girl-run-sport" >
						
					`,
					dynamisme: () => {

						const li = document.querySelectorAll('li')

						function toUpper(element) {
							element.innerText = element.innerText.toUpperCase()
						}
						li.forEach(element => {
							toUpper(element)
						})

					}
				},
				{
					title: 'Sport',
					url: '#Sport',
					background: 'blanc',
					color: 'white',
					content: `
						<div class="parallax-app">
							<div class="parallax">

							</div>
						</div>
					`,
					dynamisme: () => {
						window.addEventListener('scroll', (e) => {
							let scrollTop = e.target.scrollingElement.scrollTop

							console.log(scrollTop)

							document.querySelector('.parallax').style.backgroundPosition = `center calc(50% - ${scrollTop / 2}px)`
						})
					}
				},
				{
					title: 'Contact',
					url: '#contact',
					background: 'black',
					color: 'white',
					form: true
				}
			]
		}

		getPageByUrl(url) {
			return this.pages.find(page => page.url == url)
		}

	}

	class View {

		constructor(pages) {
			this.app = document.querySelector('.app')
			this.app.innerHTML = ''
			this.addHeader(pages)
		}

		run(dynamisme) {
			dynamisme()
		}

		addContent(content) {
			const contentapp = document.createElement('div')
			contentapp.classList.add('content')
			contentapp.innerHTML = content

			this.app.appendChild(contentapp)
		}

		addHeader(pages) {
			pages.forEach((page) => {
				const button = document.createElement('button')
                button.classList.add('btn')
				button.innerText = page.title

				this.app.appendChild(button)

				button.addEventListener('click', () => {
					location.hash = page.url
				})
			})
		}

		changeTitle(text) {
			const title = document.createElement('h1')

			title.innerText = text

			this.app.appendChild(title)
		}

		changeBackground(color) {
			this.app.style.background = color
		}
		changeColor(color) {
			this.app.style.color = color
		}
		addForm() {
			let input = document.createElement('input')
			input.setAttribute('type', 'text')
			input.classList.add('input-text')

			this.app.appendChild(input)
		}

	}

	function controller() {
		let data = new Model()

		const currentPage = data.getPageByUrl(location.hash || '#')

		let page = new View(data.pages)
		page.changeTitle(currentPage.title)
		page.changeBackground(currentPage.background)
page.changeColor(currentPage.color)
		if(currentPage.content) {
			page.addContent(currentPage.content)
		}

		if(typeof currentPage.dynamisme === 'function') {
			page.run(currentPage.dynamisme)
		}

		if(currentPage.form) {
			page.addForm()
		}
	}

	window.addEventListener('hashchange', () => {
		controller()
	})

	controller()

})