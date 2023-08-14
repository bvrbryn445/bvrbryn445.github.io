interface ParallaxScrollConstructorArgs {
	containerBgColor: string;
	backgroundUrl: string;
	contentElement: HTMLDivElement;
}

export default class ParallaxScroll {
	#parallaxContainer: HTMLDivElement;
	#parallaxBackground: HTMLDivElement;

	constructor({
		containerBgColor,
		backgroundUrl,
		contentElement
	}: ParallaxScrollConstructorArgs) {
		this.#parallaxContainer = document.createElement('div');
		this.#parallaxBackground = document.createElement('div');
		this.#parallaxContainer.id = 'parallax';

		this.#parallaxContainer.appendChild(contentElement);
		this.#parallaxContainer.appendChild(this.#parallaxBackground);

		// Add classnames to applly styles
		this.#parallaxContainer.classList.add(
			containerBgColor,
			'relative',
			'overflow-hidden',
			'parallax-container',
			'min-h-screen'
		);

		this.#parallaxBackground.classList.add(
			'absolute',
			'top-0',
			'left-0',
			'w-full',
			'h-full',
			'bg-cover',
			'bg-center',
			'bg-fixed',
			'parallax-bg',
		);
		this.#parallaxBackground.style.backgroundImage = `url('${backgroundUrl}')`;

		// Apply parallax scroll effect
		window.addEventListener('scroll', () => {
			const scrolled = window.scrollY;
			const factor = `translateY(-${scrolled * 0.05}px)`;
			this.#parallaxBackground.style.transform = factor;
			// const scrolltotop = document.scrollingElement.scrollTop;
			// const xvalue = 'center';
			// const factor = 0.2;
			// const yvalue = scrolltotop * factor;
			// this.#parallaxBackground.style.backgroundPosition = `${xvalue} ${yvalue}px`;
		});
	}

	public getElement(): HTMLDivElement {
		return this.#parallaxContainer;
	}
}