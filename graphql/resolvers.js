import {getMovie,getById,addMovie,deleteMovie} from './db.js'
const resolvers = {
  Query: {
      movies:()=>getMovie(),
      movie:(_,{id})=>getById(id)
  },
  Mutation:{
      addMovie:(_,{name,score})=>addMovie(name,score),
      deleteMovie:(_,{id})=>deleteMovie(id),
  }
  
}

export default resolvers;