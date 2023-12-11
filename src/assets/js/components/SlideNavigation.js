export default class SlideNavigation {
    constructor() {
        this.animationTags = [
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'li',
            'main > p',
            'main > pre',
            '.main-navigation',
        ];

        this._filterMainItems = this._filterMainItems.bind(this);
        this.mainItems = Array.from(document.querySelectorAll('main > *'))
            .reduce(this._filterMainItems, []);

        this.mainItems.push(document.querySelector('.main-navigation'));

        this.mainItems.forEach(el => el.classList.add('fade-in'));

        this.count = 0;

        window.addEventListener('keydown', (e) => this._keyListener(e));

        if (this.hasItemsToShow()) {
            this.next();
        }

        let localStorageOptions = localStorage.getItem('options');

        if (localStorageOptions) {
            let json = JSON.parse(localStorageOptions);

            if (json.showAll) {
                this.showAll();
            }
        }

        document.querySelectorAll('.options-menu form').forEach(el => {
            if (localStorageOptions) {
                let json = JSON.parse(localStorageOptions);
                for (let key of Object.keys(json)) {
                    const input = el.querySelector(`[name="${key}"]`);

                    switch (input.type) {
                        case 'checkbox':
                            input.checked = json[key] === 'on' ? true : false;
                            break;
                        default:
                            input.value = json[key];
                    }
                }
            }

            el.addEventListener('change', (e) => {
                const formData = new FormData(el);
                const obj = {};

                for (let data of formData.entries()) {
                    obj[data[0]] = data[1];
                }

                localStorage.setItem('options', JSON.stringify(obj));
            });
        })
    }

    next() {
        if (this.hasItemsToShow()) {
            this.mainItems[this.count].classList.add('active');
            this.count++;

            if (this.count === this.mainItems.length - 1) {
                this.next();
                document.body.classList.add('done');
            }

        } else {
            const currentSlide = this.getCurrentSlide();

            if (!currentSlide) {
                return;
            }

            const nextSlide = currentSlide.closest('li').nextElementSibling;

            if (!nextSlide) {
                return;
            }

            nextSlide.querySelector('a').click();
        }
    }

    prev() {
        const currentSlide = this.getCurrentSlide();

        if (!currentSlide) {
            return;
        }

        const prevSlide = currentSlide.closest('li').previousElementSibling;

        if (!prevSlide) {
            return;
        }

        prevSlide.querySelector('a').click();
    }

    getCurrentSlide() {
        return document.querySelector('body > footer nav a[aria-current]');
    }

    showAll() {
        this.mainItems.forEach(el => el.classList.add('active'));

        this.count = this.mainItems.length - 2;

        this.next();
    }

    hasItemsToShow() {
        return this.count < this.mainItems.length;
    }

    _keyListener(e) {
        switch (e.code) {
            case 'ArrowRight':
                this.next();
                break;
            case 'ArrowLeft':
                this.prev();
                break;
            case 'Space':
                this.showAll();
                break;
            case 'Escape':
                this._toggleMenu();
        }
    }

    /**
     *
     * @param {Array} prev
     * @param {HTMLElement} current
     */
    _filterMainItems(prev, current) {
        if (this.animationTags.reduce((a, b) => a || current.matches(b), false)) {
            prev.push(current);
        }

        if (current.children.length) {
            let filtered = Array.from(current.children).reduce(this._filterMainItems, []);
            prev.push(...filtered);
        }

        return prev;
    }

    _toggleMenu() {
        document.querySelector('.options-menu').classList.toggle('open');
    }
}
