export const sendQuestion = (question) => {
    return {
        type: 'SEND_QUESTION',
        payload: question
    }
};
