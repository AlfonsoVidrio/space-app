import styled from "styled-components";
import { NavigationItem } from "../NavigationItem";

const ListStyle = styled.ul`
    margin: 0; padding: 0;
    list-style: none;
    
`

export const Sidebar = () => {
    return (
        <aside>
            <nav>
                <ListStyle>
                    <NavigationItem 
                        activeIcon = 'icons/home-activo.png' 
                        inactiveIcon = 'icons/home-inactivo.png'
                        active
                    >
                        Inicio
                    </NavigationItem>
                    <NavigationItem 
                        activeIcon = 'icons/mas-vistas-activo.png' 
                        inactiveIcon = 'icons/mas-vistas-inactivo.png'
                    >
                        Más visitados
                    </NavigationItem>
                    <NavigationItem 
                        activeIcon = 'icons/mas-gusta-activo.png' 
                        inactiveIcon = 'icons/me-gusta-inactivo.png'
                    >
                        Más Me Gusta
                    </NavigationItem>
                    <NavigationItem 
                        activeIcon = 'icons/nuevas-activo.png' 
                        inactiveIcon = 'icons/nuevas-inactivo.png'
                    >
                        Nuevas
                    </NavigationItem>
                    <NavigationItem 
                        activeIcon = 'icons/sorprendeme-activo.png' 
                        inactiveIcon = 'icons/sorprendeme-inactivo.png'
                    >
                        Sorpréndeme
                    </NavigationItem>
                </ListStyle>
            </nav>
        </aside>
    )
}