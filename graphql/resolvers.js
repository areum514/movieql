const areum ={
    name:"areum",
    age:25,
    gender:"f"
}

const resolvers = {
  Query: {
      person:()=>areum
      //name:()=>"areum"
    //hello: (_, { name }) => `Hello ${name || 'World'}`,
  },
}

export default resolvers;