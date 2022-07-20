const url = "http://localhost:3000/pets"

const listaPets = () =>{
    return fetch(`${url}`).then (resposta =>{
        if(resposta.ok) {
            return resposta.json();
        }
        throw new Error ("Não foi possível listar os pets.")
    })
}

export const petsService ={
    listaPets
}