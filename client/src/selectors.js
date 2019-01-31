import {createSelector} from 'reselect';
//import {fromJS} from 'immutable';

const makeSelectBookLibrary = (state) => state;

const makeSelectBookList  = () => createSelector(
    makeSelectBookLibrary,
    (substate) => {
        
        const search = substate.search;
        return search.length<1
        ? substate.bookList
        : substate.bookList.filter((obj) => {
            return obj.bookName.toLowerCase().includes(search.toLowerCase());
        });
    }
);

export default makeSelectBookLibrary;

export{
    makeSelectBookList
};
