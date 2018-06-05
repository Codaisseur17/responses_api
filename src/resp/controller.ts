import { JsonController, Post, HttpCode, Body } from 'routing-controllers'
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
}