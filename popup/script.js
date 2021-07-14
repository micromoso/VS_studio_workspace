


const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-button-close]');
const overlay = document.getElementById('overlay')

console.log({openModalButtons, closeModalButtons, overlay})


openModalButtons.forEach(button => {
    button.addEventListener('click', () => { 
        const modal = document.querySelector(button.dataset.modalTarget);
    console.log('Button clicked!!')        
        openModal(modal);
    })
})


closeModalButtons.forEach((button) => {
    button.addEventListener('click', () => { 
        const modal = button.closest('.modal');
        closeModal(modal);
    })
})


overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    console.log('overlay clicked!!')        
    modals.forEach( (modal)=> {
        closeModal(modal);
    })
})

function openModal(modal) {
    if(!modal) return;

    modal.classList.add('active');
    overlay.classList.add('active');

}
function closeModal(modal) {
    if(!modal) return;

    modal.classList.remove('active');
    overlay.classList.remove('active');
}










