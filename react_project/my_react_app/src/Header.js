import './Header.css';
import React from "react";

const Header = ({username}) => (
    <div className={'header'}>
        User {username}
    </div>
);

export default Header