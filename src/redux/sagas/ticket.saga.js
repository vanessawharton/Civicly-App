import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Ticket GET ticker by user ID
function* fetchUserTickets(action) {

    try {
        const response = yield axios.get('/api/ticket/user/'+ action.payload);
        yield put({ type: 'SET_USER_TICKETS', payload: response.data });
    } catch (error) {
        console.log('User Tickets by ID GET request failed', error);
    }
}

// Ticket POST
function* postTicket(action) {
    try {
        yield axios.post('/api/ticket', action.payload);
        yield put({ type: 'FETCH_ALL_TICKETS' });
    } catch (error) {
        console.log('Ticket POST request failed', error);
    }
}

// Ticket PUT
// function* sendNotification(action) {
//     try {
        
//     } catch (error) {
//         console.log('Error sending notificaiton', error);
//     }
// }

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

function* updateTicketStatus(action) {
    try {
        yield axios.put('/api/ticket/statusupdate', action.payload);
        // yield put({type: 'SEND_NOTIFICATION'})
        yield put({type: 'FETCH_ALL_TICKETS'})
    }
    catch(error) {
        console.log('Error in ticket saga UPDATE_TICKET_STATUS', error);
    }
}

function* upvoteTicket(action) {
    try{
        yield axios.put('/api/ticket/upvote', action.payload);
        yield put({ type: 'FETCH_ALL_TICKETS' });
    }
    catch(error) {
        console.log('Error in ticket saga UPVOTE', error);
    }
}

function* downvoteTicket(action) {
    try{
        yield axios.put('/api/ticket/downvote', action.payload);
        yield put({ type: 'FETCH_ALL_TICKETS' });
    }
    catch(error) {
        console.log('Error in ticket saga DOWNVOTE', error);
    }
}


function* ticketSaga() {
    //yield takeLatest('FETCH_TICKET', fetchTicket);
    yield takeLatest('POST_TICKET', postTicket);
    yield takeLatest('FETCH_ALL_TICKETS', fetchAllTickets);
    yield takeLatest('FETCH_USER_TICKETS', fetchUserTickets);
    yield takeLatest('FETCH_USER_UPVOTES', fetchUserTicketUpvotes);
    yield takeLatest('FETCH_TICKET_COUNT', fetchUserTicketCount);
    yield takeLatest('UPDATE_TICKET_STATUS', updateTicketStatus);
    yield takeLatest('UPVOTE', upvoteTicket);
    yield takeLatest('DOWNVOTE', downvoteTicket);
}

export default ticketSaga;