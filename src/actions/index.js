export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};

export const sendQuestion = (question) => {
    console.log("You clicked on user: ", question);
    return {
        type: 'SEND_QUESTION',
        payload: question
    }
};
