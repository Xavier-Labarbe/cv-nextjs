import {useState} from "react";

function changeTheme(theme){
    if(theme === "uil uil-moon change-theme"){
        document.body.classList.add('dark-theme')
        return "uil uil-sun change-theme";
    }
    if(theme === "uil uil-sun change-theme"){
        document.body.classList.remove('dark-theme')
        return "uil uil-moon change-theme";
    }
}

function changeStatus(status){
    if(status === "nav__menu"){
        return "nav__menu show-menu";
    }
    if(status === "nav__menu show-menu"){
        return "nav__menu";
    }
}

export default function Header() {
    const [show, setShow] = useState("nav__menu")
    const [theme, setTheme] = useState("uil uil-moon change-theme")

    return (
        <header className={"header"} id={"header"}>
            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"/>
            <nav className={"nav container"}>
                <a href={"#"} className={"nav__logo"}>Xavier Labarbe</a>

                <div className={show}>
                    <ul className={"nav__list grid"}>
                        <li className={"nav__item"}>
                            <a href="#home" className={"nav__link"} onClick={()=> {setShow(changeStatus(show))}}>
                                <i className="uil uil-estate nav__icon"></i>
                                Home
                            </a>
                        </li>
                        <li className={"nav__item"}>
                            <a href="#about" className={"nav__link"} onClick={()=> {setShow(changeStatus(show))}}>
                                <i className="uil uil-user nav__icon"></i>
                                About
                            </a>
                        </li>
                        <li className={"nav__item"}>
                            <a href="#skills" className={"nav__link"} onClick={()=> {setShow(changeStatus(show))}}>
                                <i className="uil uil-file-alt nav__icon"></i>
                                Skills
                            </a>
                        </li>
                        <li className={"nav__item"}>
                            <a href="#services" className={"nav__link"} onClick={()=> {setShow(changeStatus(show))}}>
                                <i className="uil uil-briefcase-alt nav__icon"></i>
                                Services
                            </a>
                        </li>
                        <li className={"nav__item"}>
                            <a href="#portfolio" className={"nav__link"} onClick={()=> {setShow(changeStatus(show))}}>
                                <i className="uil uil-scenery nav__icon"></i>
                                Portfolio
                            </a>
                        </li>
                        <li className={"nav__item"}>
                            <a href="#contact" className={"nav__link"} onClick={()=> {setShow(changeStatus(show))}}>
                                <i className="uil uil-message nav__icon"></i>
                                Contact
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" onClick={()=> {setShow(changeStatus(show))}}></i>
                </div>

                <div className="nav__btns">
                    <i className={theme} onClick={() => setTheme(changeTheme(theme))}></i>

                    <div className={"nav__toggle"} onClick={()=> {setShow(changeStatus(show))}}>
                        <i className="uil uil-apps"></i>
                    </div>
                </div>
            </nav>
        </header>)
}