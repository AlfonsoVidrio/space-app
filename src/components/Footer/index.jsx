import styled from "styled-components";

const FooterStyle = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 100px;
    background-color: #04244F;
    padding: 22px;
    box-sizing: border-box;
`

const IconContainer = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    li {
        display: inline-block;
        margin-right: 32px;
    }
`
const TextFooter = styled.p`
    font-size: 1rem;
    color: white;
    margin: 0;
`

export const Footer = () => {
    return (
        <FooterStyle>
            <IconContainer>
                <li>
                    <a href="#">
                        <img src="/img/social-icons/facebook.svg" alt="" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/img/social-icons/twitter.svg" alt="" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/img/social-icons/instagram.svg" alt="" />
                    </a>
                </li>
            </IconContainer>
            <TextFooter>Desarrollado por Alfonso Manuel Vidrio Lizaola.</TextFooter>
        </FooterStyle>
    )
}
