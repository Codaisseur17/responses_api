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
    return response.save()
  }

@Post('/questions')   
@HttpCode(201)
async newQuestion(
    @Body() questions: Questions
) {
  return questions.save()
}
}

// @Get('/questions/:id')
// async getCorrectAnswers(
// @Param('id') quizId: number
// ) {
//   const question = await Questions.findOne(quizId)
//   }


// @Patch('/responses/:id')
// giveScore(
//   @Param('id') id: number,
//   @Body() body: Partial<Response>
// ) {
//   const 
// }
// }

// Object.entries(Questions)[1][1].map(value => value.correctAnswer)