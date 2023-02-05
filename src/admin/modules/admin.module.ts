import{Module} from "@nestjs/common";
import { LoginService } from "src/Common/login.service";
import { AdminController } from "../controllers/admin.controller";
import { AdminService } from "../services/admin.service";
@Module({
    imports: [],
    controllers:[AdminController],
    providers:[AdminService,LoginService]
})
export class AdminModule {}