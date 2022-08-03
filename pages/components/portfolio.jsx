import Image from "next/image";
import cvLight from "/public/img/cv-next-light.png";
function Portfolio() {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Mes travaux récents</span>

      <div className="portfolio__container container">
        <div>
          <div className="portfolio__content grid">
            <Image src={cvLight} alt="cv-next" className="portfolio__img" />
            <div className="portfolio__data">
              <h3 className="portfolio__title">Mon CV en Next.js</h3>
              <p className="portfolio__description">
                Site Web disponible pour tout appareil avec une interface
                utilisateur dynamique. Ce projet permet à de posssibles futurs
                collaborateurs de visionner mon CV plus facilement.
              </p>

              <a
                href="#"
                className="button button--flex button--small portfolio__button"
              >
                Démo
                <i className="uil uil-arrow-right button__icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
