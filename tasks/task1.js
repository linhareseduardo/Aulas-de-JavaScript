function canExecuteFastAttack(knightIsAwake) {
    if (knightIsAwake == true){
        return false;
    }else{
        return true;
    }
}

function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
    if (knightIsAwake == true || archerIsAwake == true || prisonerIsAwake == true){
        return true;
    }else{
        return false;
    }
}