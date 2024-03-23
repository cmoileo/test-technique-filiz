import ImageAboutUs from "../../../public/images/image-about-us.png"

const Section1 = () => {
    return (
        <section id="qui-sommes-nous" className="home_section-1 color-light-gold-bg">
            <div className="left">
                <img src={ImageAboutUs} alt="Une femme tenant une tasse de café dans ses mains"/>
            </div>
            <div className="right">
                <h2 className="h2">Qui sommes-nous ? </h2>
                <p className="p-l">Bienvenue chez Café Neko, l'endroit où le café et les chats se rencontrent pour créer une expérience unique en son genre.</p>
                <p className="p-l">Chez Café Neko, nous sommes passionnés par deux choses : le café de qualité et le bien-être des chats. Fondé par des amoureux des félins et des aficionados du café, Café Neko est bien plus qu'un simple café. C'est un refuge pour les amoureux des chats, un havre de paix où l'on peut savourer une bonne tasse de café tout en câlinant nos adorables résidents à quatre pattes.</p>
            </div>
        </section>
    )
}

export default Section1