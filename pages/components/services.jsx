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
    const [bdd, setBdd] = useState("services__modal")
    const [software, setSoftware] = useState("services__modal")
    const [project, setProject] = useState("services__modal")
    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">Ce que je peux vous offrir !</span>

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

                <div className="services__content">
                    <div>
                         <i className="uil uil-database services__icon"></i>
                         <h3 className="services__title">Base de données<br/>Conception</h3>
                    </div>

                    <span className="button button--flex button--small button--link services__button" onClick={() => setBdd(changeStatus(bdd))}>
                        Voir plus
                        <i className="uil uil-arrow-right button__icon"></i>
                    </span>

                    <div className={bdd}>
                        <div className="services__modal-content">
                            <h4 className="services__modal-title">Base de données<br/>Conception</h4>
                            <i className="uil uil-times services__modal-close" onClick={() => setBdd(changeStatus(bdd))}></i>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Je vous aide à concevoir le modèle de votre base de données.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Je développe votre base de donnée en ORM ou en SQL.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Je mets votre base de données en production.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Je crée le lien de votre base de donnée avec votre application.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                         <i className="uil uil-windows services__icon"></i>
                         <h3 className="services__title">Logiciel .NET<br/>C# Développeur</h3>
                    </div>

                    <span className="button button--flex button--small button--link services__button" onClick={() => setSoftware(changeStatus(software))}>
                        Voir plus
                        <i className="uil uil-arrow-right button__icon"></i>
                    </span>

                    <div className={software}>
                        <div className="services__modal-content">
                            <h4 className="services__modal-title">Logiciel .NET<br/>C# Développeur</h4>
                            <i className="uil uil-times services__modal-close" onClick={() => setSoftware(changeStatus(software))}></i>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Je vous aide à concevoir votre outil/logiciel en C#.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Je développe votre logiciel à l'aide du framework .NET.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Je mets votre logiciel en production.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                         <i className="uil uil-cloud services__icon"></i>
                         <h3 className="services__title">Gestion de projet<br/>Chef de Projet</h3>
                    </div>

                    <span className="button button--flex button--small button--link services__button" onClick={() => setProject(changeStatus(project))}>
                        Voir plus
                        <i className="uil uil-arrow-right button__icon"></i>
                    </span>

                    <div className={project}>
                        <div className="services__modal-content">
                            <h4 className="services__modal-title">Gestion de projet<br/>Chef de Projet</h4>
                            <i className="uil uil-times services__modal-close" onClick={() => setProject(changeStatus(project))}></i>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Je vous aide à lancer votre projet digital en identifiants vos besoins et vos contraintes.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Je définis les différents éléments de votre projets à réaliser et nous planifions ensemble des jalons.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Je conduis le projets à l'aide de la métodologie AGILE en fesant des points réguliers avec les collaborateurs.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Je vous fournis des points réguliers afin de vérifier que le projet s'oriente dans la bonne direction en vous montrant des résultats.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>J'organise la mise en production et les tests du projet développé ensemble.</p>
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