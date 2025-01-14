import { useState } from 'react';
import style from './style.module.css';

import { faShoppingCart, faTruck, faUser } from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/img/logo.png';
import CustomLi from '../CustomLi/CustomLi';

import menu from '../../utils/menu.json';
import SwiperCont from '../Swiper/SwiperCont';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={style.nav_container}>
            <SwiperCont />
            <div className={style.navbar}>
                <div className={style.nav_col}>
                    <div className={style.hamburger} onClick={toggleMenu}>
                        {isOpen ? '✖' : '☰'}
                    </div>
                    <div className={style.logo}>
                        <img className={style.img_swiper} src={logo} alt="Studio F" />
                    </div>
                    <div className={style.menu_items}>
                        MUJER | HOMBRE
                    </div>
                </div>
                <div className={style.nav_col}>
                    <ul className={style.secondaryNav_menu}>
                        <CustomLi title={"Iniciar Sesión"} icon={faUser} isBarra={true} />
                        <CustomLi title={""} icon={faTruck} isBarra={true} />
                        <CustomLi title={"Carrito"} icon={faShoppingCart} isBarra={false} />
                    </ul>
                </div>
            </div>

            {isOpen && (
                <div className={style.dropdown_menu}>
                    <div className={style.container_menu_items_dos}>
                        <div className={style.menu_items_dos}>
                            MUJER | HOMBRE
                        </div>
                        <div className={style.cerrar} onClick={() => setIsOpen(!isOpen)}>{'✖'}</div>
                    </div>
                    {menu.mainItems.map((item, index) => (
                        <div key={index} className={style.dropdown_item}>
                            {item.label}

                            {item.submenu && (
                                <>
                                    <div className={style.dropdown_submenu}>
                                        <p>
                                            {item.label}
                                            <hr />
                                        </p>
                                        {item.submenu.map((subItem, subIndex) => (
                                            <div key={subIndex} className={style.dropdown_submenu_item}>
                                                {subItem}
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            )}

        </nav>
    )
}

export default NavBar