module.exports = {
	title: 'Mis notas',
	description: 'Mis notas de programación',

	themeConfig: {
		logo: '/images/hero.png',

		nav: [
         {
            text: 'Notas',
            ariaLabel: 'Menu de notas',
            items: [
               { text: 'Git/GitHub', link: '/git/' },
               { text: 'TypeScript', link: '/typescript/' }
            ]
         },
			{ text: 'About', link: 'https://cv.alejandrollorente.com' },
      ],
   
      
      sidebar: {
         '/git/':[
            ''
         ],
         '/typescript/':[
            ''
         ],
      }

      }
}
