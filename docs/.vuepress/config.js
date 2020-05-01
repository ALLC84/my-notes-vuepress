const dataButtonSelect = require('./public/data/data-button-select.js')
const dataSidebarConfig = require('./public/data/data-sidebar-config.js')

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
   
      sidebar: dataSidebarConfig
   }
}


