import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import activeBook from './reducer_active_book';

const rootReducer = combineReducers({
  activeBook:activeBook,
  books:BooksReducer
});

export default rootReducer;
