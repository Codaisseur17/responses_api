import { JsonController, Post, HttpCode, Body, Param, Get } from 'routing-controllers'
import Responses from './entity'

@JsonController()
export default class ResponsesController {

  @Post('/responses')   
  @HttpCode(201)
  async newResponse(
      @Body() response: Responses
  ) {
    return response.save()
  }

  @Get('/questions/:id')
async getCorrectAnswers(
@Param('id') id:number
) {
return Questions.findOne(id)
}
Object.entries(Questions)[1][1].map(value => value.correct_answer)
// console.log(array)
// console.log(value)
}
}