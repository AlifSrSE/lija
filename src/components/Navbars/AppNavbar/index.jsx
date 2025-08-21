/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import {Fragment} from "react";

const Navbar = ({links, navbarRef, theme, logoTheme, container}) => {
    const goToSection = (e, link) => {
        if (link == "#0") e.preventDefault();

        const section = document.querySelector(`[data-scroll-index="${e.target.dataset.scrollNav}"]`);
        if (section) {
            section.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
    }

    const dropdownHover = (e) => {
        const dropdownItem = e.target.tagName === 'SPAN' ? e.target.parentElement : e.target;
        const dropdownMenu = dropdownItem.querySelector('.dropdown-menu');
        if (dropdownMenu) dropdownMenu.classList.add('show');
    }

    const dropdownLeave = () => {
        const openedDropdown = document.querySelector('.navbar .dropdown-menu.show');
        if (openedDropdown) openedDropdown.classList.remove('show');
    }

    const sideDropdownHover = (e) => {
        const dropdownItem = e.target.tagName === 'SPAN' ? e.target.parentElement : e.target;
        const dropdownSide = dropdownItem.querySelector('.dropdown-side');
        if (dropdownSide) dropdownSide.classList.add('show');
    }

    const sideDropdownLeave = () => {
        const openedSideDropdown = document.querySelector('.navbar .dropdown-side.show');
        if (openedSideDropdown) openedSideDropdown.classList.remove('show');
    }

    return (
        <nav className={`navbar navbar-expand-lg ${theme}`} ref={navbarRef}>
            <div className={`container${container === 'nft-market' ? '-xxl' : ''}`}>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Link className="navbar-brand" href="/">
                        <div className="logo">
                            {logoTheme === 'dark' && <img src="img/logo-dark.png" alt=""/>}
                            {logoTheme === 'light' && <img src="img/logo-light.png" alt=""/>}
                            {!logoTheme && <img src="img/logo-light.png" alt=""/>}
                        </div>
                    </Link>
                    <ul className="navbar-nav">
                        {
                            links && links.length && links.map((link, idx) => (
                                // <li className="nav-item" key={idx}>
                                //     <a className="nav-link" href={link.href} data-scroll-nav={idx}
                                //        onClick={e => goToSection(e, link.href)}>{link.name}</a>
                                // </li>
                                <li
                                    key={idx}
                                    className={link?.sub?.length ? "nav-item dropdown" : "nav-item"}
                                    onMouseMove={(e) => link?.sub?.length? dropdownHover(e) : null}
                                    onMouseLeave={(e) => link?.sub?.length? dropdownLeave(e) : null}
                                >
                                    {link?.sub?.length ? (
                                        <Fragment>
                                            <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {link?.name}
                                            </span>
                                            <ul className="dropdown-menu">
                                                {link?.sub?.map((item, index) => (
                                                    <li key={index}><Link href={item.href}><a className="dropdown-item">{item.name}</a></Link></li>
                                                ))}
                                            </ul>
                                        </Fragment>
                                    ) : (
                                        <a
                                            className="nav-link"
                                            href={link.href}
                                            data-scroll-nav={idx}
                                            onClick={e => goToSection(e, link.href)}
                                        >
                                            {link.name}
                                        </a>
                                    )}
                                </li>
                            ))
                        }
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href={"#"}>Join Now</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;