import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Subcategories GET
function* fetchSubcategories() {
    try {
        const response = yield axios.get('/api/subcategories');

        yield put({ type: 'SET_SUBCATEGORIES', payload: response.data });
    } catch (error) {
        console.log('Subcategories GET request failed', error);
    }
}

// Subcategories POST
function* postSubcategories() {
    try {
        yield axios.post('/api/user/subcategories', action.payload);
        yield put({ type: 'FETCH_SUBCATEGORIES' });
    } catch (error) {
        console.log('Subcategories POST request failed', error);
    }
}

// Subcategories PUT
function* editSubcategories() {
    try {
        
    } catch (error) {
        console.log('Subcategories PUT request failed', error);
    }
}

// Subcategories DELETE
function* deleteSubcategories() {
    try {
        
    } catch (error) {
        console.log('Subcategories DELETE request failed', error);
    }
}




function* subcategoriesSaga() {
    yield takeLatest('FETCH_SUBCATEGORIES', fetchSubcategories);
    yield takeLatest('POST_SUBCATEGORIES', postSubcategories);
}

export default subcategoriesSaga;