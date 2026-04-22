export interface LastPricesResponse {
  bcv: {
    price: number;
  };
  binance: {
    price: number;
  };
}

export interface ActualGapResponse {
  gap: {
    value: number;
    formatted: string;
    description: string;
  };
  bcv: {
    price: number;
    updatedAt: string;
  };
  binance: {
    price: number;
    updatedAt: string;
  };
  timestamp: string;
}

export interface ReferentialDollar {
  rates: {
    bcv: {
      price: number;
      weight: string;
      updatedAt: string;
    };
    binance: {
      price: number;
      weight: string;
      updatedAt: string;
    };
  };
  referential: {
    price: number;
    calculation: string;
    description: string;
  };
  comparison: {
    brecha: {
      value: number;
      formatted: string;
    };
  };
  timestamp: string;
}
