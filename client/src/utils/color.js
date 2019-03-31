export const getCategoryImage = (name) => {
  if (name === 'timer') return 'clock outline' 
  if (name === 'expense') return 'angle double down'
  if (name === 'income') return 'angle double up'
}

export const getCategoryColor = (name) => {
  if (name === 'timer') return '#2185d0' 
  if (name === 'expense') return '#d01919'
  if (name === 'income') return '#8BC34A'
}