import { createSelector } from 'reselect';
import { State } from '../store';

const selectDirectory = (state: State) => state.directory;

export const selectDirectorySections = createSelector(
    [selectDirectory],
    (directory) => directory.sections
);
