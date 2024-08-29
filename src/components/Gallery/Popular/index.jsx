import styled from "styled-components";
import { Title } from "../../Title";
import photos from './fotos-populares.json';

const PhotoColumn = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const Image = styled.img`
    max-width: 212px;
    border-radius: 20px;
`

const Button = styled.button`
    background-color: transparent;
    color: #FFFFFF;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 1.2rem;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top:16px;
`

export const Popular = () => {
    return (
        <section>
            <Title $align='center'>Populares</Title>
            <PhotoColumn>
                {photos.map(photo => <Image key={photo.id} src={photo.path}/>)}
            </PhotoColumn>
            <Button>Ver más</Button>
        </section>
    )
}
