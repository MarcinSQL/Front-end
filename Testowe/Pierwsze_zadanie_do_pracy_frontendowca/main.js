const actionBtn = document.querySelector('.action-btn');


const modal = (body = {}) => {
    return `<div tabindex="10" class="modal">
        <p class="modal-title ${body.type || ""}">
            <i class="modal-title-icon" data-feather="${body.modal_icon || "info"}"></i>
            ${body.title || "Czy jestes pewien?"}
        </p>
        <p class="modal-description">
            ${body.description || "Potwierdz swoj wybor"}
        </p>
        <div class="modal-buttons">
            <button class="modal-accept modal-action-btn">${body.accept_btn || "Tak"}</button>
            <button class="modal-decline modal-action-btn">${body.decline_btn || "Nie"}</button>
        </div>
        <button class="modal-close-icon"><i data-feather="x"></i></button>
    </div>`
}

const creatModal = (value) => {
    const modalConstainer = document.createElement('div');
    modalConstainer.className = 'modal-container';
    modalConstainer.innerHTML = modal(value);
    document.body.appendChild(modalConstainer)
    
    const closeIcon = document.querySelector('.modal-close-icon')
    
    closeIcon.addEventListener('click', (e) => {
        const modal = document.querySelector('.modal-container')
        modal.remove();
        document.body.style.overflow = "auto";
    })

    const closeButtons = document.querySelectorAll('.modal-action-btn')

    closeButtons.forEach((btn) => btn.addEventListener('click', () => {
        const modal = document.querySelector('.modal-container')
        modal.remove();
        document.body.style.overflow = "auto";
    }))

    const modalActive = document.querySelector('.modal');
    modalActive.focus();
    modalActive.addEventListener('keydown', (e) => {
        if(e.key === 'Escape'){
            const modal = document.querySelector('.modal-container')
            modal.remove();
            document.body.style.overflow = "auto";
        }
    });

    const modalActiveContainer= document.querySelector('.modal-container')

    modalActiveContainer.addEventListener('click', (e) => {
        if(e.target.classList.contains('modal-container')){
            e.target.remove();
        }
    })

    feather.replace();

    document.body.style.overflow = "hidden";
}


const addToBasket = () => {
    console.log('dodano do koszyka');

    creatModal({
            type: 'warning',
            modal_icon: 'alert-triangle',
            title: "Lorem ipsum dolor title",
            description: "lorem ipsum description bla bla bla cos tam chcialem",
            accept_btn: 'Zaakceptuj',
            decline_btn: 'Anuluj',
    })
}


actionBtn.addEventListener('click', addToBasket)

const actionTwoBtn = document.querySelector('.action-two-btn').addEventListener('click', () => {
        creatModal({
            title: "Drugi tekst modala",
            description: "lorem ipsum description bla bla bla cos tam chcialem lorem ipsum description bla bla bla cos tam chcialem",
            accept_btn: 'Ok',
            decline_btn: 'Nie',
    })
});

const actionThree = document.querySelector('.action-three-btn').addEventListener('click', () => {
        creatModal();
})