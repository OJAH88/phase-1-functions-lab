function distanceFromHqInBlocks(location) {
  if(location >= 42){
    return location - 42;
  }else if(location < 42){
    return 42 - location;
  }
}

function distanceFromHqInFeet(destination,currentLocation) {
  let distance;
  distanceFromHqInBlocks(currentLocation);
  if (42 >= destination) {
   return distance = ((42 - destination)*264)
} else if (42 < destination){
   return distance = ((destination - 42)*264)
}
}

function distanceTravelledInFeet(startPoint, endPoint) {
  if (startPoint >= endPoint) {
    return ((startPoint - endPoint)*264)
 } else if (startPoint < endPoint){
    return ((endPoint - startPoint)*264)
 }
}

function calculatesFarePrice(stBl, enBl) {
  const distance = distanceTravelledInFeet(stBl,enBl)
  if (distance <= 400) {
      return 0
  } else if (distance <= 2000) {
      return (distance - 400) * 0.02
  } else if (distance <= 2500){
      return 25 
  } else {
      return 'cannot travel that far'
  }
}
