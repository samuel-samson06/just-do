const dateModel = new Date
const day = dateModel.toLocaleDateString('en-US',{weekday:'short'})
const dateStyle = dateModel.toLocaleDateString('en-US',{dateStyle:'long'})

export const today = (`${day} ${dateStyle}`)
export const date = dateModel.toLocaleDateString()
// console.log(date);