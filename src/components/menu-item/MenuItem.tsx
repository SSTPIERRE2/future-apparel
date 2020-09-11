import React from 'react';
import './MenuItem.scss';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface MenuItemProps extends RouteComponentProps {
    title: string;
    imageUrl: string;
    size?: string;
    linkUrl: string;
}

const MenuItem = ({
    title,
    imageUrl,
    size,
    history,
    linkUrl,
    match,
}: MenuItemProps) => (
    <div
        className={`${size} menu-item`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div
            className="background-image"
            style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);
