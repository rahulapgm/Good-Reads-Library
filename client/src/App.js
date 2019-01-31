import React, { Component } from 'react';
import AddBookComponent from './components/AddBookComponent';
import BookGalleryComponent from './components/BookGalleryComponent';
import AddEditFormComponent from './components/AddEditFormComponent';
import {updateBookItem, setUpdateFormVisibility, setUpdateItem} from './actions';
import { getBookList } from './actions';
import {connect} from 'react-redux';
import './App.css';

//App Component starts

class App extends Component { 
    componentDidMount(){
        this.props.getBookList();
    }
    
    render() {
        let blurEffect= this.props.showAddForm ? {filter: "blur(5px)", pointerEvents:"none"} : {}
        return (
          <div className="App">
            <h2>Good Reads Library</h2>
            <AddBookComponent />
            <div style={blurEffect}>
                <BookGalleryComponent />
            </div>
            {this.props.updateFormVisibility ? 
                <AddEditFormComponent bookItem={this.props.updateItem} 
                                      updateBookItem={this.props.updateBookItem} 
                                      setFormVisibility={this.props.setUpdateFormVisibility}
                                      formType="EDIT"
                                      />: false
            }
          </div>
        );
      }
}

function mapDispatchToProps(dispatch, ownProps){
    return{
        getBookList: () => {
            dispatch(getBookList())
        },
        setUpdateItem: (bookObj) => {
            dispatch(setUpdateItem(bookObj))
        },
        setUpdateFormVisibility: (visibilityInd) => {
            dispatch(setUpdateFormVisibility(visibilityInd))
        },updateBookItem: (bookObj) => {
            dispatch(updateBookItem(bookObj))
        },
    }
}

function mapStateToProps(state){
    return{
        showAddForm:state.addFormVisibility,
        updateFormVisibility:state.updateFormVisibility,
        updateItem:state.updateItem,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);