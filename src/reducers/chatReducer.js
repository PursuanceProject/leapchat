import {
    CHAT_ADD_MESSAGE,
    CHAT_SET_USER_STATUS,
    CHAT_CLEAR_MESSAGES,
    CHAT_SET_USERNAME
} from '../actions/chatActions';

const initialState = {
    username: null,
    messages: [],
    statuses: []
};

export default chatReducer = (state = initialState, action) => {
    switch (action.type) {

        case CHAT_ADD_MESSAGE:
            return Object.assign({
                messages: [...state.messages, {
                    key: action.key,
                    from: action.fromUsername + action.maybeSenderID,
                    msg: action.message
                }]
            }, state);

        case CHAT_CLEAR_MESSAGES:
            return Object.assign({
                messages: []
            }, state);

        case CHAT_SET_USER_STATUS:
            return Object.assign({
                statuses: [...state.statuses, {
                    from: action.fromUsername,
                    status: action.userStatus,
                    created: action.created
                }]
            }, state);

        case CHAT_SET_USERNAME:
            return Object.assign({
                username: action.username
            }, state);

        default:
            return state;
    }
}