import styled from 'styled-components';

const FigureStyle = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
    background-size: cover;
`

const TitleStyle = styled.h1`
    font-weight: 400;
    font-size: 2.5rem;
    line-height: 48px;
    color: #FFFFFF;
    max-width: 300px;
    padding: 0 64px;
`

// eslint-disable-next-line react/prop-types
export const Banner = ({text, backgroundImage}) => {
    return (
        <FigureStyle $backgroundImage={backgroundImage}>
            <TitleStyle>{text}</TitleStyle>
        </FigureStyle>
    )
}