/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { ButtonIcon } from '../../ButtonIcon';

const Figure = styled.figure`
    width: ${ props => props.$expanded ? '90%' : '370px' };
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }

    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: #FFFFFF;
        box-sizing: border-box;
        padding: 12px;
        h3 {
            font-family: 'GandhiSansBold';
        }
        h4 {
            flex-grow: 1;
        }
        h3, h4 {
            margin: 0;
            font-size: 1rem;
        }
    }
`
const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Image = ({photo, expanded = false, handleZoom, toggleFavorite}) => {

    const favoriteIcon = photo.favorite ? "/icons/favorito-activo.png" : "/icons/favorito.png"

    return (
        <Figure $expanded={expanded} id={`foto-${photo.id}`}>
            <img src={photo.path} alt={photo.alt} />
            <figcaption>
                <h3>{photo.title}</h3>
                <Footer>
                    <h4>{photo.source}</h4>
                    <ButtonIcon onClick={() => toggleFavorite(photo)}>
                        <img src={favoriteIcon} alt="Icono de favorito" />
                    </ButtonIcon>
                    {!expanded && <ButtonIcon aria-hidden={expanded} onClick={() => handleZoom(photo)}>
                        <img src="/icons/expandir.png" alt="Icono de expandir" />
                    </ButtonIcon>}
                </Footer>
            </figcaption>
        </Figure>
    )
}
