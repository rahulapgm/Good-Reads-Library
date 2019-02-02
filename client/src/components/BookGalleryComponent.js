import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import BookTileComponent from './BookTileComponent';
import SearchComponent from './SearchComponent';
import {makeSelectBookList} from '../selectors';
import './css/bookgallery.css';
const BookGalleryComponent = (props) => {
    return(
        <React.Fragment>
        <SearchComponent {...props}/>
        <div className="bookGallery">
            {props.bookList.map(bookItem => 
                    <BookTileComponent key={bookItem.id} bookItem={bookItem}/>
            )}
        </div>
        </React.Fragment>
    )
}
const mapStateToProps = createStructuredSelector({bookList: makeSelectBookList()});

export default connect(mapStateToProps,null)(BookGalleryComponent)