Hortalisses = new Mongo.Collection("hortalisses");

var Schemas = {};

Schemas.Hortalissa = new SimpleSchema({
  nom: {
    type: String,
    label: "Nom",
    max: 200
  },
  varietat: {
    type: String,
    label: "Varietat",
    max: 200,
    optional: true
  },
  dataPlantacio: {
    type: Date,
    label: "Data de plantació"
  }
});

Hortalisses.attachSchema(Schemas.Hortalissa);
