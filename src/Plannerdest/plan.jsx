// // export const plan= [
// //   { city: "Jaipur", dailyCost: 1800 },
// //   { city: "Udaipur", dailyCost: 2200 },
// //   { city: "Jaisalmer", dailyCost: 2000 },
// //   { city: "Delhi", dailyCost: 2500 },
// //   { city: "Agra", dailyCost: 1800 },
// //   { city: "Varanasi", dailyCost: 1700 },
// //   { city: "Rishikesh", dailyCost: 1900 },
// //  { city: "Mussoorie", dailyCost: 2200 },
// //   { city: "Nainital", dailyCost: 2200 },
// //   { city: "Shimla", dailyCost: 2500 },
// //   { city: "Manali", dailyCost: 2800 },
// //   { city: "Dharamshala", dailyCost: 2300 },
// //   { city: "Leh", dailyCost: 4000 },
// //   { city: "Srinagar", dailyCost: 3200 },
// //   { city: "Amritsar", dailyCost: 1800 },
// //   { city: "Mumbai", dailyCost: 3500 },
// //   { city: "Goa", dailyCost: 3200 },
// //   { city: "Alibaug", dailyCost: 2600 },
// //   { city: "Mahabaleshwar", dailyCost: 2500 },
// //   { city: "Lonavala", dailyCost: 2200 },
// //   { city: "Hampi", dailyCost: 2000 },
// //   { city: "Mysore", dailyCost: 2200 },
// //   { city: "Coorg", dailyCost: 2600 },
// //   { city: "Ooty", dailyCost: 2500 },
// //   { city: "Munnar", dailyCost: 2600 },
// //   { city: "Alleppey", dailyCost: 2800 },
// //   { city: "Kochi", dailyCost: 2500 },
// //   { city: "Pondicherry", dailyCost: 2400 },
// //   { city: "Mahabalipuram", dailyCost: 2200 },
// //   { city: "Andaman & Nicobar", dailyCost: 5000 }
// // ];
// export const plan = [
//   {
//     city: "Jaipur",
//     dailyCost: 1800,
//     from: ["Delhi", "Mumbai", "Ahmedabad", "Jaipur"]
//   },
//   {
//     city: "Udaipur",
//     dailyCost: 2200,
//     from: ["Delhi", "Mumbai", "Ahmedabad"]
//   },
//   {
//     city: "Jaisalmer",
//     dailyCost: 2000,
//     from: ["Delhi", "Jaipur"]
//   },
//   {
//     city: "Delhi",
//     dailyCost: 2500,
//     from: ["Mumbai", "Jaipur", "Lucknow"]
//   },
//   {
//     city: "Agra",
//     dailyCost: 1800,
//     from: ["Delhi", "Jaipur"]
//   },
//   {
//     city: "Varanasi",
//     dailyCost: 1700,
//     from: ["Delhi", "Lucknow"]
//   },
//   {
//     city: "Rishikesh",
//     dailyCost: 1900,
//     from: ["Delhi", "Chandigarh"]
//   },
//   {
//     city: "Mussoorie",
//     dailyCost: 2200,
//     from: ["Delhi"]
//   },
//   {
//     city: "Nainital",
//     dailyCost: 2200,
//     from: ["Delhi"]
//   },
//   {
//     city: "Shimla",
//     dailyCost: 2500,
//     from: ["Delhi", "Chandigarh"]
//   },
//   {
//     city: "Manali",
//     dailyCost: 2800,
//     from: ["Delhi", "Chandigarh"]
//   },
//   {
//     city: "Dharamshala",
//     dailyCost: 2300,
//     from: ["Delhi"]
//   },
//   {
//     city: "Leh",
//     dailyCost: 4000,
//     from: ["Delhi"]
//   },
//   {
//     city: "Srinagar",
//     dailyCost: 3200,
//     from: ["Delhi"]
//   },
//   {
//     city: "Amritsar",
//     dailyCost: 1800,
//     from: ["Delhi", "Chandigarh"]
//   },
//   {
//     city: "Mumbai",
//     dailyCost: 3500,
//     from: ["Delhi", "Pune"]
//   },
//   {
//     city: "Goa",
//     dailyCost: 3200,
//     from: ["Mumbai", "Pune", "Bengaluru"]
//   },
//   {
//     city: "Alibaug",
//     dailyCost: 2600,
//     from: ["Mumbai"]
//   },
//   {
//     city: "Mahabaleshwar",
//     dailyCost: 2500,
//     from: ["Mumbai", "Pune"]
//   },
//   {
//     city: "Lonavala",
//     dailyCost: 2200,
//     from: ["Mumbai", "Pune"]
//   },
//   {
//     city: "Hampi",
//     dailyCost: 2000,
//     from: ["Bengaluru", "Hyderabad"]
//   },
//   {
//     city: "Mysore",
//     dailyCost: 2200,
//     from: ["Bengaluru"]
//   },
//   {
//     city: "Coorg",
//     dailyCost: 2600,
//     from: ["Bengaluru"]
//   },
//   {
//     city: "Ooty",
//     dailyCost: 2500,
//     from: ["Bengaluru", "Coimbatore"]
//   },
//   {
//     city: "Munnar",
//     dailyCost: 2600,
//     from: ["Kochi"]
//   },
//   {
//     city: "Alleppey",
//     dailyCost: 2800,
//     from: ["Kochi"]
//   },
//   {
//     city: "Kochi",
//     dailyCost: 2500,
//     from: ["Bengaluru", "Chennai"]
//   },
//   {
//     city: "Pondicherry",
//     dailyCost: 2400,
//     from: ["Chennai", "Bengaluru"]
//   },
//   {
//     city: "Mahabalipuram",
//     dailyCost: 2200,
//     from: ["Chennai"]
//   },
//   {
//     city: "Andaman & Nicobar",
//     dailyCost: 5000,
//     from: ["Chennai", "Kolkata"]
//   }
// ];
export const plan = [
  {
    city: "Jaipur",
    food: 500,
    activities: 700,
    hotel: { low: 800, medium: 1800, luxury: 4500 },
    transport: { bus: 500, train: 900, flight: 3000, car: 1500 }
  },
  {
    city: "Udaipur",
    food: 600,
    activities: 900,
    hotel: { low: 1000, medium: 2200, luxury: 5500 },
    transport: { bus: 600, train: 1000, flight: 3500, car: 1800 }
  },
  {
    city: "Jaisalmer",
    food: 550,
    activities: 900,
    hotel: { low: 900, medium: 2000, luxury: 5000 },
    transport: { bus: 700, train: 1000, flight: 3800, car: 2000 }
  },
  {
    city: "Delhi",
    food: 700,
    activities: 900,
    hotel: { low: 1200, medium: 2800, luxury: 7000 },
    transport: { bus: 500, train: 800, flight: 2500, car: 1500 }
  },
  {
    city: "Agra",
    food: 500,
    activities: 700,
    hotel: { low: 900, medium: 1800, luxury: 4500 },
    transport: { bus: 500, train: 900, flight: 3000, car: 1500 }
  },
  {
    city: "Varanasi",
    food: 500,
    activities: 800,
    hotel: { low: 800, medium: 1800, luxury: 4500 },
    transport: { bus: 600, train: 900, flight: 3000, car: 1700 }
  },
  {
    city: "Rishikesh",
    food: 550,
    activities: 1000,
    hotel: { low: 900, medium: 2200, luxury: 5000 },
    transport: { bus: 500, train: 800, flight: 3200, car: 1800 }
  },
  {
    city: "Mussoorie",
    food: 600,
    activities: 1000,
    hotel: { low: 1000, medium: 2400, luxury: 5500 },
    transport: { bus: 600, train: 900, flight: 3500, car: 2000 }
  },
  {
    city: "Nainital",
    food: 600,
    activities: 900,
    hotel: { low: 1000, medium: 2300, luxury: 5200 },
    transport: { bus: 600, train: 900, flight: 3500, car: 2000 }
  },
  {
    city: "Shimla",
    food: 700,
    activities: 1100,
    hotel: { low: 1200, medium: 3000, luxury: 7000 },
    transport: { bus: 700, train: 1000, flight: 4000, car: 2200 }
  },
  {
    city: "Manali",
    food: 700,
    activities: 1300,
    hotel: { low: 1400, medium: 3200, luxury: 7500 },
    transport: { bus: 700, train: 1200, flight: 4500, car: 2500 }
  },
  {
    city: "Dharamshala",
    food: 650,
    activities: 1000,
    hotel: { low: 1100, medium: 2600, luxury: 6000 },
    transport: { bus: 700, train: 1000, flight: 4200, car: 2200 }
  },
  {
    city: "Leh",
    food: 900,
    activities: 1800,
    hotel: { low: 2000, medium: 4500, luxury: 10000 },
    transport: { bus: 1200, train: 0, flight: 7000, car: 3500 }
  },
  {
    city: "Srinagar",
    food: 800,
    activities: 1500,
    hotel: { low: 1800, medium: 4000, luxury: 9000 },
    transport: { bus: 1000, train: 0, flight: 6000, car: 3000 }
  },
  {
    city: "Amritsar",
    food: 550,
    activities: 800,
    hotel: { low: 900, medium: 2000, luxury: 5000 },
    transport: { bus: 500, train: 800, flight: 3000, car: 1700 }
  },
  {
    city: "Mumbai",
    food: 900,
    activities: 1200,
    hotel: { low: 1800, medium: 4500, luxury: 10000 },
    transport: { bus: 600, train: 700, flight: 2500, car: 1800 }
  },
  {
    city: "Goa",
    food: 800,
    activities: 1200,
    hotel: { low: 1500, medium: 3500, luxury: 9000 },
    transport: { bus: 1200, train: 1800, flight: 5000, car: 2500 }
  },
  {
    city: "Alibaug",
    food: 700,
    activities: 1000,
    hotel: { low: 1200, medium: 2800, luxury: 6500 },
    transport: { bus: 700, train: 900, flight: 3500, car: 1800 }
  },
  {
    city: "Mahabaleshwar",
    food: 700,
    activities: 900,
    hotel: { low: 1200, medium: 2800, luxury: 6500 },
    transport: { bus: 700, train: 900, flight: 3500, car: 1800 }
  },
  {
    city: "Lonavala",
    food: 650,
    activities: 800,
    hotel: { low: 1100, medium: 2500, luxury: 6000 },
    transport: { bus: 600, train: 800, flight: 3200, car: 1700 }
  },
  {
    city: "Hampi",
    food: 500,
    activities: 900,
    hotel: { low: 900, medium: 2000, luxury: 4500 },
    transport: { bus: 700, train: 900, flight: 3500, car: 1800 }
  },
  {
    city: "Mysore",
    food: 600,
    activities: 900,
    hotel: { low: 1000, medium: 2200, luxury: 5000 },
    transport: { bus: 700, train: 900, flight: 3500, car: 1800 }
  },
  {
    city: "Coorg",
    food: 700,
    activities: 1200,
    hotel: { low: 1400, medium: 3200, luxury: 7500 },
    transport: { bus: 800, train: 1000, flight: 4000, car: 2200 }
  },
  {
    city: "Ooty",
    food: 700,
    activities: 1100,
    hotel: { low: 1300, medium: 3000, luxury: 7000 },
    transport: { bus: 800, train: 1000, flight: 4000, car: 2200 }
  },
  {
    city: "Munnar",
    food: 700,
    activities: 1200,
    hotel: { low: 1400, medium: 3200, luxury: 7500 },
    transport: { bus: 800, train: 1000, flight: 4200, car: 2200 }
  },
  {
    city: "Alleppey",
    food: 700,
    activities: 1200,
    hotel: { low: 1400, medium: 3200, luxury: 7500 },
    transport: { bus: 800, train: 1000, flight: 4200, car: 2200 }
  },
  {
    city: "Kochi",
    food: 650,
    activities: 1000,
    hotel: { low: 1200, medium: 2800, luxury: 6500 },
    transport: { bus: 700, train: 900, flight: 3800, car: 2000 }
  },
  {
    city: "Pondicherry",
    food: 650,
    activities: 1000,
    hotel: { low: 1200, medium: 2800, luxury: 6500 },
    transport: { bus: 700, train: 900, flight: 3800, car: 2000 }
  },
  {
    city: "Mahabalipuram",
    food: 600,
    activities: 900,
    hotel: { low: 1000, medium: 2500, luxury: 6000 },
    transport: { bus: 700, train: 900, flight: 3500, car: 1800 }
  },
  {
    city: "Andaman & Nicobar",
    food: 1000,
    activities: 2000,
    hotel: { low: 2500, medium: 5000, luxury: 12000 },
    transport: { bus: 0, train: 0, flight: 9000, car: 3500 }
  }
];