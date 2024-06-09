const buttonOpen = document.querySelector('.button1')

const butonClose = document.querySelector('.button2')

const modalWindow = document.querySelector('.modal')

function openModal() {
    modalWindow.classList.add('active')
    buttonOpen.style.display = 'none'
}

function closeModal() {
    modalWindow.classList.remove('active')
    buttonOpen.style.display = 'block'
}

buttonOpen.addEventListener('click', openModal)
butonClose.addEventListener('click', closeModal)