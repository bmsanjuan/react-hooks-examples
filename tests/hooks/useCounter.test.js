import {act, renderHook} from '@testing-library/react';
import {useCounter} from '../../src/hooks/useCounter';

describe('Pruebas en el userCounter', () => {

    test('debe de retornar los valores por defecto ', () => {

        const { result } = renderHook( () => useCounter());
        const { counter, decrement, increment, reset } = result.current;

        expect(counter).toBe(10);
        expect(decrement).toEqual( expect.any( Function ));
        expect(increment).toEqual( expect.any( Function ));
        expect(reset).toEqual( expect.any( Function ));

    });

    test('debe de retornar el counter con el valor de 100 ', () => {

        const { result } = renderHook( () => useCounter(100));
        const { counter}  = result.current;

        expect(counter).toBe(100);
    })

    test('debe de incrementar el contador', () => {

        const { result } = renderHook( () => useCounter());
        const { counter, increment } = result.current;

        act(() => {
            increment();
            increment(2);
        });
        
        expect(result.current.counter).toBe(13);
    })

    test('debe de decrementar el contador', () => {

        const { result } = renderHook( () => useCounter(100));
        const { counter, decrement } = result.current;

        act(() => {
            decrement(3);
            decrement(5);
        });
        
        expect(result.current.counter).toBe(92);
    })

    test('debe de reiniciar el contador', () => {

        const { result } = renderHook( () => useCounter(100));
        const { counter, increment, decrement, reset } = result.current;

        act(() => {
            increment(2);
            decrement(4);
            reset();
        });
        
        expect(result.current.counter).toBe(100);
    })

});