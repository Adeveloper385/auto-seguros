import React from 'react'
import styled from '@emotion/styled'
import { IProps } from '../App'

const Div = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
`
const Label = styled.label`
    flex: 0 0 100px;
`
const Select = styled.select`
    display:block;
    padding: 1rem;
    width: 100%;
    border: 1px solid #e1e1e1;
    webkit-appearance: none;
`
const InputRadio = styled.input`
    margin: 0 1rem;
`
const Button = styled.button`
    background-color: #00838F;
    font-size: 1rem;
    width: 100%;
    padding: 1rem;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    border: none; 
    transition: background-color .5s ease;
    margin-top: 1.5rem;

    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`
const Error = styled.div`
    color: red;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 0.5rem;
`

export function Form({setResume}: IProps){


    const [data, setData] = React.useState<Idata>({
        brand: '',
        year: '',
        plan: ''
    })
    const { brand, year, plan } = data
    const [error, setError] = React.useState(false)

    const getData = (e: ChangeEventS | ChangeEventI ) => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        
        //validations
        if(brand.trim()==='' || year.trim()==='' || plan.trim()===''){
            setError(true)
            return;
        }
            setError(false)
        
        //base price
        let result = 2000;

        //get year diference
        const getYear = (year: string) => {
            return new Date().getFullYear() - parseInt(year)
        }

        //set % per year 3%
        const difference = getYear(year);
        result -= ((difference * 3) * result) / 100

        //set increment by brand
        const getIncrement = (brand: string): number => {
            let increment = 1;
            
            switch(brand){
                case 'Ford':
                    increment = 1.1;
                    break;
                case 'Toyota':
                    increment = 1.3;
                    break;
                case 'BMW':
                    increment = 1.5;
                    break; 
                default: 
                    break;
            }
            return increment;
        }
        //increment by brand
        result = result * getIncrement(brand);

        // set increment by Plan
        const getPlan = (plan: string) => {
            return (plan === 'basico') ? 1.20 : 1.50;
        }

        // increment by plan
        const planIncrement: number = getPlan(plan)
        result = planIncrement * result

        // set Resumen to App
        setResume({
            cotizacion: result,
            data
        })
            //reset form
            setData({
                brand: '',
                year: '',
                plan: ''
            })
    }

    return(
        <form onSubmit={handleSubmit}>
            {error ? <Error>Todos los Campos son Obligatorios!</Error> : null}
            <Div>
                <Label >Marca</Label>
                <Select
                    name="brand"
                    value={data.brand}
                    onChange={getData}
                >
                    <option value=""> Seleccione </option>
                    <option value="Ford">Ford</option>
                    <option value="BMW">BMW</option>
                    <option value="Toyoya">Toyota</option>
                </Select>
            </Div>
            <Div>
                <Label >Año</Label>
                <Select
                    name="year"
                    value={data.year}
                    onChange={getData}
                >
                    <option value=""> Seleccione </option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Div>
            <Div>
                <Label>Plan</Label>
                <InputRadio
                    type="radio"
                    name="plan" 
                    value="basico"
                    checked={data.plan === 'basico'}
                    onChange={getData}
                /> Basico
                <InputRadio
                    type="radio"
                    name="plan" 
                    value="completo"
                    checked={data.plan === 'completo'}
                    onChange={getData}
                /> Completo
            </Div>
            <Button type="submit">Cotizar</Button>
        </form>
    )
}
    type ChangeEventS = React.ChangeEvent<HTMLSelectElement>;
    type ChangeEventI = React.ChangeEvent<HTMLInputElement>;

    export interface Idata {
        brand: string;
        year: string;
        plan: string;
    }
