function getMoveName(argMoveId){
    if(argMoveId == 1){
        return 'kamień';
    }
    else if( argMoveId == 2){
        return 'papier';
    }
    else if(argMoveId == 3){
        return 'nożyce';
    }
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
}


let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);
/*
if(randomNumber == 1){
  computerMove = 'kamień';
}

else if(randomNumber == 2){
    computerMove = 'papier';
}

else if(randomNumber == 3){
    computerMove = 'nożyce';
}
*/
printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}

else if(randomNumber == '2'){
    playerMove = 'papier';
}

else if(randomNumber == '3'){
    playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);


if( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis!');
    }

else if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
    }

else if( computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Przegrywasz!');
    }

else if( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Przegrywasz!');
    }

else if( computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis!');
    }

else if( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
    }

else if( computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
    }

else if( computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Przegrywasz!');
    }

else if( computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Remis!');
    }