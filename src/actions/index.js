export const sendQuestion = (question) => {
    console.log("You clicked on user: ", question);
    return {
        type: 'SEND_QUESTION',
        payload: question
    }
};
