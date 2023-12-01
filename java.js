const modalBtns = document.querySelectorAll('.services__button');
const modalCloseBtns = document.querySelectorAll('.services__modal-close-btn');
const contentBxs = document.querySelectorAll('.contentBx');

let modal = function (modalTarget) {
    const modal = document.querySelector(modalTarget);
    modal.classList.add('active-modal');
};

modalBtns.forEach((modalBtn) => {
    modalBtn.addEventListener('click', () => {
        const contentId = modalBtn.getAttribute('data-content-id');
        const modalTarget = `#modal${contentId}`;
        modal(modalTarget);

        // Add 'active' class to corresponding contentBx
        const contentBx = document.getElementById(`content${contentId}`);
        contentBx.classList.add('active');
    });
});

modalCloseBtns.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
        const activeModal = closeBtn.closest('.services__modal');
        activeModal.classList.remove('active-modal');
    });
});

// Add click event to contentBxs to keep them active
contentBxs.forEach((contentBx) => {
    contentBx.addEventListener('click', () => {
        // Add 'active' class to clicked contentBx
        contentBx.classList.add('active');
    });
});
