export default function (state = null, action) {
    switch (action.type) {
        case 'SEND_QUESTION':
            return action.payload;
    }
    return state;
}
