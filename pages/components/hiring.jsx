import Image from "next/image"
import hiring from '/public/img/hiring.png'

function Hiring(){
    return(
        <section className="hiring ssection">
            <div className="hiring__bg">
                <div className="hiring__container container grid">
                    <div className="hring__data">
                        <h2 className="hiring__title">Vous voulez m'embaucher ?</h2>
                        <p className="hiring__description">Contactez moi dès maintenant !</p>
                        <a href="#contact" className="button button--flex button--white">
                            Par ici !
                            <i className="uil uil-message hiring__icon button__icon"></i>
                        </a>
                    </div>

                    <Image src={hiring} alt={"hiring.png"} className="hiring__img"></Image>
                </div>
            </div>
        </section>
    )
}

export default Hiring