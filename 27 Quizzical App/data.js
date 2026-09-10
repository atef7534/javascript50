const url = 'https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple'

function decodeHtmlEntities(text) {
    const decoder = document.createElement('textarea')
    decoder.innerHTML = text
    return decoder.value
}

export async function getQuestions() {
    const response = await fetch(url)
    const data = await response.json()

    const questions = data.results.map(item => {
        return {
            question: decodeHtmlEntities(item.question),
            choices: [...item.incorrect_answers, item.correct_answer].map(decodeHtmlEntities),
            correctAnswer: decodeHtmlEntities(item.correct_answer)
        }
    })
    return questions
}

const questions = await getQuestions()
export default questions
