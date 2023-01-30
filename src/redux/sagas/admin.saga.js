import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Admin GET
function* fetchAdmin() {
    try {
        const response = yield axios.get('/api/admin');

        yield put({ type: 'SET_ADMIN', payload: response.data });
    } catch (error) {
        console.log('Admin GET request failed', error);
    }
}

// Admin POST
function* postAdmin() {
    try {
        yield axios.post('/api/user/admin', action.payload);
        yield put({ type: 'FETCH_ADMIN' });
    } catch (error) {
        console.log('Admin POST request failed', error);
    }
}

// Admin PUT
function* editAdmin() {
    try {
        
    } catch (error) {
        console.log('Admin PUT request failed', error);
    }
}

// Admin DELETE
function* deleteAdmin() {
    try {
        
    } catch (error) {
        console.log('Admin DELETE request failed', error);
    }
}




function* adminSaga() {
    yield takeLatest('FETCH_ADMIN', fetchAdmin);
    yield takeLatest('POST_ADMIN', postAdmin);
}

export default adminSaga;