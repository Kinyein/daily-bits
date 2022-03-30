import styled from "styled-components";

export const ProgressContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 20px;
`
export const Health = styled.p`
    color: #fff;
    display: flex;
    align-items: center;
    gap: 5px;
`
export const ButtonClose = styled.button`
    background: transparent;
    border: none;
    font-size: 20px;
    padding: 8px;
    display: flex;
    align-items: center;
`
export const Question = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    gap: 16px;
    color: #fff;
    margin: 32px 16px 60px 16px;
`
export const ImgQuestion = styled.img`
    width: 75px;
`
export const AnswersForm = styled.form`
    display: flex;
    flex-direction: column; 
    margin: 16px;
    gap: 16px;
`
export const Answer = styled.label`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 13px;
    height: 100%;
    border: 2px solid #fff;
    border-radius: 4px;
    color: #fff;
`
export const ButtonComprobar = styled.button`
    padding: 13px;
    background-color: #6b47dc;
    font-family: 'Rubik' ,sans-serif;
    font-weight: 500;
    font-size: 14px;
    border: none;
    border-radius: 16px;
    color: #fff;
`