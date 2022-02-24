import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import PrimeraApp from "../PrimeraApp";

describe('Pruebas en PrimeraApp', () => {

    // test('Debe retornar Hola soy Goku', () => {

    //     const saludo = 'Hola soy Goku';

    //     const { getByText } =  render( <PrimeraApp saludo = { saludo } /> );

    //     expect( getByText(saludo) ).toBeInTheDocument();
        
    // })
    
    test('Debe mostrar <PrimeraApp /> correctamente', () => {

        const saludo = 'Hola Soy Goku'
        const wrapper = shallow( <PrimeraApp saludo = { saludo } /> );
        
        expect( wrapper ).toMatchSnapshot();
        
    })
    
})