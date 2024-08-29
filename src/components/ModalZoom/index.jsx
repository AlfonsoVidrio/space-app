import styled from "styled-components"
import { Image } from "../Gallery/Image";
import { ButtonIcon } from "../ButtonIcon";

const Overlay = styled.div`
    background-color: rgba(0,0,0,0.7);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

const DialogStyle = styled.dialog`
    position: fixed;
    top: 50%;
    left: 50%; 
    transform: translate(-50%, -50%); 
    background: transparent;
    padding: 0;
    border: 0;
    width: 60%;
    display: flex;
    justify-content: center;

    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`;

// eslint-disable-next-line react/prop-types
export const ModalZoom = ({ photo, closeModal, toggleFavorite}) => {
    return (
        <>
            {photo && <>
                <Overlay />
                <DialogStyle open={!!photo} onClose={closeModal} >
                    <Image photo={photo} expanded={true} toggleFavorite={toggleFavorite}/>
                    <form method='dialog'>
                        <ButtonIcon formMethod="dialog">
                            <img src="/icons/cerrar.png" alt="Icono de cerrar" />
                        </ButtonIcon>
                    </form>
                </DialogStyle>
            </>}
        </>
    )
}
