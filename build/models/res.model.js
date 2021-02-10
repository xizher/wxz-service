"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorModel = exports.SuccessModel = exports.ErrorEnum = void 0;
var ErrorEnum;
(function (ErrorEnum) {
    ErrorEnum["Unknown"] = "0x000|\u672A\u77E5\u9519\u8BEF|\u672A\u77E5\u9519\u8BEF";
    ErrorEnum["NotFount"] = "0x400|\u7CFB\u7EDF\u5F02\u5E38|\u670D\u52A1\u4E0D\u5B58\u5728";
})(ErrorEnum = exports.ErrorEnum || (exports.ErrorEnum = {}));
class BaseModel {
}
class SuccessModel extends BaseModel {
    constructor(data) {
        super();
        this.data = data;
        this.error = null;
    }
}
exports.SuccessModel = SuccessModel;
class ErrorModel extends BaseModel {
    constructor(error = ErrorEnum.Unknown) {
        super();
        const [code, msg, detial] = error.split('|');
        this.error = { code, msg, detial };
        this.data = null;
    }
}
exports.ErrorModel = ErrorModel;
