import { ADD_BOOK, GET_BOOK_LIST, SEARCH_BOOK, SHOW_ADD_FORM, SHOW_UPDATE_FORM, UPDATE_BOOK_ITEM, SET_UPDATE_ITEM, FETCH_BOOK_LIST } from '../constants'; 

const initialState = {
    bookList:[],
    search:"",
    addFormVisibility:false,
    updateFormVisibility:false,
    updateItem:{}
}

export const reducer = (state=initialState,action) => {
    switch(action.type){
        case ADD_BOOK: { console.log(action.type, action.payload);
                        let bookItem = action.payload;
                        let { bookList } = state;
                        const newBookList = bookList.concat(bookItem);
                        return {...state, bookList: newBookList};
                       }

        case SHOW_ADD_FORM:    console.log(action.type, action.payload);
                                    return{...state, addFormVisibility:action.payload }
        case SHOW_UPDATE_FORM:    console.log(action.type, action.payload);
                                    return{...state, updateFormVisibility:action.payload }
                                    
        case UPDATE_BOOK_ITEM:  { console.log(action.type, action.payload)
                                    let {bookList} = state;
                                    let bookObj = action.payload;
                                    console.log("list", bookList);
                                    let newBookList = bookList.map((bookItem)=> {
                                        if(bookItem.id===bookObj.id){bookItem=bookObj;}
                                        return bookItem;
                                    })
                                    return{
                                        ...state, bookList:newBookList
                                    }
                                }
        case SET_UPDATE_ITEM : {console.log(action.type, action.payload);
                                return{
                                    ...state, updateItem:action.payload
                                }
                               }

        case SEARCH_BOOK:   console.log(state.bookList, state);
                            let newsearch = action.payload;
                            return {...state, search: newsearch}
        case FETCH_BOOK_LIST: {console.log(action.type, action.payload)
                                return {...state, bookList:action.payload}
                              }
        case GET_BOOK_LIST: {console.log(action.type, action.payload)
                                return {...state}
                            }

        default:return state;
    }
}