import React from 'react';
import {connect} from "react-redux";
import './css/booktile.css';
import {updateBookItem, setUpdateFormVisibility, setUpdateItem} from '../actions';

const BookTileComponent = (props) => {
    let blurEffect= props.updateFormVisibility ? {filter: "blur(5px)", pointerEvents:"none"} : {}
    let bookItem = props.bookItem
    let availIndStyle= bookItem.availabiltyInd==="IN" ?  {backgroundColor:"#45a247"} : {backgroundColor:"#212121"}
    return(
        <React.Fragment>
           <div className="todotile" style={blurEffect}>
                <div className="tileContent">
                    <h6 className="tileText">{bookItem.bookName}</h6>
                    <i>Author: {bookItem.bookAuthor}</i>
                    <p title={bookItem.bookDesc}><i>Desc: {bookItem.bookDesc}</i></p>
                    <hr/>
                    <div style={{display:"inline-flex"}}>
                        <p className="yearOfRel">{bookItem.yearOfRelease}</p>
                        <span className="todooperation">
                            <input type="button" className="editbutton" 
                            onClick={(e)=>{
                                props.setUpdateItem(bookItem)
                                console.log("mybookitem", bookItem);
                                props.setUpdateFormVisibility(true)
                            }}/>
                            <input className="availbilityInd"
                                type="button"
                                style={availIndStyle} 
                                title={bookItem.availabiltyInd}
                                onClick={(e)=>handleAvailability(e, bookItem, props)} defaultValue={bookItem.availabiltyInd} />
                        </span>
                    </div>
                </div>
           </div>
        </React.Fragment>
    );
}

const handleAvailability = (e, bookItem, props) =>{
    e.preventDefault();
    if(bookItem.availabiltyInd==="OUT"){
        bookItem.availabiltyInd="IN"
        e.target.style.background="#45a247"
        e.target.value="IN"
    }
    else{
        bookItem.availabiltyInd="OUT"
        e.target.style.background="#212121"
        e.target.value="OUT"
    }
    props.updateBookItem(bookItem)
}

function mapDispatchToProps(dispatch, ownProps){
    return{
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
        updateFormVisibility:state.updateFormVisibility,
        updateItem:state.updateItem,
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (BookTileComponent);