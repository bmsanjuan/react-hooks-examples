import {fireEvent, render, screen} from '@testing-library/react';
import {MultipleCustomHooks} from '../../src/03-examples/MultipleCustomHooks';
import {useFetch} from '../../src/hooks/useFetch';
import {useCounter} from '../../src/hooks/useCounter';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');


describe('Pruebas en el MultipleCustomHooks', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    })

    beforeEach( () => {
        jest.clearAllMocks();
    }) 

    test('debe de mostrar el componente por defecto', () => { 

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: false,
            error: null,
        });
        
        render(<MultipleCustomHooks/>);

        expect(screen.getByText('Cargando'));

        const nextButton = screen.getByRole('button', {name: 'Siguiente'});
        expect(nextButton.disable).toBeFalsy();

        screen.debug();
    })

    test('debe de mostrar un pokemon', () => {

        useFetch.mockReturnValue({
            data: {id:'152', name: 'Vaporeon', sprites: {front_default: null, front_shiny: null, back_default: null, back_shiny: null}},
            isLoading: false,
            hasError: false,
            error: null,
        });

        render(<MultipleCustomHooks/>);

        expect (screen.findByText('152')).toBeTruthy();
        expect (screen.findByText('Vaporeon')).toBeTruthy();

        screen.debug();

    })

    test('debe de llamar a la funcion de incrementar', () => {
        useFetch.mockReturnValue({
            data: {id:'1', name: 'Bulbasur', sprites: {front_default: null, front_shiny: null, back_default: null, back_shiny: null}},
            isLoading: false,
            hasError: false,
            error: null,
        });

        render(<MultipleCustomHooks/>);

        const nextButton = screen.getByRole('button', {name: 'Siguiente'});
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();

    })


})