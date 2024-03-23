import React from "react";
import ValueCardProps from "../../shared/types/valueCard.type.ts";
const ValueCard: React.FC<ValueCardProps> = ({ icon, alt, title, description }) => {
    return (
        <article className="value-card">
            <img src={icon} alt={alt}/>
            <h4 className="h4">{title}</h4>
            <p className="p-m">{description}</p>
        </article>
    );
}

export default ValueCard;