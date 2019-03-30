export const createTransactionModel = (overrides = {}) => ({
  id: 0,
  amount: -120,
  currency: 'EUR',
  category: 'Restaurant',
  description: 'You are not ready yet',
  author_id: 0,
  date: '2019-03-30 20:12:12',
  location: 'Slovakia',
  type: 'timer', // timer | expense | income
  ...overrides,
})
