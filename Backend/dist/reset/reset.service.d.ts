import { Employes } from "src/employes/entities/employe.entity";
import { Repository } from "typeorm";
export declare class ResetService {
    private readonly userRepository;
    cle: string;
    code: string;
    private transporter;
    constructor(userRepository: Repository<Employes>);
    emeilExists(email: string): Promise<boolean>;
    isEmailStateTrue(email: string): Promise<boolean>;
    sendEmail(to: string): Promise<void>;
    sendResponse(code: string, password: string, email: string): Promise<void>;
}
