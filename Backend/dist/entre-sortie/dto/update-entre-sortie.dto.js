"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEntreSortieDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_entre_sortie_dto_1 = require("./create-entre-sortie.dto");
class UpdateEntreSortieDto extends (0, mapped_types_1.PartialType)(create_entre_sortie_dto_1.CreateEntreSortieDto) {
}
exports.UpdateEntreSortieDto = UpdateEntreSortieDto;
//# sourceMappingURL=update-entre-sortie.dto.js.map