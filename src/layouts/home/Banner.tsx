import CatHero from "../../../public/images/cat-hero-section.png"
import MainCta from "../../components/mainCta/MainCta.tsx";

const Banner = () => {
    return (
        <section className="banner-home">
            <div className="left">
                <div className="wrapper">
                    <h1 className="h1">Bienvenue <br/> chez Café Neko</h1>
                    <h4 className="h4">L'endroit où le café rencontre les ronronnements</h4>
                    <div className="p-s">Bienvenue dans notre univers où chaque tasse de café est accompagnée d'une dose
                        d'amour félin.
                    </div>
                </div>
                <MainCta link="#reserver" text="Découvrir notre menu"/>
            </div>
            <div className="right">
                <div className="blog-bg color-light-gold-bg"></div>
                <img src={CatHero} alt="Un chat regardant une tasse"/>
            </div>
        </section>
    )
}


export default Banner