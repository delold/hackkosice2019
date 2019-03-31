export const createTransactionModel = (overrides = {}) => ({
  id: 0,
  amount: -120,
  currency: '',
  category: 'Restaurant',
  description: '',
  author_id: 0,
  date: Date.now(),
  location: '',
  type: '', // timer | expense | income
  ...overrides,
})
