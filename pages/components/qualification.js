import {useState} from 'react';



function Qualification(){
    return(
        <section className={"qualification section"}>
            <h2 className="section__title">Qualifications</h2>
            <span className="section__subtitle">Mon parcours</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button button--flex">
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div className="qualification__button button--flex">
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Expérience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className="qualification__content">
                    <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">BAC STI2D</h3>
                                <span className="qualification__subtitle">France, Parentis-en-born - Lycée Saint Exupéry</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">
                                        2015 - 2018
                                    </i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Ingénieur Informatique</h3>
                                <span className="qualification__subtitle">France, Bordeaux - CESI</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">
                                        2018 - 2023
                                    </i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>

                    <div className="qualification__content">
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Stagiaire Développeur Web</h3>
                                <span className="qualification__subtitle">France, Mimizan - Gascogne Papier</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">
                                        Janvier 2021 - Avril 2021
                                    </i>
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Stagiaire Développeur logiciel</h3>
                                <span className="qualification__subtitle">Allemagne, Aix-la-Chapelle - ISRA Vision</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">
                                        Octobre 2021 - Janvier 2022
                                    </i>
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                {/* <span className="qualification__line"></span> */}
                            </div>
                            <div>
                                <h3 className="qualification__title">Développeur Web</h3>
                                <span className="qualification__subtitle">France, Mimizan - Gascogne Papier</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">
                                        Juillet 2022 - Aout 2022
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification