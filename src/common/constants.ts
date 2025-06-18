const marketIndices: MarketIndex[] = [
  {
    name: "NIFTY50",
    currentValue: 17356,
    currency: "INR",
    percentChange: -0.31,
  },
  {
    name: "NIFTYNEXT50",
    currentValue: 56226,
    currency: "INR",
    percentChange: -0.31,
  },
  {
    name: "NIFTYBANK",
    currentValue: 17356,
    currency: "INR",
    percentChange: 2.12,
  },
  {
    name: "SENSEX",
    currentValue: 60000,
    currency: "INR",
    percentChange: 0.45,
  },
];

const question1: Question = {
  id: "1a2b3c4d-0000-1111-2222-333344445555",
  text: "PREDICT THE TOP LOSER (for tomorrow) across these indices",
  options: [
    { id: "opt-1111-2222-3333-4444", value: marketIndices[0] },
    { id: "opt-2222-3333-4444-5555", value: marketIndices[1] },
    { id: "opt-3333-4444-5555-6666", value: marketIndices[2] },
  ],
  correctAnswerId: "opt-1111-2222-3333-4444",
};

const question2: Question = {
  id: "2b3c4d5e-1111-2222-3333-444455556666",
  text: "Which currency is used by the indices shown?",
  options: [
    { id: "opt-4444-5555-6666-7777", value: "INR" },
    { id: "opt-5555-6666-7777-8888", value: "USD" },
    { id: "opt-6666-7777-8888-9999", value: "EUR" },
  ],
  correctAnswerId: "opt-4444-5555-6666-7777",
};

const question3: Question = {
  id: "3c4d5e6f-2222-3333-4444-555566667777",
  text: "Which index showed a positive percent change?",
  options: [
    { id: "opt-7777-8888-9999-0000", value: marketIndices[0] },
    { id: "opt-8888-9999-0000-1111", value: marketIndices[2] },
    { id: "opt-9999-0000-1111-2222", value: marketIndices[1] },
  ],
  correctAnswerId: "opt-8888-9999-0000-1111",
};


const question4: Question = {
  id: "4d5e6f7g-3333-4444-5555-666677778888",
  text: "What is the current value of SENSEX?",
  options: [
    { id: "opt-aaaa-bbbb-cccc-dddd", value: "17356" },
    { id: "opt-bbbb-cccc-dddd-eeee", value: "60000" },
    { id: "opt-cccc-dddd-eeee-ffff", value: "56226" },
  ],
  correctAnswerId: "opt-bbbb-cccc-dddd-eeee",
};

export const mockQuestions: Question[] = [
  question1,
  question2,
  question3,
  question4,
];