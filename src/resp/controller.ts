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

<<<<<<< HEAD
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



=======
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
>>>>>>> d75c100ad4017ae862118238bc589f9571f6e43e


// @Patch('/responses/:id')
// giveScore(
//   @Param('id') id: number,
//   @Body() body: Partial<Response>
// ) {
//   const 
// }
// }



// .map(value => value.correctAnswer)