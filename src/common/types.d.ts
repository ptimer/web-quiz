interface MarketIndex {
  name: string;
  currentValue: number;
  currency: 'INR';         
  percentChange: number;       
}

interface Option<T> {
 id: string;
 value?: T;
}

type OptionValue = MarketIndex | string;

interface Question {
 id: string;
 text: string;
 options: Option<OptionValue>[];
 correctAnswerId: Option<OptionValue>['id'];
}
