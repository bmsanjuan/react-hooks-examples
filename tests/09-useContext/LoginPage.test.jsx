import { screen, render, fireEvent } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe('Pruebas en <LoginPage />', () => {

    const user = {
        id: 1,
        name: 'Fernando'
    }


    test('debe de mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage />
            </UserContext.Provider>
        )

        screen.debug();

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');

    })


    test('debe de llamar el setUser cuando se hace click en el boton', () => {

        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={{user: null, setUser: setUserMock}}>
                <LoginPage />
            </UserContext.Provider>
        )

        screen.debug();

        const userButton = screen.getByRole('button', {name: 'Establecer usuario'});
        fireEvent.click(userButton);

        expect(setUserMock).toHaveBeenCalledWith({
            id: 598,
            name: 'Tomiris Martin',
            mail: 'tmsanjuan@google.com'
        });

    })

});