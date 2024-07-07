export interface Currency {
  id: string;
  name: string;
  min_size: string;
}

type RatesObject = {
  [key: string]: string;
};

export interface CurrencyRates {
  currency: string;
  rates: RatesObject;
}

export interface StateTypes {
  currencies?: Currency[];
  selectedCurrency?: CurrencyRates | {};
  loading: boolean;
  error?: string | null;
}
