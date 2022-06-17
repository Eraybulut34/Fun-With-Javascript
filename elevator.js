class elevator {
    constructor(currentFloor, direction, isStop, maxWeight) {
        this.currentFloor = currentFloor;
        this.direction = direction;
        this.isStop = isStop;
        this.maxWeight = maxWeight;
    }
}

class Person {
    constructor(name, requestFloor, currentFloor, weight) {
        this.name = name;
        this.requestFloor = requestFloor;
        this.currentFloor = currentFloor;
        this.weight = weight;
    }
}

function calculateWeightForElevatorTrip(elevator, persons) {
    let personsTotalWeight = 0;
    for (let i = 0; i < persons.length; i++) {
        personsTotalWeight += persons[i].weight;
    }
    if (elevator.maxWeight >= personsTotalWeight) {
        return true;
    }
    else {
        return false;
    }
}

function callElevator(elevator, person) {
        if (elevator.currentFloor == person.requestFloor) {
            elevator.isStop = true;
            return ("Elevator is arrived at the requested floor.");
        }
        else if (elevator.currentFloor > person.requestFloor) {
            elevator.direction--;
        }
        else {
            elevator.direction++;
        }
}

function ElevatorTrip(elevator,person){
    if(calculateWeightForElevatorTrip(elevator,person)){
        if(elevator.currentFloor==person.requestFloor){
            return ("Person is already on request floor.")
        }
        else if(elevator.requestFloor>person.requestFloor){
            elevator.direction--;
        }
        else{
            elevator.direction++;
        }
    }
}

var Eray = new Person("Eray", 4, 1, 50);
callElevator(elevator, Eray);
console.log(elevator);
ElevatorTrip(elevator,Eray);
console.log(elevator);

