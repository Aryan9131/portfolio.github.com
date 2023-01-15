
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');
function pageTransition() {
    for (let i = 0; i < sectBtn.length; i++) {
        // Traveling in Buttons
        sectBtn[i].addEventListener('click', function () {
            let currActive = document.getElementsByClassName('active-btn');
            currActive[0].className = currActive[0].className.replace('active-btn', '');
            this.className += " active-btn";
        })
    }
    // Changing Pages
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        console.log(id);
        if (id) {
            let currSec = document.getElementById(id);
            //hide other Sections
            Array.from(sections).forEach((section) => {
                section.classList.remove('active');
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}
pageTransition();
