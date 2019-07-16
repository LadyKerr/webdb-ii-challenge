exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          VIN: "HH5256HH2HGFH236",
          make: "Honda",
          model: "Civic",
          mileage: 105000,
          "transmission type": "unknown",
          "title status": "pending"
        },
        {
          VIN: "GFT525JUHJJI5552",
          make: "Nissan",
          model: "Accord",
          mileage: 15000,
          "transmission type": "V6",
          "title status": "own"
        },
        {
          VIN: "WW56852FF52482",
          make: "Mazda",
          model: "HapTown",
          mileage: 120000,
          "transmission type": "V12",
          "title status": "pending"
        }
      ]);
    });
};
