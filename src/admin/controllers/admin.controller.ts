import {Body, Controller,Delete,Get,Param,Post, Put, Query} from "@nestjs/common";
import { AdminService } from "../services/admin.service";
import { userDTO } from "src/DTO's/userDTO";

@Controller('admin')
export class AdminController{
    constructor(private  adminService: AdminService){}
@Get("/users")
getUsers(){
    return this.adminService.getUsers();
}
@Get("/users/:id")
getUserById(@Param("id") Id:string){
    return this.adminService.getUserById(Id);
}
@Get("/que")
getQuary(@Query("sort")sortBy:boolean)
{
    return sortBy;
}
@Post("/addUser")
addUser(@Body() newUser:userDTO ){
    return this.adminService.insertUser(newUser);
}
@Post("/delete/:id")
deleteUserById(@Param("id")Id:string){
    return this.adminService.deleteUserById(Id);
}
@Put("/update/:id")
updateUserById(@Param("id")Id:string, @Body("Name")Name:string,@Body("Mail")Mail:string ){
    const user={Id:Id, Name:Name, Mail:Mail};
    
    return this.adminService.updateUserById(user);
}
}