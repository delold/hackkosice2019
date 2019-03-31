export const createTransactionModel = (overrides = {}) => ({
  id: 0,
  amount: -120,
  currency: '',
  category: 'Restaurant',
  description: '',
  currency: 'EUR',
  author_id: 0,
  date: new Date(),
  location: '',
  type: '', // timer | expense | income
  ...overrides,
})
