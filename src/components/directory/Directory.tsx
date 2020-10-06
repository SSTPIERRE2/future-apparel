import React from 'react';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { State } from '../../redux/store';
import MenuItem from '../menu-item/MenuItem';
import './Directory.scss';
import { DirectorySection } from '../../redux/directory/directory.reducer';

const Directory = () => {
    const { sections } = useSelector(
        createStructuredSelector<
            State,
            {
                sections: DirectorySection[];
            }
        >({
            sections: selectDirectorySections,
        })
    );

    return (
        <div className="directory-menu">
            {sections.map(({ id, ...restProps }) => (
                <MenuItem key={id} {...restProps} />
            ))}
        </div>
    );
};

export default Directory;
