import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Ticket GET
function* fetchTicket() {
    try {
        const response = yield axios.get('/api/ticket');

        yield put({ type: 'SET_TICKET', payload: response.data });
    } catch (error) {
        console.log('Ticket GET request failed', error);
    }
}

// Ticket POST
function* postTicket() {
    try {
        yield axios.post('/api/user/ticket', action.payload);
        yield put({ type: 'FETCH_TICKET' });
    } catch (error) {
        console.log('Ticket POST request failed', error);
    }
}

// Ticket PUT
function* editTicket() {
    try {
        
    } catch (error) {
        console.log('Ticket PUT request failed', error);
    }
}

// Ticket DELETE
function* deleteTicket() {
    try {
        
    } catch (error) {
        console.log('Ticket DELETE request failed', error);
    }
}




function* ticketSaga() {
    yield takeLatest('FETCH_TICKET', fetchTicket);
    yield takeLatest('POST_TICKET', postTicket);
}

export default ticketSaga;