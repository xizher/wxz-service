interface IResModelError {
  code: string
  msg: string
  detial: string
}

interface IResModel {
  data: any // eslint-disable-line
  error: null | IResModelError
}

export enum ErrorEnum {
  Unknown = '0x000|未知错误|未知错误',
  NotFount = '0x400|系统异常|服务不存在',
}
class BaseModel implements IResModel {
  data: any // eslint-disable-line
  error: null | IResModelError
}

export class SuccessModel extends BaseModel {
  constructor (data: any) { // eslint-disable-line
    super()
    this.data = data
    this.error = null
  }
}

export class ErrorModel extends BaseModel {
  constructor (error: ErrorEnum = ErrorEnum.Unknown) {
    super()
    const [code, msg, detial] = error.split('|')
    this.error = { code, msg, detial }
    this.data = null
  }
}
