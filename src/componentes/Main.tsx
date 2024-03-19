import './Main.css'
function Main(){
    return(
        <main>
           <div className="estudante-box">
            <img className="estudante_foto" src="https://github.com/ime-m.png" alt=""/>
            <div className="informações">
            <h3 className="estudante_nome">Emily Marques da Cruz</h3>
            <p className="estudante_descricao">Estudante do IFMS em técnico em informática para internet </p>
            <a className='link-git' href="https://github.com">GitHub</a>
           </div>
           </div>
        </main>
        
    )
}

export default Main;