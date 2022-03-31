import styled from "styled-components";

export const SessionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    margin: 32px 16px 80px 16px;
`
export const SessionLogo = styled.img`
    width: 80px;
`
export const SessionTitle = styled.h1`
    color: #fff;
    font-size: 32px;
`
export const ButtonLoginGoogle = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    background-color: #ef4565;
    border-radius: 4px;
    border: none;
    padding: 12px 70px;
    color: #fff;
    font-size: 16px;

    @media screen and (max-width: 700px){
        width: 100%;
    }
`
export const DivLine = styled.hr`
    width: 20em;
    height: 2px;
    background-color: #94A1B2;
    border: none;

    @media screen and (max-width: 700px){
        width: 100%;
    }
`
export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    width: 100%;
`
export const FormSession = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    width: 100%;
`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: #fff;
    width: 22em;

    @media screen and (max-width: 700px){
        width: 100%;
    }
`
export const Input = styled.input`
    padding: 12px;
    border-radius: 4px;
    border: none;
    
`
export const SessionButton = styled.button`
    cursor: pointer;
    background-color: #232e35;
    border-radius: 4px;
    border: none;
    padding: 12px 70px;
    color: #fff;
    font-size: 16px;

    @media screen and (max-width: 700px){
        width: 100%;
    }
`
export const ChangeSession = styled.p`
    color: #fff;
`