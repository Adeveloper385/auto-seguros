import styled from '@emotion/styled'

const ResumeContainer = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`

type Props = {
    data: {
        plan: string,
        year: string,
        brand: string
    }
}

export const Resume = ({data}: Props) => {
    const { plan, year, brand} = data

    if(brand === '' || plan === '' || year === ''){
        return null
    }

    return(
    <ResumeContainer>
        <h2>Resumen de Cotización</h2>
        <ul>
            <li>Marca - { brand }</li>
            <li>Año - { year }</li>
            <li>Plan - { plan }</li>
        </ul>
    </ResumeContainer>
    )
}
