import LogoHeader from "../../../public/images/logo.svg"

const Header = () => {
    return (
        <header className="main-header">
            <img id="website-logo" src={LogoHeader} alt="Website Logo"/>
            <nav>
                <a href="#qui-sommes-nous" className="li color-dark">Qui sommes-nous ?</a>
                <a href="#nos-valeurs" className="li color-dark">Nos valeurs</a>
                <a href="#reserver" className="li color-main-green">Réservez !</a>
            </nav>
            <svg id='burger-icon' width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M3 7.58105C3 7.16684 3.33579 6.83105 3.75 6.83105H20.25C20.6642 6.83105 21 7.16684 21 7.58105C21 7.99527 20.6642 8.33105 20.25 8.33105H3.75C3.33579 8.33105 3 7.99527 3 7.58105Z"
                      fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M3 12.0811C3 11.6668 3.33579 11.3311 3.75 11.3311H20.25C20.6642 11.3311 21 11.6668 21 12.0811C21 12.4953 20.6642 12.8311 20.25 12.8311H3.75C3.33579 12.8311 3 12.4953 3 12.0811Z"
                      fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M3 16.5811C3 16.1668 3.33579 15.8311 3.75 15.8311H20.25C20.6642 15.8311 21 16.1668 21 16.5811C21 16.9953 20.6642 17.3311 20.25 17.3311H3.75C3.33579 17.3311 3 16.9953 3 16.5811Z"
                      fill="black"/>
            </svg>
        </header>
    )
}

export default Header