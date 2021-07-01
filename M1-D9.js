window.onload = function(){
        generateBingoBoard()
    }

const generateBingoBoard = function(){
    let bingoContainerNode = document.getElementById("bingo-container")

    for (let bingoNumber = 1; bingoNumber <= 76; bingoNumber++) {
        let newBingoNode = document.createElement("div")
        newBingoNode.innerText = bingoNumber
        newBingoNode.classList.add("bingoNumber") 
        bingoContainerNode.appendChild(newBingoNode)
    }
}

const randomNumberGenerator = function(maximum, numberOfOutputs) {

    let arr = []
    for (let i = 1; i <= maximum; i++) {
      arr.push(i)
    }
  
    let result = [];
  
    for (let i = 1; i <= numberOfOutputs; i++) {
      const random = Math.floor(Math.random() * (maximum - i));
      result.push(arr[random]);
      arr[random] = arr[maximum - i];
    }  
    return result;
  }

const generateUsersBoard = function(){
    let bingoContainerNode = document.getElementById("userBingo-container")
    if (document.getElementById("userBingo-container").firstChild === null){
        let generatedRandomNumber = randomNumberGenerator(76, document.getElementById('userNumber').value)
            for (let bingoNumber = 0; bingoNumber < document.getElementById('userNumber').value; bingoNumber++) {
            let newBingoNode = document.createElement("div")
            newBingoNode.innerText = generatedRandomNumber[bingoNumber]
            newBingoNode.classList.add("userBingoNumber") 
            bingoContainerNode.appendChild(newBingoNode)
            }
        let userNumbers = document.getElementsByClassName('userBingoNumber')
        let bingoBoardNumbers = document.getElementsByClassName('bingoNumber')
        for (let i = 0; i < bingoBoardNumbers.length; i++){
            for (let j = 0; j < userNumbers.length; j++){
                if (bingoBoardNumbers[i].innerText === userNumbers[j].innerText){
                    bingoBoardNumbers[i].classList.add("highlighted") 
                }
            }
        }
    }
    else alert("User's bingo board size already selected, to select a new size please refresh the page!")
}