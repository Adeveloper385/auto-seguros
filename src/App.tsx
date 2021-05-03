import React from 'react';
import styled from '@emotion/styled'
import { Header } from './components/Header'
import { Form, Idata } from './components/Form'
import { Resume } from './components/Resume'
import { Result } from './components/Result'

const Container = styled.div`
    width: 30rem;
    margin: 2rem auto;
`
const Card = styled.div`
    background-color: #fff;
    padding: 1rem 1.5rem;
`
export interface Iresume {
    cotizacion: number;
    data: Idata;
}
export interface IProps {
    resume?: Iresume;
    setResume: React.Dispatch<React.SetStateAction<Iresume>>;
}

const App = () => {

    const [resume, setResume] = React.useState<Iresume>({
        cotizacion: 0,
        data: {
            plan: '',
            year: '',
            brand: ''
        }
    })

    const { data, cotizacion } = resume

    console.log(resume)
  return (
    <>
        <Container>
            <Header /> 
            <Card>
                <Form setResume = {setResume}/>
                <Resume data = {data}/>
                <Result cotizacion = {cotizacion}/>
            </Card>
        </Container>
    </>
  );
}

export default App;
