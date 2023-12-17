let abrirDetalhes = document.querySelector('.abrir-detalhes');
let detalhes = abrirDetalhes.querySelectorAll('.detalhes');

document.querySelectorAll('.beneficios-sobre').forEach(beneficios =>{
    beneficios.onclick = () =>{
        abrirDetalhes.style.display = 'flex';
        let nome = beneficios.getAttribute('data-name');
        detalhes.forEach(beneficios =>{
            let target = beneficios.getAttribute('data-target');
            if(nome == target){
                beneficios.classList.add('active');
            } 
        });
    };
});

detalhes.forEach(close =>{
    close.querySelector('.detalhes-btn-fechar').onclick = () => {
        close.classList.remove('active');
        abrirDetalhes.style.display = 'none'
    };
});