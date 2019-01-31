import React from 'react';
import {connect} from 'react-redux';
import {addBook, setAddFormVisibility} from '../actions';
import "./css/addbook.css";
import AddEditFormComponent from './AddEditFormComponent';


class AddBookComponent extends React.Component {
        
    getBookObj = (bookName,bookAuthor, yearOfRelease,bookDesc,availabiltyInd) => {
        return {
            id:Math.random(),
            bookName,
            bookAuthor,
            yearOfRelease,
            bookDesc,
            availabiltyInd
        }
    }
    render(){
        let blurEffect= this.props.updateFormVisibility ? {filter: "blur(5px)", pointerEvents:"none"} : {}
        return(
            <div>
                <button type="button"
                    className="addPlusSignBtn"
                    style={blurEffect}
                    title="Add a Book"
                    onClick={(e)=>{
                        this.props.setAddFormVisibility(!this.props.showAddForm)
                    }}>+</button>
                    
                {this.props.showAddForm ? 
                    <AddEditFormComponent addBookItem={this.props.addBookItem} 
                                          setFormVisibility={this.props.setAddFormVisibility}
                                          getBookObj={this.getBookObj}
                                          formType="ADD"
                                          />: <React.Fragment></React.Fragment>
                }
            </div>
        )
    }
};


function mapDispatchToProps(dispatch, ownProps){
    return{
        addBookItem: (bookObj) => {
            dispatch(addBook(bookObj))
        },
        setAddFormVisibility: (visibilityInd) => {
            dispatch(setAddFormVisibility(visibilityInd))
        }
    }    
}

function mapStateToProps(state){
    return{
        showAddForm:state.addFormVisibility,
        updateFormVisibility:state.updateFormVisibility
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AddBookComponent);

