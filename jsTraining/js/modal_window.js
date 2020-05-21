const btn = document.getElementById('id_open_button');
const modal = document.getElementById('id_modal');

const closeBtn = document.querySelector('.modal_close');

btn.onclick = ( ) =>{
    modal.classList.add('modal_active');

    closeBtn.addEventListener('click', closeModal);

    function closeModal(){
        modal.classList.remove('modal_active');
        closeBtn.removeEventListener('click', closeModal);
    };
};