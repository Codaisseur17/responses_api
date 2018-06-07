import { JsonController, Post, HttpCode, Body, Param, Get, Patch, NotFoundError } from 'routing-controllers'
import {Responses, Questions } from './entity'
import * as request from 'superagent'

const quizzesUrl = process.env.QUIZZES_URL || 'http://quizzes:4001'

@JsonController()
export default class ResponsesController {

@Post('/responses')
@HttpCode(201)
async newResponse(
@Body() response: Responses
) {
  const newReponse = await Responses.create(response).save()

  const quiz = await request
      .get(`${quizzesUrl}/quizzes/${response.quizId}`)
      .end()
      .catch(error => console.log(error))

      // console.log(request, "meow")

      // const newReponse = await Responses.create(response).save()
      const responses = response.input
      // const questions = quiz.questions
      console.log(response.request.input, "i did this!")

// const score = responses.map(res => {
//   res.userAnswer === questions.find(element => element.id === res.id).correctAnswer ? 1 : 0
// }).reduce((a,b) => {a + b}, 0)

// console.log(score)

    // console.log(`responses: ${JSON.stringify(responses)}`)
    // console.log(`questions: ${JSON.stringify(questions)}`)

return { quiz }
}

@Post('/questions')
@HttpCode(201)
async newQuestion(
@Body() questions: Questions
) {
return questions.save()
}


@Get('/questions')
async getCorrectAnswers() {
const quizzes = await Questions.find()
return {quizzes}
}

@Get('/questions/:quizId')
async getQuestionByQuiz(
@Param('quizId') quizId: number
){
const quiz = await Questions.find({where: {quizId}})
return {quiz}
}

@Get('/responses')
async getResponse(
) {
const responses = await Responses.find()
return {responses}
}

@Get('/responses/:quizId')
async getResponseById(
@Param('quizId') quizId: number
) {
const response = await Responses.find({where: {quizId}})
return {response}
}

@Patch('/responses/:quizId')
async giveScoreById(
@Param('quizId') quizId: number,
@Body() update: any
) {
console.log(update,"<---update")
let score
const quiz = await Questions.find({where: {quizId}})
const meow = quiz.map(value => value.correctAnswer)

const response = await Responses.find({where: {quizId}})
var responseobj = response.reduce(function(acc, cur, i) {
acc[i] = cur;
return acc;
}, {});
console.log(responseobj[0].input[0].userAnswer, "sup")
// if(!response[0].input.userAnswer) throw new NotFoundError
// const bark = response[0].input.map(value => value.userAnswer)
// console.log(bark, "whatsupp")
// const findMatch = (meow, bark) => {
// let res:any = []
// for (let i = 0; i < meow.length; i++) {
// if (meow[i] === bark[i]) {
// res.push(i);
// console.log(res, "whaaat")
// }
}
// const uniqueArray = res.map(function(index) {
// return meow[index]
// })
// score = uniqueArray.length
// console.log(score, "hello")
// return {score}
// }
// response[0].score = update.update.score
// // console.log(response[0],"RESPONSE NEW")

// console.log(findMatch(meow,bark), "what")

// return await response[0].save()
// // return Responses.merge(score, update)


// return {score}
// }

}

// http patch :4002/responses/1 update:='{"id": 4,"input": [{"id": 1,"userAnswer": "C"},{"id": 2,"userAnswer": "C"},{"id": 3,"userAnswer": "D"}],"quizId": 1,"userId": 1, "score":2 }'
