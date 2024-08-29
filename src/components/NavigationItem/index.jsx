import styled from "styled-components";

const IteamListStyle = styled.li`
    font-size: 1.5rem;
    margin-bottom: 30px;
    line-height: 28px;
    display: flex;
    align-items: center;
    gap: 16px;
    font-family: ${props => props.$active ? 'GandhiSansBold':'GandhiSansRegular'};
    color: ${props => props.$active ? '#7B78E5' : '#D9D9D9'};
`

// eslint-disable-next-line react/prop-types
export const NavigationItem = ({children, activeIcon, inactiveIcon, active=false}) => {
    return (
    <IteamListStyle $active={active}>
        <img src={active ? activeIcon : inactiveIcon} alt="Icono" />
        {children}
    </IteamListStyle>
    )
}
