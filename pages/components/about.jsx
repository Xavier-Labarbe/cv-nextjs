import Image from "next/image";
import about from "/public/img/about.jpg";
export default function About() {
  return (
    <section className={"about section"} id={"about"}>
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">
        Des petites infos bonus sur moi !
      </span>

      <div className="about__container container grid">
        <Image src={about} alt={"about"} className={"about__img"} />

        <div className="about__data">
          <p className="about__description">
            Étudiant à CESI en 5ème année, <br />
            Arbitre de basket, <br /> Joueur de jeux vidéos, <br />
            Vice-Président de l'Asso SysAdmin dans mon centre CESI
          </p>

          <div className="about__info">
            <div>
              <span className="about__info-title">01</span>
              <span className="about__info-name">
                Année <br /> d'experience{" "}
              </span>
            </div>

            <div>
              <span className="about__info-title">+10</span>
              <span className="about__info-name">
                Projets <br /> complétés{" "}
              </span>
            </div>

            <div>
              <span className="about__info-title">2</span>
              <span className="about__info-name">
                Entreprises <br /> m'ont employé
              </span>
            </div>
          </div>

          <div className="about__buttons">
            <a
              download
              href="/pdf/CV_Xavier_Labarbe.pdf"
              className="button button--flex"
            >
              Télécharger CV
              <i className="uil uil-download-alt button__icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
