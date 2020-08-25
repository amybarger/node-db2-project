exports.seed = async function(knex) {
  await knex("car-dealer").insert([
    { make: "Ford", model: "Escape", VIN: "TR293948BS", mileage: "330677" },
    { make: "Kia", model: "Sudan", VIN: "VS578684QV", mileage: "888543" },
    { make: "Toyota", model: "Supra", VIN: "BT858395AR", mileage: "206003" }
  ]);
};
