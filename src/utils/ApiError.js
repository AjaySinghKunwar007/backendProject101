class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack = "",
    data= null
  ) {
    super(message),
    this.statusCode= statusCode
    this.data= data
    this.message= message
    this.success= false;
    this.errors= errors

    if (stack) {
        this.stack= statck
    } else {
        Error.captureStackTrace(this,this.constructor)
    }
  }
}
        
export {ApiError}