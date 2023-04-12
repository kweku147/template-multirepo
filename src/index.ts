interface P2CType {
  parseSwagger: () => string;
}

export class P2C implements P2CType {
  api: string;
  constructor(api: string) {
    this.api = api;
  }
  parseSwagger() {
    return '';
  }
}
