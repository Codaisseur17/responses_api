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

@Get('/questions')
 async getCorrectAnswers(
 ) {
    const quiz = await Questions.find()
    // console.log(quiz, "hello")
    const meow = quiz.map(value => value.correctAnswer)
    console.log(meow, "bye")
    return {quiz}
  //  const question = await Questions.findOne(quizId)
  }

@Get('/responses')
 async getResponse(
 ) {
    const whatthehell = await Responses.find()
    console.log(whatthehell, "hello")
    // const bark = await Responses.answers
    // const bark = Object.entries(response)[0][1]
    // const bark2 = Object.entries(bark)[3][1]
    // const bark3 = Object.entries(bark2)[1]
    // const bark = response.map(value => value.correctAnswer)
    // console.log(bark, "bye")
    return {whatthehell}
  //  const question = await Questions.findOne(quizId)
  }
}

// (Object.entries(quiz)[0])



// const answers=[{"1":"a"},{"2":"d"},{"3":"c"}]
// const correctAnswer= 

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



// .map(value => value.correctAnswer)