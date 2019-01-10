export default createRule = (name, param) => {
  name = name.toLowerCase()
  let capitalize = name.charAt(0).toUpperCase() + name.slice(1)
  return {
      ['Webkit' + capitalize]: param,
      ['Moz' + capitalize]: param,
      ['ms' + capitalize]: param,
      ['O' + capitalize]: param,
      [name]: param
  }
}