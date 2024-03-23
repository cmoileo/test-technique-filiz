const ContactForm = () => {
    return (
        <form className="contact-form" action="action">
            <div className="wrapper">
                <div className="container">
                    <label className="p-s" htmlFor="Nom">Nom</label>
                    <input className="p-m" type="text" id="Nom" name="Nom" required/>
                </div>
                <div className="container">
                    <label className="p-s" htmlFor="Prénom">Prénom</label>
                    <input className="p-m" type="text" id="Prénom" name="Prénom" required/>
                </div>
            </div>
            <div className="wrapper">
                <div className="container">
                    <label className="p-s" htmlFor="Telephone">N° de téléphone</label>
                    <input className="p-m" type="tel" id="Telephone" name="Telephone" required/>
                </div>
                <div className="container">
                    <label className="p-s" htmlFor="Email">Adresse email</label>
                    <input className="p-m" type="email" id="Email" name="Email" required/>
                </div>
            </div>
            <button className="main-cta" type="submit">Envoyer</button>
        </form>
    );
}

export default ContactForm;