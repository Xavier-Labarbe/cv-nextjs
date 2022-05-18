import {useState} from "react";

function changeStatus(status){
    if(status === "skills__content skills__close"){
        return "skills__content skills__open";
    }
    if(status === "skills__content skills__open"){
        return "skills__content skills__close";
    }
}

export default function Skills() {
    const [front, setFront] = useState("skills__content skills__open");
    const [back, setBack] = useState("skills__content skills__close");
    return (
        <section className={"skills section"} id={"skills"}>
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical</span>

            <div className="skills_container container grid">
                <div>
                    <div className={front} onClick={()=> {setFront(changeStatus(front))}}>
                        <div className="skills__header">
                            <i className={"uil uil-brackets-curly skills__icon"}/>

                            <div>
                                <h1 className="skills__title">Frontend developper</h1>
                                <span className="skills__subtitle">More than 4 years</span>
                            </div>

                            <i className={"uil uil-angle-down skills__arrow"}/>
                        </div>

                        <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">HTML</h3>
                                    <span className="skills__number">90%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__html"></span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">CSS</h3>
                                    <span className="skills__number">80%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__css"></span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Javascript</h3>
                                    <span className="skills__number">90%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__javascript"></span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">React</h3>
                                    <span className="skills__number">60%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__react"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={back} onClick={()=> {setBack(changeStatus(back))}}>
                        <div className="skills__header">
                            <i className={"uil uil-server-network skills__icon"}/>

                            <div>
                                <h1 className="skills__title">Backend developper</h1>
                                <span className="skills__subtitle">More than 4 years</span>
                            </div>

                            <i className={"uil uil-angle-down skills__arrow"}/>
                        </div>

                        <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">PHP</h3>
                                    <span className="skills__number">90%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__php"></span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Node.js</h3>
                                    <span className="skills__number">70%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__node"></span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Laravel</h3>
                                    <span className="skills__number">60%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__laravel"></span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">CodeIgniter</h3>
                                    <span className="skills__number">60%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__codeigniter"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}