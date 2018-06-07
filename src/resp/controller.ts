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
<<<<<<< HEAD
  }

  // @Get('/responses/user/:user_id')
  // getResponseUserId(
  //     @Param('user_id') user_id:number
  // ){
  //     return Responses.findOne({where: {user_id}})
  // }


//   array1 = ["A" , "B", "C", "D", "A", "D", "E"]
// array2 = ["A" , "C", "C", "C", "A", "X", "E"]


// const findMatch = (array1, array2) => {
//   var res = []
//     for (var i = 0; i < array1.length; i++) {
//       if (array1[i] === array2[i]) {
//           res.push(i);
//           //console.log(i) 
//       }
//     }
//   var uniqueArray = res.map(function(index) {
//   // console.log(index);
//   return array1[index]
//   })
//   return uniqueArray
// }

// console.log(findMatch(array1,array2))





// @Patch('/responses/:id')
// giveScore(
//   @Param('id') id: number,
//   @Body() body: Partial<Response>
// ) {
//   const 
// }
// }

=======

@Get('/responses')
 async getResponse(
 ) {
    const responses = await Responses.find()
    const bark = responses[0]['input'].map(value => value.userAnswer)
    console.log(bark, "bye")
>>>>>>> 3c9feb10ea95d974c18d5081b4d9eabe7a70ae0d


    return {responses}
 }
}