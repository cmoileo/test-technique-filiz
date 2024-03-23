import Icon1 from "../../../public/icons/coffee-icon.svg"
import Icon2 from "../../../public/icons/cat-icon.svg"
import Icon3 from "../../../public/icons/plant-icon.svg"
import ValueCardProps from "../../shared/types/valueCard.type.ts";
import ValueCard from "../../components/valueCard/ValueCard.tsx";

const Section2 = () => {
    const valueCards: ValueCardProps[] = [
        {
            icon: Icon1,
            alt: "Coffee icon",
            title: "Passionné de Café",
            description: "Notre équipe est passionnée par l'art de préparer le café. Chaque grain est soigneusement sélectionné pour offrir une expérience gustative exceptionnelle. Nous nous engageons à vous offrir des saveurs riches et uniques dans chaque tasse."
        },
        {
            icon: Icon2,
            alt: "Cat icon",
            title: "Bien-être des Chats",
            description: "Le bonheur et le bien-être de nos amis félins sont au cœur de notre philosophie. Nous offrons un environnement sûr et confortable à nos chats résidents, où ils peuvent interagir avec nos clients et recevoir toute l'attention et l'affection qu'ils méritent."
        },
        {
            icon: Icon3,
            alt: "Plant icon",
            title: "Engagement Environnemental",
            description: "Nous sommes soucieux de l'impact environnemental de notre entreprise. C'est pourquoi nous nous engageons à utiliser des produits respectueux de l'environnement et à promouvoir des pratiques durables dans tous les aspects de notre activité, de la sélection des fournisseurs à la gestion des déchets."
        }
    ]
    return (
        <section id="nos-valeurs" className="home_section-2">
            <h2 className="h2 color-main-green">Nos valeurs</h2>
            <div className="wrapper">
                {valueCards.map((valueCard, index) => (
                    <ValueCard  key={index} {...valueCard} />
                ))}
            </div>
        </section>
    )
}

export default Section2