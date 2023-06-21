function createCssCog(sides=10, inset=15, precision = 2, width = 100){
    function createPolygon(sides, inset, precision = 2, width = 100) {
		const coords = [];
		const r = width / 2;
		let c = -.5 * Math.PI;
		const p = Math.PI / sides;
		const v = (1 - inset / 100) * r * Math.cos(p);
		let x, y;

		for (let i = 0; i < sides; i++) {
			x = (r * Math.cos(c)) + r;
			y = (r * Math.sin(c) + r);
			coords.push([x.toFixed(precision), y.toFixed(precision)]);
			x = (v * Math.cos(c)) + r;
			y = (v * Math.sin(c)) + r;
			coords.push([x.toFixed(precision), y.toFixed(precision)]);
			c += p;
			x = (v * Math.cos(c)) + r;
			y = (v * Math.sin(c)) + r;
			coords.push([x.toFixed(precision), y.toFixed(precision)]);
			x = (r * Math.cos(c)) + r;
			y = (r * Math.sin(c) + r);
			coords.push([x.toFixed(precision), y.toFixed(precision)]);
			c += p;
		}
        return coords;
    }
    function polygonToClippath(coords) {
            return `polygon(${coords.map(p => { const [x,y] = p; return `${x}% ${y}%`}).join(', ')})`.replaceAll('.00','');
    }
    const coords = createPolygon(sides, inset, precision, width);
    return polygonToClippath(coords);
}
