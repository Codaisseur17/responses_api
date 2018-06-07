import { JsonController, Post, HttpCode, Body, Param, Get } from 'routing-controllers'
import {Responses, Questions } from './entity'
// import Questions from '../quizzes/src/controller'

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
    const quiz = await Questions.find()
    const meow = quiz.map(value => value.correctAnswer)
    return {meow}
    }

  @Get('/questions/:quizId')
  async getQuestionByQuiz( 
    @Param('quizId') quizId: number
  ){
    const quiz = await Questions.find({where: {quizId}})
    const meow = quiz.map(value => value.correctAnswer)
    console.log(meow)
    return {meow}
    }

@Get('/responses')
 async getResponse(
 ) {
    const responses = await Responses.find()
    const bark = responses[0]['input'].map(value => value.userAnswer)
    console.log(bark, "bye")


    return {responses}
 }
}