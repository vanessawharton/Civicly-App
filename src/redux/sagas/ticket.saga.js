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

function* fetchAllTickets() {
    try{
        const response = yield axios.get('/api/ticket/alltickets')

        yield put({ type: 'SET_ALL_TICKETS', payload: response.data });
    }
    catch(error){
        console.log('error in ticket.saga FETCH_ALL_TICKETS', error);
    }
}

function* fetchUserTicketUpvotes(action) {
    try{
        const response = yield axios.get('/api/ticket/upvotes/'+ action.payload)
        // console.log('upvote saga data: ', response.data[0].sum);
        yield put({ type: 'SET_TICKET_UPVOTES', payload: response.data[0].sum });
    }
    catch(error){
        console.log('error in ticket.saga SET_TICKET_UPVOTES', error);
    }
}

function* fetchUserTicketCount(action) {
    try{
        const response = yield axios.get('/api/ticket/ticketcount/'+ action.payload)
        // console.log('ticket count saga data: ', response.data[0].count);
        yield put({ type: 'SET_TICKET_COUNT', payload: response.data[0].count });
    }
    catch(error){
        console.log('error in ticket.saga SET_TICKET_COUNT', error);
    }
}


function* ticketSaga() {
    yield takeLatest('FETCH_TICKET', fetchTicket);
    yield takeLatest('POST_TICKET', postTicket);
    yield takeLatest('FETCH_ALL_TICKETS', fetchAllTickets);
    yield takeLatest('FETCH_USER_UPVOTES', fetchUserTicketUpvotes);
    yield takeLatest('FETCH_TICKET_COUNT', fetchUserTicketCount);
}

export default ticketSaga;