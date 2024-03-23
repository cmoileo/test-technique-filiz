import React from 'react';

interface MainCtaProps {
    link: string;
    text: string;
}

const MainCta: React.FC<MainCtaProps> = ({link, text }) => {
    return (
        <a className={'main-cta'} href={link}>{text}</a>
    );
}

export default MainCta;