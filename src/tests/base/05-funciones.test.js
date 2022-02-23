import '@testing-library/jest-dom';

import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas 05-funciones', () => {

    test('getUser debe retornar un object', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect( user ).toEqual( userTest );

    });

    test('getUsuarioActivo debe retornar un objeto', () => {

        const nombre = 'Carlos';
        
        const userTest = {
            uid: 'ABC567',
            username: nombre
        }

        const userActivo = getUsuarioActivo( nombre );

        expect( userActivo ).toEqual( userTest );
        
    });
    
});