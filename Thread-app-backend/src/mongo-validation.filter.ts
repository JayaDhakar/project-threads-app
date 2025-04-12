import {
  ArgumentsHost,
  Catch,
  RpcExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Error } from 'mongoose';
import ValidationError = Error;


@Catch(ValidationError)
export class ValidationErrorFilter implements RpcExceptionFilter {
  catch(exception: ValidationError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    return response.status(400).json({
      statusCode: 400,
      createdBy: 'validation error filter',
      errors: exception,
    });
  }
}
