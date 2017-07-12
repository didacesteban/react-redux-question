export const SEND_QUESTION = 'SEND_QUESTION'

export function sendQuestion(question) {
    return {
        type: 'SEND_QUESTION',
        payload: question
    }
}
