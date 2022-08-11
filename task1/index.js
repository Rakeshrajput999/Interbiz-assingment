const readline = require("readline")


const r1 = readline.createInterface({
  input: process.stdin,
  ioutput: process.stdout
})

let logic = (input)=>{
  const notes = [2000, 500, 200, 100, 50]
  const maxCount = {}
  if(input%50 === 0){
      let minCount = {50:Math.floor(input/50)}
      for (let note of notes){
        if(input >= note){
          maxCount[note] = Math.floor(input/note)
          input = input%note
        }
        
      }
      console.log("maximum :" ,maxCount)
      console.log("minimum :", minCount)
  }else{
      console.log("invalid amount, cash less then 50rs in not available ")
  }
}

console.log("Amount:")
r1.question(`Enter Amount?`, (input) => {
  logic(input)
  r1.close()
})