const ContactForm = () => {
    return (
        <form action="action">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message" />
            <button type="submit">Send</button>
        </form>
    );
}

export default ContactForm;