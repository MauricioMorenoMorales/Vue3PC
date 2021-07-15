class PlatziReactive {
	constructor(options) {
		this.origen = options.data()

		//Destino
		this.$data = new Proxy(this.origen, {
			get(target, name) {
				if (name in target) {
					return target[name]
				}
				console.warn('La propiedad ', name, 'no existe')
				return 'Data no existente'
			},
		})
	}
	mount() {
		document
			.querySelectorAll('*[p-text]')
			.forEach(element =>
				this.pText(element, this.$data, element.getAttribute('p-text')),
			)
	}
	pText(element, target, name) {
		element.innerText = target[name]
	}
}

let Platzi = {
	createApp(options) {
		return new PlatziReactive(options)
	},
}
