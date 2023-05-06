"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormController = void 0;
const common_1 = require("@nestjs/common");
const form_service_1 = require("./form.service");
const create_form_dto_1 = require("./dto/create-form.dto");
const update_form_dto_1 = require("./dto/update-form.dto");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
const promise_1 = require("mysql2/promise");
let FormController = class FormController {
    constructor(formService) {
        this.formService = formService;
    }
    create(createFormDto) {
        return this.formService.create(createFormDto);
    }
    findAll() {
        return this.formService.findAll();
    }
    findOne(id) {
        return this.formService.findOne(+id);
    }
    update(id, updateFormDto) {
        return this.formService.update(+id, updateFormDto);
    }
    remove(id) {
        return this.formService.remove(+id);
    }
    async submitForm(file, body) {
        const { firstName, lastName, role } = body;
        const connection = await (0, promise_1.createConnection)({
            host: "localhost",
            user: "root",
            password: "",
            database: "image",
        });
        const [results, fields] = await connection.execute("INSERT INTO images (first_name, last_name, image_filename, role) VALUES (?, ?, ?, ?)", [firstName, lastName, file.filename, role]);
        return {
            firstName,
            lastName,
            imageFilename: file.filename,
            role,
        };
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_form_dto_1.CreateFormDto]),
    __metadata("design:returntype", void 0)
], FormController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FormController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FormController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_form_dto_1.UpdateFormDto]),
    __metadata("design:returntype", void 0)
], FormController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FormController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)("submit"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("image", {
        storage: (0, multer_1.diskStorage)({
            destination: "./images",
            filename: (req, file, callback) => {
                const randomName = Array(32)
                    .fill(null)
                    .map(() => Math.round(Math.random() * 16).toString(16))
                    .join("");
                callback(null, `${randomName}${(0, path_1.extname)(file.originalname)}`);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FormController.prototype, "submitForm", null);
FormController = __decorate([
    (0, common_1.Controller)('form'),
    __metadata("design:paramtypes", [form_service_1.FormService])
], FormController);
exports.FormController = FormController;
//# sourceMappingURL=form.controller.js.map