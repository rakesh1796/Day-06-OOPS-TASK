//write a class to calculate the Uber price.

class UberPriceCalculator {
    constructor() {
      this.baseFare = 40;
      this.farePerMinute = 1;
      this.costPerKilometer = 20;
      
    }
  
    calculatePrice(distanceInKilometers, timeInMinutes) {
      // Price calculation
      const costInDistance = this.costPerKilometer * distanceInKilometers;
      const timeCost = this.farePerMinute * timeInMinutes;
      const finalFare = this.baseFare + costInDistance + timeCost;
  
      return finalFare;
    }
  }
  
  //Example
  const calculator = new UberPriceCalculator();
  const distanceInKilometers = 20;
  const timeInMinutes = 45;
  
  const finalCost = calculator.calculatePrice(distanceInKilometers, timeInMinutes);
  console.log(`Your fare for this Uber ride is : Rs/- ${finalCost}`);