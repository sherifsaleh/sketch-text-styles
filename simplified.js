const letters = ['A', 'B'];
const numbers = ['1', '2'];
const colors = ['🔴', '🟢'];


const output = [];

letters.forEach(letter => {
  numbers.forEach(number => {
    colors.forEach(color => {
      output.push({
        letter,
        number,
        color
      })
    })
  })
})
console.log(output)


// let output = [
// 	{
// 		"letter": "A", 
// 		"Number": "1",
// 		"Color": "🔴",
// 	},
// 	{
// 		"letter": "B", 
// 		"Number": "1",
// 		"Color": "🔴",
// 	},
// 	{
// 		"letter": "A", 
// 		"Number": "2",
// 		"Color": "🔴",
// 	},
// 	{
// 		"letter": "B", 
// 		"Number": "2",
// 		"Color": "🔴",
// 	},


// 	{
// 		"letter": "A", 
// 		"Number": "1",
// 		"Color": "🟢",
// 	},
// 	{
// 		"letter": "B", 
// 		"Number": "1",
// 		"Color": "🟢",
// 	},
// 	{
// 		"letter": "A", 
// 		"Number": "2",
// 		"Color": "🟢",
// 	},
// 	{
// 		"letter": "B", 
// 		"Number": "2",
// 		"Color": "🟢",
// 	},
// ]
