import Menu from '../Components/menu'
import ListaDeCarros from '../Components/Carro'

function ListaCarros (){
    let carroAray=['Fusca','Celta','Uno']
    return(
        <>
        <Menu/>
        <hr/>
        <ListaDeCarros carroValorPai={carroAray}></ListaDeCarros>
        </>
    )
}
export default ListaCarros;