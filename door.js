class Door {
    constructor(isOpen) {
        this.isOpen = isOpen;
    }
}

class RemoteControlDevice {
    constructor(isOn) {
        this.isOn = isOn;
    }
}

class Button {
    constructor(isPressed) {
        this.isPressed = isPressed;
    }
}

function OpenDoor(door) {
    door.isOpen = true;
    setTimeout(() => {
        door.isOpen = false;
    }, 12000);
}

function CloseDoor(door) {
    door.isOpen = false;
}

function DoorControl(door, button) {
    setInterval(() => {
        if (button.isPressed) {
            if (door.isOpen) {
                CloseDoor(door);
            }
            else {
                OpenDoor(door);
            }
        }
    }, 10);
}

