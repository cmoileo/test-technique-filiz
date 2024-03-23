import { useState } from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
    const { register, handleSubmit, formState } = useForm({ defaultValues: {} });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const { errors } = formState;

    const onSubmit = () => {
        setIsFormSubmitted(true);
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)} action="action">
            <div className="wrapper">
                <div className="container">
                    <label className="p-s" htmlFor="lastName">Nom de famille</label>
                    <input className="p-m" type="text" id="lastName" {...register('lastName', { required: 'Le nom de famille est requis' })} aria-label="Nom de famille" />
                    {errors?.lastName && <span className="error">{errors.lastName.message}</span>}
                </div>
                <div className="container">
                    <label className="p-s" htmlFor="firstName">Prénom</label>
                    <input className="p-m" type="text" id="firstName" {...register('firstName', { required: 'Le prénom est requis' })} aria-label="Prénom" />
                    {errors?.firstName && <span className="error">{errors.firstName.message}</span>}
                </div>
            </div>
            <div className="wrapper">
                <div className="container">
                    <label className="p-s" htmlFor="phoneNumber">Numéro de téléphone</label>
                    <input className="p-m" type="tel" id="phoneNumber" {...register('phoneNumber', { required: 'Le numéro de téléphone est requis', pattern: { value: /^0[1-9]([-. ]?[0-9]{2}){4}$/, message: 'Le numéro de téléphone est invalide' } })} />
                    {errors?.phoneNumber && <span className="error">{errors.phoneNumber.message}</span>}
                </div>
                <div className="container">
                    <label className="p-s" htmlFor="email">Adresse e-mail</label>
                    <input className="p-m" type="email" id="email" {...register('email', { required: 'L\'adresse e-mail est requise', pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'L\'adresse e-mail est invalide' } })} />
                    {errors?.email && <span className="error">{errors.email.message}</span>}
                </div>
            </div>
            {isFormSubmitted && !errors?.lastName && !errors?.firstName && !errors?.phoneNumber && !errors?.email && (
                <p className="p-l color-main-green success-msg">Formulaire soumis avec succès !</p>
            )}
            <button className="main-cta" type="submit" aria-label="Envoyer le formulaire">Envoyer</button>
        </form>
    );
};

export default ContactForm;
