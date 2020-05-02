
const dataButtonSelect = require('./public/data/data-button-select.json')
// const dataSidebarConfig = require('./public/data/data-sidebar-config.json')

module.exports = {
	title: 'Mis notas',
	description: 'Mis notas de programación',

	themeConfig: {
		logo: '/images/hero.png',

		nav: [
         {
            text: 'Notas',
            ariaLabel: 'Menu de notas',
            items: dataButtonSelect
         },
			{ text: 'About', link: 'https://cv.alejandrollorente.com' },
      ],
   
      // sidebar: dataSidebarConfig
   }
}


