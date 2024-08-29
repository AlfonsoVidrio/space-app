import { Title } from "../Title";
import { Popular } from "./Popular";
import { Tags } from "./Tags";
import { Image } from "./Image";
import styled from "styled-components";

const GalleryContainer = styled.div`
    display: flex;
`

const FluidSection = styled.section`
    flex-grow: 1;
`

const ImageContainer = styled.section`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 24px;
`

// eslint-disable-next-line react/prop-types
export const Gallery = ({ photos=[], setTag , selectedPhoto , toggleFavorite }) => {


    return (
        <>
            <Tags setTag={setTag}/>
            <GalleryContainer>
                <FluidSection>
                    <Title>Navegue por la galería</Title>
                    <ImageContainer>
                        { photos.map((photo) => <Image 
                            key={photo.id} 
                            photo={photo}
                            handleZoom={selectedPhoto}
                            toggleFavorite={toggleFavorite}
                        />)}
                    </ImageContainer>
                </FluidSection>
                <Popular/>
            </GalleryContainer>
        </>
    )
}
