function hyphenateWords(string) {
  if (!string) return ''
  return string
    .toLowerCase()
    .replace(/[^\w\s-]/gi, '')
    .replace(/\s+/g, '-')
}

export default hyphenateWords