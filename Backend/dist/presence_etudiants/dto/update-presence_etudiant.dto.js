"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePresenceEtudiantDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_presence_etudiant_dto_1 = require("./create-presence_etudiant.dto");
class UpdatePresenceEtudiantDto extends (0, mapped_types_1.PartialType)(create_presence_etudiant_dto_1.CreatePresenceEtudiantDto) {
}
exports.UpdatePresenceEtudiantDto = UpdatePresenceEtudiantDto;
//# sourceMappingURL=update-presence_etudiant.dto.js.map