import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


// Notifications GET 
function* fetchNotifications() {
    try {
        const response = yield axios.get('/api/notifications');

        yield put({ type: 'SET_NOTIFICATIONS', payload: response.data });
    } catch (error) {
        console.log('Notifications GET request failed', error);
    }
}

// Notifications POST
function* postNotifications() {
    try {
        yield axios.post('/api/user/notifications', action.payload);
        yield put({ type: 'FETCH_NOTIFICATIONS' });
    } catch (error) {
        console.log('Notifications POST request failed', error);
    }
}

// Notifications PUT
function* editNotifications() {
    try {
        
    } catch (error) {
        console.log('Notifications PUT request failed', error);
    }
}



// Notifications DELETE
function* deleteNotifications() {
    try {
        
    } catch (error) {
        console.log('Notifications DELETE request failed', error);
    }
}


function* notificationsSaga() {
    yield takeLatest('FETCH_NOTIFICATIONS', fetchNotifications);
    yield takeLatest('POST_NOTIFICATIONS', postNotifications);
}

export default notificationsSaga;