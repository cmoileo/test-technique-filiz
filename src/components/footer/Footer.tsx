import ContactForm from "../contactForm/ContactForm.tsx";

const Footer = () => {
    return (
        <footer id="reserver" className="main-footer color-light-gold-bg">
            <div className="left">
                <h2 className="h2">Réservez votre table !</h2>
                <p className="p-m">Vous avez des questions ou des commentaires? N'hésitez pas à nous contacter en remplissant le formulaire ci-dessous. Nous vous répondrons dans les plus brefs délais.</p>
            </div>
            <ContactForm />
        </footer>
    )
}

export default Footer