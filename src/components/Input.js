import React from "react"
import styled from "@xstyled/styled-components"

export const InputText = styled.input`
display: flex;
margin: 5vh 0 5vh 0;
border-radius: 15px;
width: 300px;
&:focus{
    outline: none !important;
    border-color: yellow;
}
`

export default function Input({setRequest}){
    return (
        <InputText type="text" placeholder="Search" onChange={(e)=> setRequest(e.target.value)}/>
    )
}