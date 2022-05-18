import { useState } from "react"

function changeStatus(status){
    if(status === "services__modal"){
        return "services__modal active-modal";
    }
    if(status === "services__modal active-modal"){
        return "services__modal";
    }
}

function Services(){
    const [front, setFront] = useState("services__modal")
    const [back, setBack] = useState("services__modal")
    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">Ce que je peux vous offrir</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                         <i className="uil uil-web-grid services__icon"></i>
                         <h3 className="services__title">Frontend<br/>Développeur Web</h3>
                    </div>

                    <span className="button button--flex button--small button--link services__button" onClick={() => setFront(changeStatus(front))}>
                        Voir plus
                        <i className="uil uil-arrow-right button__icon"></i>
                    </span>

                    <div className={front}>
                        <div className="services__modal-content">
                            <h4 className="services__modal-title">Frontend<br/>Développeur Web</h4>
                            <i className="uil uil-times services__modal-close" onClick={() => setFront(changeStatus(front))}></i>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Je vous aide à concevoir vos interfaces utilisateurs.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Je développe vos pages Web.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Je crée les interations entre les éléments UX.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                         <i className="uil uil-arrow services__icon"></i>
                         <h3 className="services__title">Backend<br/>Développeur Web</h3>
                    </div>

                    <span className="button button--flex button--small button--link services__button" onClick={() => setBack(changeStatus(back))}>
                        Voir plus
                        <i className="uil uil-arrow-right button__icon"></i>
                    </span>

                    <div className={back}>
                        <div className="services__modal-content">
                            <h4 className="services__modal-title">Backend<br/>Développeur Web</h4>
                            <i className="uil uil-times services__modal-close" onClick={() => setBack(changeStatus(back))}></i>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Je vous aide à concevoir la partie serveur de votre application.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Je peux développer vos API ou construire les intéractions avec des API existantes.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Je développe la partie serveur de votre application.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services