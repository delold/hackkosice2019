export const createTransactionModel = (overrides = {}) => ({
  id: 0,
  amount: -120,
  currency: 'EUR',
  category: 'Restaurant',
  description: '',
  author_id: 0,
  date: new Date(),
  location: '',
  type: '', // timer | expense | income
  ...overrides,
})
