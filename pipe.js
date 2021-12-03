function pipe(funcs) {
	return (x) => funcs.reduce((acc, func) => func(acc), x);
}
