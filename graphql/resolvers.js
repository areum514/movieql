import {getMovie} from './db.js'
const resolvers = {
  Query: {
      movies:()=>getMovie(),
  }
  
}

export default resolvers;