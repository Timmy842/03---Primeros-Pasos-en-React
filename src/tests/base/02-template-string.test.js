import '@testing-library/jest-dom';

import { getSaludo } from "../../base/02-template-string";

// Pruebas Template String
describe('Pruebas en 02-template-string.js', () => {

    test('Prueba en el metodo getSaludo', () => {

        const nombre = 'Carlos';

        const saludo = getSaludo( nombre );
        
        expect( saludo ).toBe( 'Hola ' + nombre );

    });

    test('Prueba en el metodo getSaludo sin argumentos', () => {

        const saludo = getSaludo();

        expect( saludo ).toBe( 'Hola Carlos' );

    });

});