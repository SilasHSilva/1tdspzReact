function listaDeCarros(props){
    return (
        <>
        <h1>Lista de Carros</h1>
        <ul>
            <li>{props.carroValorPai[0]}</li>
            <li>{props.carroValorPai[1]}</li>
            <li>{props.carroValorPai[2]}</li>
        </ul>
        </>
    )
}

export default listaDeCarros;