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
  // const meows = quizzes.map(value => value.correctAnswer)
  return {quizzes}
}

@Get('/questions/:quizId')
  async getQuestionByQuiz(
  @Param('quizId') quizId: number
){
  const quiz = await Questions.find({where: {quizId}})
  // const meow = quiz.map(value => value.correctAnswer)
  // console.log(meow)
return {quiz}
}

@Get('/responses')
  async getResponse(
) {
  const responses = await Responses.find()
  // const barks = responses[0]['input'].map(value => value.userAnswer)
  // console.log(barks, "bye")
return {responses}
}

@Get('/responses/:quizId')
  async getResponseById(
  @Param('quizId') quizId: number
) {
  const response = await Responses.find({where: {quizId}})
  // const bark = response[0]['input'].map(value => value.userAnswer)
  // console.log(bark, "bye")
return {response}
}

@Get('/responses/:quizId')
  async giveScoreById(
    @Param('quizId') quizId: number,
    @Body() update: Partial<Responses>
  ) {
    const quiz = await Questions.find({where: {quizId}})
    const meow = quiz.map(value => value.correctAnswer)
    // console.log(meow, "hello")
    
    const response = await Responses.find({where: {quizId}})
    const bark = response[0]['input'].map(value => value.userAnswer)
    // console.log(bark, "bye")

    const findMatch = (meow, bark) => {
      let res = []
        for (var i = 0; i < meow.length; i++) {
          if (meow[i] === bark[i]) {
              res.push(i);
          }
        }
      var uniqueArray = res.map(function(index) {
      return meow[index]
      })
      const score =  uniqueArray.length
      console.log(score, "hello")
    }

    console.log(findMatch(meow,bark), "what")

    
    return {meow, bark}
  }

}

//Response.merge(response, update).save()
