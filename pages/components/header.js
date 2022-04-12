import * as Unicons from "@iconscout/react-unicons";
import {useEffect, useRef} from "react";
import {render} from "react-dom";

export default function Header() {
    const navMenu = useRef(),
        navToggle = useRef(),
        navClose = useRef()


    return (
        <header className={"header"} id={"header"}>
            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"/>
            <nav className={"nav container"}>
                <a href={"#"} className={"nav__logo"}>Xavier Labarbe</a>

                <div className={"nav__menu"} ref={navMenu}>
                    <ul className={"nav__list grid"}>
                        <li className={"nav__item"}>
                            <a href="#home" className={"nav__link"}>
                                <Unicons.UilEstate className={"nav__icon"}/>
                                Home
                            </a>
                        </li>
                        <li className={"nav__item"}>
                            <a href="#about" className={"nav__link"}>
                                <Unicons.UilUser className={"nav__icon"}/>
                                About
                            </a>
                        </li>
                        <li className={"nav__item"}>
                            <a href="#skills" className={"nav__link"}>
                                <Unicons.UilFileAlt className={"nav__icon"}/>
                                Skills
                            </a>
                        </li>
                        <li className={"nav__item"}>
                            <a href="#services" className={"nav__link"}>
                                <Unicons.UilBriefcaseAlt className={"nav__icon"}/>
                                Services
                            </a>
                        </li>
                        <li className={"nav__item"}>
                            <a href="#portfolio" className={"nav__link"}>
                                <Unicons.UilScenery className={"nav__icon"}/>
                                Portfolio
                            </a>
                        </li>
                        <li className={"nav__item"}>
                            <a href="#contact" className={"nav__link"}>
                                <Unicons.UilMessage className={"nav__icon"}/>
                                Contact me
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" ref={navClose}></i>
                </div>

                <div className="navv__btns">
                    <div className={"nav__toggle"} ref={navToggle}>
                        <Unicons.UilApps/>
                    </div>
                </div>
            </nav>
        </header>)
}