const test = require('ava')
const isBrowserHack = require('.')

test('It recognizes browser hacks successfully', t => {
	t.true(isBrowserHack('(-webkit-appearance:none)'))
	t.true(isBrowserHack('(-moz-appearance:meterbar)'))
	t.true(isBrowserHack('(-moz-appearance:meterbar) and (display:flex)'))
	t.true(isBrowserHack('(-moz-appearance:meterbar) and (cursor:zoom-in)'))
	t.true(
		isBrowserHack(
			'(-moz-appearance:meterbar) and (background-attachment:local)'
		)
	)
	t.true(
		isBrowserHack('(-moz-appearance:meterbar) and (image-orientation:90deg)')
	)
	t.true(isBrowserHack('(-moz-appearance:meterbar) and (all:initial)'))
	t.true(
		isBrowserHack(
			'(-moz-appearance:meterbar) and (list-style-type:japanese-formal)'
		)
	)
	t.true(
		isBrowserHack(
			'(-moz-appearance:meterbar) and (background-blend-mode:difference,normal)'
		)
	)
})

test('It recognizes browser hacks even if spacing is messed up', t => {
	t.true(isBrowserHack('    (    -webkit-appearance  :     none    )  '))
})

test('It correctly marks regular atrules as non-hacks', t => {
	t.false(isBrowserHack('(display: grid)'))
	t.false(isBrowserHack('(cursor:zoom-in'))
	t.false(isBrowserHack('(image-orientation:90deg'))
})
