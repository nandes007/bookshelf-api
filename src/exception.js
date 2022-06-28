class ValidationError extends Error {
  constructor (message) {
    super(message)
    this.name = 'ValidationError'
  }
}

const validateNumberInput = (year, pageCount, readPage) => {
  if (typeof (year) !== 'number') {
    throw new ValidationError('year harus berupa angka')
  }
  if (typeof (pageCount) !== 'number') {
    throw new ValidationError('pageCount harus berupa angka')
  }
  if (typeof (readPage) !== 'number') {
    throw new ValidationError('readPage harus berupa angka')
  }
}

module.exports = validateNumberInput
