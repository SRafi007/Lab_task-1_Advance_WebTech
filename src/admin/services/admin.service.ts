import { Injectable } from "@nestjs/common";
import { userDTO } from "src/DTO's/userDTO";

@Injectable()
export class AdminService {
    private DammyData=[{Id:"1",Name:"Rafi1",email:"1@gmail.com"},
                        {Id:"2",Name:"Rafi2",email:"2@gmail.com"},
                        {Id:"3",Name:"Rafi3",email:"3@gmail.com"}]

getUsers() {
    return this.DammyData;
}
getUserById(id){
    var count=0;

    
    while(count<this.DammyData.length){

        if(this.DammyData[count].Id===id)
        {
            return this.DammyData[count];
        }
        count++;

    }
    return "Enter a Valid Used Id";
}
insertUser(user) {
    this.DammyData.push(user);
    return this.DammyData;
}
deleteUserById(id) {
    return "Enter a Valid Used Id";
}
}