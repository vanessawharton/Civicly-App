import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchTicket() {
    try {
        const response = yield axios.get('/api/ticket');

        yield put({ type: 'SET_TICKET', payload: response.data });
    } catch (error) {
        console.log('Ticket GET request failed', error);
    }
}




function* ticketSaga() {
    yield takeLatest('FETCH_TICKET', fetchTicket);
}

export default ticketSaga;