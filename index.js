module.exports = value => {
	const regexes = [
		/(\s*-webkit-appearance\s*:\s*none\s*)/i,
		/(\s*-moz-appearance\s*:\s*meterbar\s*)/i
	]

	return regexes.some(regex => regex.test(value))
}
