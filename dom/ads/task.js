class TextRotator {
    constructor(rotatorElement) {
        this.rotator = rotatorElement;
        this.cases = Array.from(rotatorElement.querySelectorAll('.rotator__case'));
        this.currentIndex = 0;
        this.isActive = false;
    }
    findActiveIndex() {
        return this.cases.findIndex(caseElement => 
            caseElement.classList.contains('rotator__case_active')
        );
    }
    activateNext() {
        this.cases[this.currentIndex].classList.remove('rotator__case_active');
        this.currentIndex = (this.currentIndex + 1) % this.cases.length;
        this.cases[this.currentIndex].classList.add('rotator__case_active');
        const activeCase = this.cases[this.currentIndex];
        const speed = parseInt(activeCase.dataset.speed) || 1000;
        const color = activeCase.dataset.color || 'black';
        activeCase.style.color = color;
        if (this.isActive) {
            clearTimeout(this.timer);
            this.timer = setTimeout(() => this.activateNext(), speed);
        }
    }
    start() {
        this.isActive = true;
        this.currentIndex = this.findActiveIndex();
        if (this.currentIndex === -1) {
            this.currentIndex = 0;
            this.cases[0].classList.add('rotator__case_active');
        }
        const activeCase = this.cases[this.currentIndex];
        const speed = parseInt(activeCase.dataset.speed) || 1000;
        const color = activeCase.dataset.color || 'black';
        activeCase.style.color = color;
        this.timer = setTimeout(() => this.activateNext(), speed);
    }
    stop() {
        this.isActive = false;
        if (this.timer) {
            clearTimeout(this.timer);
        }
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const rotators = document.querySelectorAll('.rotator');
    
    rotators.forEach(rotatorElement => {
        const rotator = new TextRotator(rotatorElement);
        rotator.start();
    });
});