import { screen, render } from "@testing-library/react";
import { HomePage } from '../../src/09-useContext/HomePage';
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('Pruebas en <HomePage />', () => {

    const user = {
        id: 1,
        name: 'Fernando'
    }

    test('debe de mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={{user: null}}>
                <HomePage />
            </UserContext.Provider>
        );

        screen.debug();

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');
        console.log(preTag.innerHTML);
    });

    test('debe de mostrar el componente con el usuario', () => {

        render( 
            <UserContext.Provider value={{user: user}}>
                <HomePage />
            </UserContext.Provider>
        );

        // screen.debug();

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toContain(user.id.toString());
        expect(preTag.innerHTML).toContain(user.name);
    });
})