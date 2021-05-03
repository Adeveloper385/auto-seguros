import styled from '@emotion/styled'

const Mensaje = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
    color:  #00838F;
`
const Total = styled.p`
    color:  #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`

const ResultContainer = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`

type Cotizacion = {
   cotizacion: number; 
}

export const Result = ({ cotizacion }: Cotizacion) => {


    return(
        <>
            {
            cotizacion === 0 ?
            <Mensaje>Elige Marca, Año, y Plan</Mensaje> :
            <ResultContainer> 
                <Total>El monto total es: $ {cotizacion}</Total>
            </ResultContainer>
            } 
        </>
    )
}
