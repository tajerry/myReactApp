import React from 'react';
import{render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Button from "@mui/material/Button";

describe('Button', () => {
    it('render component Button', () =>{
        render(<Button>Вход</Button>)
    });

    it('render with snapshot', () =>{
        const{asFragment} = render(<Button>Вход</Button>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('render component with text name', () =>{
        render(<Button>Вход</Button>);
        expect(screen.getByText(/Вход/)).toBeInTheDocument();
    });

    it('render multiply component', () =>{
        render(
            <>
                <Button>Вход</Button>
                <Button>Зарегистрироваться</Button>
            </>
        )
        expect(screen.queryAllByRole('button').length).toBe(2);

    })
    it('button is disable', () =>{
        render(<Button disabled>Вход</Button>);
        expect(screen.getByText(/Вход/)).toBeDisabled();
    });
    it('button style color green',  () =>{
        render(<Button style={{color:'green'}} disabled>Вход</Button>);
        expect(screen.getByText(/Вход/)).toHaveStyle({color:'green'});
    });
    it('button click', async () =>{
        const mockHandler = jest.fn();
        render(<Button onClick={mockHandler}>Вход</Button>);
        await userEvent.click(screen.getByText(/Вход/));
        expect(mockHandler).toHaveBeenCalledTimes(1);
    });
})
