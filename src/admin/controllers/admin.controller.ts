import {Body, Controller,Get,Param,Post} from "@nestjs/common";
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
@Post("/addUser")
addUser(@Body() newUser:userDTO ){
    return this.adminService.insertUser(newUser);
}
@Post("/delete")
deleteUserById(@Param("id")Id:string){
    return this.adminService.deleteUserById(Id);
}
}