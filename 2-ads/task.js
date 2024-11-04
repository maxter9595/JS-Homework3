document.addEventListener("DOMContentLoaded", () => {
    const rotators = document.querySelectorAll('.rotator');

    rotators.forEach(rotator => {
        const cases = rotator.querySelectorAll('.rotator__case');
        let currentIndex = 0;

        const changeCase = () => {
            cases[currentIndex].classList.remove('rotator__case_active');
            currentIndex = (currentIndex + 1) % cases.length;
            
            cases[currentIndex].classList.add('rotator__case_active');
            cases[currentIndex].style.color = cases[currentIndex].dataset.color;

            const speed = parseInt(cases[currentIndex].dataset.speed, 10);
            setTimeout(changeCase, speed);
        };

        const initialSpeed = parseInt(cases[currentIndex].dataset.speed, 10);
        setTimeout(changeCase, initialSpeed);
    });
});