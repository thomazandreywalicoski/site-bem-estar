let inspecionarProdutos = document.querySelector('.inspecionar-produtos');
let inspecionarCard = inspecionarProdutos.querySelectorAll('.inspecionar');

document.querySelectorAll('.produtos-card').forEach(produtos =>{
    produtos.onclick = () =>{
        inspecionarProdutos.style.display = 'flex';
        let nome = produtos.getAttribute('data-name');
        inspecionarCard .forEach(produtos =>{
            let target = produtos.getAttribute('data-target');
            if(nome == target){
                produtos.classList.add('active');
            } 
        });
    };
});

inspecionarCard.forEach(close =>{
    close.querySelector('.fechar').onclick = () => {
        close.classList.remove('active');
        inspecionarProdutos.style.display = 'none'
    };
});
