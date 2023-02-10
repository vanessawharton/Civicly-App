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

function* sendNotification(action) {
    console.log('in sendNotification', action.payload);
    try {
        yield axios.post('/api/notifications', action.payload)

    } catch (error) {
        console.log('Error in ticket.saga sendNotification', error);
    }
}

// Notifications PUT
function* hideNotification(action) {
    console.log('in hideNotification', action.payload);
    try {
        yield axios.put('/api/notifications/hidenotification', action.payload)
        yield put({type: 'FETCH_NOTIFICATIONS'})
    } catch (error) {
        console.log('Error in hideNotification', error);
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
    yield takeLatest('SEND_NOTIFICATION', sendNotification);
    yield takeLatest('HIDE_NOTIFICATION', hideNotification);
}

export default notificationsSaga;