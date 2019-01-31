import React from 'react';
import {connect} from 'react-redux';
import {searchBook} from '../actions';
import './css/search.css'; 

class SearchComponent extends React.Component {
    
       
    render() {
    const {searchBook, search} = this.props;
    let blurEffect= this.props.updateFormVisibility ? {filter: "blur(5px)", pointerEvents:"none"} : {}
    return (
    <div style={blurEffect}>
        <input
          className="searchBox"
          placeholder = "Enter book name to search"
          onChange={(e) => searchBook(e.target.value)}
          value={search} />
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {value: state.search, updateFormVisibility:state.updateFormVisibility };
}

function mapDispatchToProps(dispatch) {
  return {
      searchBook: (searchVal) => 
         dispatch(searchBook(searchVal))
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);

 