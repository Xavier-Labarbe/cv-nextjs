function Contact(){
    return(
        <section className="contact section" id="contact">
            <h2 className="section__title">Contactez Moi</h2>
            <span className="section__subtitle">Prenons contact ! :)</span>

            <div className="contact__container container grid">
                <div>
                    <div className="contact__information">
                        <i className="uil uil-phone contact__icon"></i>

                        <div>
                            <h3 className="contact__title">Appeler moi !</h3>
                            <span className="contact__subtile">0695132746</span>
                        </div>
                    </div>

                    <div className="contact__information">
                        <i className="uil uil-envelope contact__icon"></i>

                        <div>
                            <h3 className="contact__title">Mail</h3>
                            <span className="contact__subtile">xlabarbe.cesi@gmail.com</span>
                        </div>
                    </div>

                    <div className="contact__information">
                        <i className="uil uil-map-marker contact__icon"></i>

                        <div>
                            <h3 className="contact__title">Location</h3>
                            <span className="contact__subtile">Bordeaux - 6 Sente des Morutiers - 33300</span>
                        </div>
                    </div>
                </div>

                <form action="" className="contact__form grid">
                    <div className="contact__inputs grid">
                        <div className="contact__content">
                            <label htmlFor="" className="contact__label">Nom</label>
                            <input type="text" className="contact__input" />
                        </div>

                        <div className="contact__content">
                            <label htmlFor="" className="contact__label">Mail</label>
                            <input type="email" className="contact__input" />
                        </div>
                    </div>

                    <div className="contact__content">
                            <label htmlFor="" className="contact__label">Raison</label>
                            <input type="text" className="contact__input" />
                    </div>

                    <div className="contact__content">
                            <label htmlFor="" className="contact__label">Message</label>
                            <textarea name="" id="" cols="0" rows="7" className="contact__input"></textarea>
                    </div>

                    <div>
                         <a href="#" className="button button--flex">
                             Envoyez le message
                             <i className="uil uil-message button__icon"></i>
                         </a>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact