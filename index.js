function produceDrivingRange(blockRange){
  return function ( startingBlock, endingBlock ) {

    let start = parseInt( startingBlock );
    let end = parseInt( endingBlock );
    let distanceTravel = Math.abs( end - start );
    let difference = blockRange - distanceTravel;

    if ( difference > 0 ) {
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage){
  return function(fare){
  return percentage * fare
  }
}

function createDriver(){
  let driverId = 0
  return class {
    constructor(name){
      this.name = name
      this.id =++driverId
      }
    }
  }

