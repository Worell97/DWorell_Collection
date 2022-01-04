import { StyledBurger } from "./styles";
import { bool, func } from 'prop-types';

function BurgerButton({ open, setOpen }){
    return(
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div/>
            <div/>
            <div/>
        </StyledBurger>
    )
}

BurgerButton.propTypes ={
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default BurgerButton;