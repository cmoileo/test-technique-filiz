import React from "react";
import ValueCardProps from "../../shared/types/valueCard.type.ts";
const ValueCard: React.FC<ValueCardProps> = ({ icon, alt, title, description }) => {
    return (
        <article className="value-card">
            <img src={icon} alt={alt}/>
            <h3 className="h3 color-dark">{title}</h3>
            <p className="p-m color-dark">{description}</p>
        </article>
    );
}

export default ValueCard;