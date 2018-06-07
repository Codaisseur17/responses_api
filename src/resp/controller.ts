import { JsonController, Post, HttpCode, Body, Param, Get, Patch } from 'routing-controllers'
import {Responses, Questions } from './entity'

@JsonController()
export default class ResponsesController {

@Post('/responses')
@HttpCode(201)
  async newResponse(
@Body() response: Responses
) {
  const newReponse = await Responses.create(response).save()
  return response.save()
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

@Get('/responses/:quizId')
  async giveScoreById(
@Param('quizId') quizId: number,
@Body() update: Partial<Response>
) {
  let score
  const quiz = await Questions.find({where: {quizId}})
  const meow = quiz.map(value => value.correctAnswer)

  const response = await Responses.find({where: {quizId}})
  const bark = response[0]['input'].map(value => value.userAnswer)

  const findMatch = (meow, bark) => {
  let res = []
    for (var i = 0; i < meow.length; i++) {
      if (meow[i] === bark[i]) {
    res.push(i);
    // console.log(res)
  }
}
  const uniqueArray = res.map(function(index) {
    return meow[index]
  })
  score = uniqueArray.length
  // console.log(score, "hello")
  return score
  }

  console.log(findMatch(meow,bark), "what")
  return {score}
  // return Response.merge({score}, update).save()
  }

}

