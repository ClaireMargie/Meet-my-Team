const modalBtns = document.querySelectorAll('.services__button');
const modalCloseBtns = document.querySelectorAll('.services__modal-close-btn');

let modal = function (modalTarget) {
    const modal = document.querySelector(modalTarget);
    modal.classList.add('active-modal');
};

modalBtns.forEach((modalBtn) => {
    modalBtn.addEventListener('click', () => {
        const contentId = modalBtn.getAttribute('data-content-id');
        const modalTarget = `#modal${contentId}`;
        modal(modalTarget);
    });
});

modalCloseBtns.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
        closeBtn.closest('.services__modal').classList.remove('active-modal');
    });
});
