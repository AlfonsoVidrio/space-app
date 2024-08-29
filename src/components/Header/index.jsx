import styled from 'styled-components';
import { TextField } from '../TextField';

const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 60px 0;
    img {
        width: 212px;
    }
`

// eslint-disable-next-line react/prop-types
export const Header = ({ setFilter }) => {
    return (
        <HeaderStyle>
            <img src="img/logo.png" alt="Logo de Space App" />
            <TextField setFilter={setFilter}/>
        </HeaderStyle>
    )
}