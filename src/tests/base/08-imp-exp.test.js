import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de Heroes', () => {

    test('Debe devolver un heroe por id', () => {

        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find( h => h.id === id );

        expect( heroe ).toEqual( heroeData );
        
    })

    test('Debe devolver undefinded si heroe no existe', () => {

        const id = 10;
        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined );
        
    })

    test('Debe devolver un arreglo con los heroes de DC', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );
        
        const heroesData = heroes.filter( (h) => h.owner === owner );
    
        expect( heroes ).toEqual( heroesData );
        
    })

    test('Debe devolver un arreglo con los heroes de DC', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );
    
        expect( heroes.length ).toBe( 2 );
        
    })
    
})