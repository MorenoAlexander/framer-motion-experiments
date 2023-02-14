export const remove = (arr, item) => {
  const newArray = [...arr]
  newArray.splice(
    newArr.findIndex((i) => i === item),
    1
  )
  return newArray
}

let newIndex = 0
export const add = (arr, text, style) => {
  newIndex = newIndex + 1
  return [...arr, { id: newIndex, text, style }]
}
