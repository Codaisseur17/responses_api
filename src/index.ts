import 'reflect-metadata'
import {createKoaServer} from "routing-controllers"
import setupDb from './db'
import ResponsesController from './resp/controller'

const port = process.env.PORT || 4002

const app = createKoaServer({
  controllers: [
    ResponsesController
  ]
})

setupDb()
  .then(_ => {
    app.listen(port, () => console.log(`Dude, We're listening on port ${port}`))
  })
  .catch(err => console.error(err))



// var one = {'key' : 1, 'data': 'Hello'};
// var two = {'key' : 1, 'data': 'Hello', 'date': '15th'};
// var three = []

// undefined
// function checkIfObjectContains(one, two){
//    for (var i in one) {
//            if (two.hasOwnProperty(i) || one[i] === two[i] ) {
//               three.push(i);
//            }       
//    }
//    return false;
// }
