document.addEventListener("DOMContentLoaded", function(){
	
	class Model {
		
		constructor() {
			this.pages = [
				{
					h1: 'LE SPORT',
					url: '/homepage',
          background: '#7893c9',
          color : 'white'
				},
				{
					h1: 'WHAT IS YOUR FAVOURITE SPORT ?',
					url: '/quizz',
          background: 'rgb(11, 36, 73)',
          color : 'white'
        
				}
			]
		}

		getPageByUrl(url) {
			return this.pages.find(page => page.url == url)
		}

  }
  class View {

		constructor() {
			this.app = document.querySelector('.app')
		}

		changeTitle(text) {
			this.app.innerHTML = text
		}

		changeBackground(color) {
			this.app.style.background = color
    }
    
    changeTextColor(color) {
			this.app.style.color = color
    }
    addTitle(){
      let BigTitle = document.createElement('h1')
      h1.classList.add('main__title')
    }

	}

	function controller() {
		let data = new Model()
		const currentPage = data.getPageByUrl('/homepage')

		let page = new View()
		page.changeTitle(currentPage.title)
    page.changeBackground(currentPage.background)
    page.changeTextColor(currentPage.color)
    if(currentPage.h1) {
			page.addh1()
		}
	}

	controller()

})


// const app = document.querySelector('.app');

// function makeMessage(message) {
//   const newMessage = document.createElement('p');
//   const addText = document.createTextNode(message);
//   newMessage.appendChild (addText);
//   app.appendChild(newMessage);
// }
// makeMessage("HELLO WRLD");
