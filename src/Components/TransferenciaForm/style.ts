import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius:5px;

    @media (min-width: 768px) {
        //flex-direction: row;
        justify-content: space-between;
    }

`
export const Group = styled.div`
    display: inline-flex;
    flex-direction: column;
    justify-content:space-between;
    margin: 10px;
    @media (min-width: 768px) {
        flex-direction: row;
    }

    & > * {
        margin-bottom: 10px;

        @media (min-width: 768px) {
            margin-bottom: 0;
            margin-right: 10px;
        }
    }
`

export const Label = styled.label`
    font-weight: bold;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-bottom: 5px;
`

export const Input = styled.input`
    padding: 5px;
    border: 1px solid #ccc;
`
export const Button = styled.button`
    padding: 15px 20px;
    background-color: #007bff;
    color: #fff;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    border: none;
    border-radius: 5px;
    margin-top: 5px;
    cursor: pointer;
`