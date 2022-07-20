import {petsService} from '../api/api__pets.js'

export const criaCardPets = (imagem,nome,idade,porte,comportamento,localidade,id) =>{
    const cardPet = document.createElement("li");
    const conteudo = `
    <img src="${imagem}" alt="foto do animal" class="pet__imagem">
    <aside class="ficha__pet--info">
        <h2 class="pet__nome">${nome}</h2>
        <p class="pet__caracteristicas">${idade}</p>
        <p class="pet__caracteristicas">${porte}</p>
        <p class="pet__caracteristicas">${comportamento}</p>
        <p class="pet__local">${localidade}</p>
        <a href="mensagem.html" class="pet__responsavel">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M4.8816 8.0325C5.1264 8.0325 5.3316 7.94625 5.4972 7.77375C5.6628 7.60125 5.7456 7.3875 5.7456 7.1325C5.7456 6.8775 5.6628 6.66375 5.4972 6.49125C5.3316 6.31875 5.1264 6.2325 4.8816 6.2325C4.6368 6.2325 4.4316 6.31875 4.266 6.49125C4.1004 6.66375 4.0176 6.8775 4.0176 7.1325C4.0176 7.3875 4.1004 7.60125 4.266 7.77375C4.4316 7.94625 4.6368 8.0325 4.8816 8.0325ZM8.7048 8.0325C8.9496 8.0325 9.1548 7.94625 9.3204 7.77375C9.486 7.60125 9.5688 7.3875 9.5688 7.1325C9.5688 6.8775 9.486 6.66375 9.3204 6.49125C9.1548 6.31875 8.9496 6.2325 8.7048 6.2325C8.46 6.2325 8.2548 6.31875 8.0892 6.49125C7.9236 6.66375 7.8408 6.8775 7.8408 7.1325C7.8408 7.3875 7.9236 7.60125 8.0892 7.77375C8.2548 7.94625 8.46 8.0325 8.7048 8.0325ZM12.3768 8.0325C12.6216 8.0325 12.8268 7.94625 12.9924 7.77375C13.158 7.60125 13.2408 7.3875 13.2408 7.1325C13.2408 6.8775 13.158 6.66375 12.9924 6.49125C12.8268 6.31875 12.6216 6.2325 12.3768 6.2325C12.132 6.2325 11.9268 6.31875 11.7612 6.49125C11.5956 6.66375 11.5128 6.8775 11.5128 7.1325C11.5128 7.3875 11.5956 7.60125 11.7612 7.77375C11.9268 7.94625 12.132 8.0325 12.3768 8.0325ZM0 18V1.35C0 1.005 0.1296 0.69375 0.3888 0.41625C0.648 0.13875 0.9504 0 1.296 0H15.984C16.3152 0 16.614 0.13875 16.8804 0.41625C17.1468 0.69375 17.28 1.005 17.28 1.35V13.05C17.28 13.395 17.1468 13.7063 16.8804 13.9838C16.614 14.2612 16.3152 14.4 15.984 14.4H3.456L0 18ZM1.296 14.7375L2.916 13.05H15.984V1.35H1.296V14.7375ZM1.296 1.35V13.05V14.7375V1.35Z"
                    fill="#36D6AD" />
            </svg>
            Falar com responsável</a>
    </aside>
    `

    cardPet.classList.add("ficha__pet");
    cardPet.innerHTML = conteudo;
    cardPet.dataset.id = id;

    return cardPet;
}

const listaCardsPet = document.querySelector(".lista__pets")

const render = async () =>{
    try {
        const dados = await petsService.listaPets()

        dados.forEach(pets=>{
            listaCardsPet.appendChild(criaCardPets(pets.imagem, pets.nome, pets.idade, pets.porte, pets.comportamento, pets.localidade))
        })

    } catch (error) {
        console.log(error)
    }
}

render();