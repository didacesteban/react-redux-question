export const SEND_QUESTION = 'SEND_QUESTION'
export const CLEAR_QUESTION = 'CLEAR_QUESTION'

export function sendQuestion(question) {
    return {
        type: 'SEND_QUESTION',
        payload: question
    }
}

export function clearQuestion(text) {
    return {
        type: 'CLEAR_QUESTION',
        payload: text
    }
}
