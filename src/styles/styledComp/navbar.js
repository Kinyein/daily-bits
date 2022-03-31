import styled from "styled-components"

export const NavbarS = styled.nav`
    display: flex;
    padding: 7px;
    margin: 0 0;
    justify-content: space-around;
    background-color: #232E35;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
`
export const ButtonS = styled.button`
    border: none;
    background-color: transparent;
    width: 70px;
    color: #9D9D9D;
    font-size: 30px;

    &:active{   // se le aplica al child que esta dentro 
        color: #C0C0C0;
    }
`
export const NavIcons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`