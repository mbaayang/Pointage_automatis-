import { ResetService } from "./reset.service";
export declare class ResetController {
    private readonly resetService;
    constructor(resetService: ResetService);
    sendEmail(to: string, res: any): Promise<void>;
    sendResponse(code: string, newPassword: string, email: string): Promise<any | null>;
}
