//Faça um componente que faça um retângulo da largura da tela
//por px

//crie uma variavel com LET no js que contenha o valor  "Meu Componente"
//crie uma div no componente que dentro dela mostre um <p>
//contendo o valor da variável.


function MeuComponente() {
    let variavel = "Meu componente"
    return(
        <div className="minha-div"><p>{variavel}</p>
        </div>
    )  
}

export default MeuComponente;
