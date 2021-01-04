import React from "react";
import s from "./Header.module.css";

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.logo__wrapper}>Logo</div>
            <div className={s.description}>Socialnet</div>
        </header>
    );
}

export default Header;