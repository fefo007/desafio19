const {asUserDto} = require('../../dtos/userDto')
const asUser = asUserDto()

let instance = null

class MemoryUsers {
    constructor(){
        this.users=[]
    }
    
    async getAll(){
        return asUser(this.users)
    }
    async getUser(username){
        const user =await this.users.find(usuario => usuario.username == username)
        return asUser(user)
    }
    async saveUser(user){
        const newUser=this.users.push(user)
        return asUser(newUser)
    }
    static getInstance(){
        if(!instance){
            instance =  new MemoryUsers()
        }
        return instance
    }
}

module.exports=MemoryUsers