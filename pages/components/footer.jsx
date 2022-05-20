function Footer(){
    return(
        <footer className="footer">
            <div className="footer__bg">
                <div className="footer__container container grid">
                    <div>
                        <h1 className="footer__title">Xavier</h1>
                        <span className="footer__subtitle">Etudiant en école d'ingénieur à CESI Bordeaux</span>
                    </div>

                    <ul className="footer__links">
                        <li>
                            <a href="#services" className="footer__link">Services</a>
                        </li>

                        <li>
                            <a href="#portfolio" className="footer__link">Portfolio</a>
                        </li>

                        <li>
                            <a href="#contact" className="footer__link">Contact</a>
                        </li>
                    </ul>

                    <div className="footer__socials">
                        <a href="https://github.com/Xavier-Labarbe" className="footer__social">
                            <i className="uil uil-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/xavier-labarbe/" className="footer__social">
                            <i className="uil uil-linkedin"></i>
                        </a>
                        <a href="https://twitter.com/RitoPickX" className="footer__social">
                            <i className="uil uil-twitter"></i>
                        </a>
                    </div>
                </div>
                <p className="footer__copy">&#169;Xavier Labarbe. All right reserved</p>
            </div>
        </footer>
    )
}

export default Footer