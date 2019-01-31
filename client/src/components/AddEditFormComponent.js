import React from 'react';
import "./css/addbook.css";

const AddEditFormComponent = (props) => {
    let bookName="";
    let yearOfRelease="";
    let bookAuthor="";
    let id=0;
    let formTitle="Add Your Book";
    let btnText="Add Book";
    let bookDesc="";
    let availabiltyInd= Math.random(1,10) > 5 ? "OFF" :"ON"
    if(props.formType==="EDIT"){
        let bookItem = props.bookItem;
        formTitle="Edit Your Book";
        bookName=bookItem.bookName;
        bookAuthor=bookItem.bookAuthor;
        bookDesc=bookItem.bookDesc;
        yearOfRelease=bookItem.yearOfRelease;
        id=bookItem.id;
        availabiltyInd=bookItem.availabiltyInd;
        btnText="Update Book";
    }
    return(
        <form className="addform">
                <p>{formTitle}</p>
                <div className="textInputGroup">
                    <input className="addBookInputText" 
                           placeholder="Book Name" 
                           onChange={(e) => {bookName=e.target.value}} type="text" 
                           defaultValue={bookName} 
                           required/>
                    <input className="addBookInputText" 
                           placeholder="Author Name" 
                           onChange={(e) => {bookAuthor=e.target.value}} 
                           type="text" 
                           defaultValue={bookAuthor} 
                           required={true}/>
                    <input className="addBookInputText" 
                           placeholder="Description" 
                           onChange={(e) => {bookDesc=e.target.value}} 
                           type="text" 
                           defaultValue={bookDesc} 
                           required={true}/>
                    <input className="addBookInputText" 
                           title="release date" 
                           onChange={(e) => {yearOfRelease=e.target.value}} 
                           type="date" 
                           defaultValue={yearOfRelease} 
                           required={true}/>
                </div>
                <button className="addbtn" onClick={(e) => {
                        let editedBookObj={
                            id,
                            bookName,
                            bookAuthor,
                            yearOfRelease,
                            bookDesc,
                            availabiltyInd
                        }
                        props.formType === "EDIT" ? props.updateBookItem(editedBookObj) : props.addBookItem(props.getBookObj(bookName,bookAuthor,yearOfRelease,bookDesc,availabiltyInd))
                        props.setFormVisibility(false)
                }} type="button">{btnText}</button>
                <button className="addbtn" onClick={(e) => {
                        props.setFormVisibility(false)
                }} type="button">Cancel</button>
        </form>
    )
}

export default AddEditFormComponent;