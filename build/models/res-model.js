"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorModel = exports.SuccessModel = void 0;
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
    constructor(obj) {
        super();
        this.error = {
            code: obj.code,
            msg: obj.msg,
            detial: obj.detial
        };
    }
}
exports.ErrorModel = ErrorModel;
