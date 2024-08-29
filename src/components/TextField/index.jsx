import { styled } from "styled-components"
import search from './search.png'

const ContainerStyles = styled.div`
    position: relative;
    display: inline-block;
`;

const TextFieldStyles = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    outline: none;
`

const SearchIcon = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px !important;
    height: 38px;
`;

// eslint-disable-next-line react/prop-types
export const TextField = ({setFilter}) => {
        
    return (
        <ContainerStyles>
            <TextFieldStyles onChange={(event) => {setFilter(event.target.value) }} type="text" placeholder="¿Qué estás buscando?"/>
            <SearchIcon src={search} alt="ícono de lupa" />
        </ContainerStyles>
    )
}

