// Sephoc Motors Uganda — sample inventory
// Extracted from the cars.co.ug screenshots provided by the client.
// NOTE: several screenshots were too blurry/glare-heavy to read reliably
// (esp. images with the "OLD OUT" stamp and the very low-res page-22 shot) —
// those listings were skipped rather than guessed. Prices are in UGX millions
// as shown on the source listings (e.g. 160 = USh 160,000,000).
// Photos below are placeholders — swap in real licensed photos per car
// (manufacturer press kit or your own photography) via the admin panel.

const CARS = [
  { id: 1, brand: "Mercedes-Benz", model: "GLE350d", year: 2017, type: "SUV", price: 160, transmission: "Automatic", fuel: "Diesel", status: "available" },
  { id: 2, brand: "Land Rover", model: "Range Rover Sport", year: 2017, type: "SUV", price: 195, transmission: "Automatic", fuel: "Petrol", status: "available" },
  { id: 3, brand: "Toyota", model: "Land Cruiser Prado", year: 2018, type: "SUV", price: 190, mileage: "139,164 km", transmission: "Automatic", fuel: "Diesel", status: "available" },
  { id: 4, brand: "Toyota", model: "Land Cruiser Prado", year: 2018, type: "SUV", price: 160, transmission: "Manual", fuel: "Diesel", status: "available" },
  { id: 5, brand: "Toyota", model: "Coaster", year: 2012, type: "Van", price: 197, transmission: "Manual", fuel: "Diesel", status: "available" },
  { id: 6, brand: "Mercedes-Benz", model: "GLC 250", year: 2017, type: "SUV", price: 187, transmission: "Automatic", fuel: "Petrol", status: "available" },
  { id: 7, brand: "Mercedes-Benz", model: "GLE 350d Coupe", year: 2017, type: "SUV", price: 159, transmission: "Automatic", fuel: "Diesel", status: "available" },
  { id: 8, brand: "Mercedes-Benz", model: "GLC 250", year: 2017, type: "SUV", price: 155, transmission: "Automatic", fuel: "Petrol", status: "available" },
  { id: 9, brand: "Audi", model: "Q7", year: 2016, type: "SUV", price: 157, transmission: "Automatic", fuel: "Petrol", status: "available" },
  { id: 10, brand: "Toyota", model: "Hilux Double Cab", year: 2019, type: "Pickup", price: 165, transmission: "Manual", fuel: "Diesel", status: "available" },
  { id: 11, brand: "Toyota", model: "Hilux SR5", year: 2017, type: "Pickup", price: 155.92, transmission: "Automatic", fuel: "Diesel", status: "available" },
  { id: 12, brand: "Mitsubishi", model: "Triton", year: 2022, type: "Pickup", price: 155, mileage: "1,611 km", transmission: "Automatic", fuel: "Diesel", status: "available" },
  { id: 13, brand: "Toyota", model: "Alphard", year: 2016, type: "Van", price: 99, transmission: "Automatic", fuel: "Petrol", status: "available" },
  { id: 14, brand: "Toyota", model: "Alphard", year: 2015, type: "Van", price: 99, transmission: "Automatic", fuel: "Petrol", status: "available" },
  { id: 15, brand: "Mercedes-Benz", model: "ML", year: 2015, type: "SUV", price: 98, transmission: "Automatic", fuel: "Petrol", status: "available" },
  { id: 16, brand: "Mercedes-Benz", model: "ML", year: 2013, type: "SUV", price: 98, transmission: "Automatic", fuel: "Petrol", status: "available" },
  { id: 17, brand: "Mercedes-Benz", model: "ML", year: 2012, type: "SUV", price: 98, transmission: "Automatic", fuel: "Diesel", status: "available" },
  { id: 18, brand: "Mercedes-Benz", model: "ML", year: 2014, type: "SUV", price: 98, transmission: "Automatic", fuel: "Diesel", status: "available" },
  { id: 19, brand: "Mazda", model: "CX-50", year: 2019, type: "SUV", price: 98, transmission: "Automatic", fuel: "Diesel", status: "available" },
  { id: 20, brand: "Subaru", model: "Forester", year: 2018, type: "SUV", price: 98, transmission: "Automatic", fuel: "Petrol", status: "available" },
  { id: 21, brand: "Subaru", model: "Legacy B4", year: 2016, type: "Sedan", price: 50, transmission: "Automatic", fuel: "Petrol", status: "available" },
  { id: 22, brand: "Toyota", model: "Mark X Premium", year: 2013, type: "Sedan", price: 50, transmission: "Automatic", fuel: "Petrol", status: "available" },
  { id: 23, brand: "Mercedes-Benz", model: "B180", year: 2014, type: "Hatchback", price: 49, mileage: "56,321 km", transmission: "Automatic", fuel: "Petrol", status: "available" },
  { id: 24, brand: "Subaru", model: "Legacy", year: 2017, type: "Sedan", price: 48, transmission: "Automatic", fuel: "Petrol", status: "available" },
  { id: 25, brand: "Toyota", model: "Noah SI", year: 2011, type: "Van", price: 48, transmission: "Automatic", fuel: "Petrol", status: "available" },
  { id: 26, brand: "Toyota", model: "Mark X", year: 2010, type: "Sedan", price: 47, transmission: "Automatic", fuel: "Petrol", status: "available" },
  { id: 27, brand: "Toyota", model: "Succeed", year: 2019, type: "Wagon", price: 45, transmission: "Automatic", fuel: "Petrol", status: "available" },
  { id: 28, brand: "Subaru", model: "Legacy", year: 2017, type: "Sedan", price: 45, mileage: "66,900 km", transmission: "Automatic", fuel: "Petrol", status: "available" },
  { id: 29, brand: "Toyota", model: "Noah SI", year: 2011, type: "Van", price: 45, transmission: "Automatic", fuel: "Petrol", status: "available" },
  { id: 30, brand: "Subaru", model: "Impreza", year: 2017, type: "Sedan", price: 44, mileage: "54,263 km", transmission: "Automatic", fuel: "Petrol", status: "available" },
  { id: 31, brand: "Toyota", model: "Noah SI Grade", year: 2011, type: "Van", price: 44, transmission: "Automatic", fuel: "Petrol", status: "available" },
  { id: 32, brand: "Volkswagen", model: "Tiguan", year: 2016, type: "SUV", price: 44, transmission: "Automatic", fuel: "Petrol", status: "available" },
  { id: 33, brand: "Subaru", model: "Forester", year: 2011, type: "SUV", price: 43, transmission: "Automatic", fuel: "Petrol", status: "available" },
  { id: 34, brand: "Toyota", model: "Noah SI", year: 2012, type: "Van", price: 42, transmission: "Automatic", fuel: "Petrol", status: "available" },
  { id: 35, brand: "MINI", model: "Cooper Crossover", year: 2013, type: "Hatchback", price: 42, transmission: "Automatic", fuel: "Petrol", status: "available" },
  { id: 36, brand: "Volkswagen", model: "Golf", year: 2014, type: "Hatchback", price: 40, transmission: "Automatic", fuel: "Petrol", status: "available" },
  { id: 37, brand: "Subaru", model: "Legacy B4", year: 2013, type: "Sedan", price: 38, transmission: "Automatic", fuel: "Petrol", status: "available" },
  { id: 38, brand: "Toyota", model: "Rumion", year: 2012, type: "Wagon", price: 38, transmission: "Automatic", fuel: "Petrol", status: "available" },
];

const BRAND_MODELS = CARS.reduce((acc, car) => {
  acc[car.brand] = acc[car.brand] || new Set();
  acc[car.brand].add(car.model);
  return acc;
}, {});
