"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateConnexionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_connexion_dto_1 = require("./create-connexion.dto");
class UpdateConnexionDto extends (0, mapped_types_1.PartialType)(create_connexion_dto_1.CreateConnexionDto) {
}
exports.UpdateConnexionDto = UpdateConnexionDto;
//# sourceMappingURL=update-connexion.dto.js.map