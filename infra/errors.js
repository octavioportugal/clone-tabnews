export class InternalServerError extends Error {
  constructor({ cause, statusCode }) {
    super("Um erro interno não esperado aconteceu.", {
      cause: cause,
    });
    this.name = "Internal Server Error";
    this.action = "Entre em contato com o suporte.";
    this.statusCode = statusCode || 500;
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_code: this.statusCode,
    };
  }
}

export class ServiceError extends Error {
  constructor({ cause, message }) {
    super(message || "Serviço indisponível no momento", {
      cause: cause,
    });
    this.name = "Service Error";
    this.action = "Verifique se o serviço esta disponível.";
    this.statusCode = 503;
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_code: this.statusCode,
    };
  }
}
export class MethodNotAllowedError extends Error {
  constructor() {
    super("Método não permitido para este endpoint.");
    this.name = "MethodNOtAllowedError";
    this.action =
      "Verifique se o método HTTP enviado é valido para este endpoint.";
    this.statusCode = 405;
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_code: this.statusCode,
    };
  }
}
