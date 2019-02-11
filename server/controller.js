const dogs = [
  {
    name: "doggo",
    age: 5,
    weight: 100,
    breed: "mut",
    id: 1
  },
  {
    name: "frank",
    age: 3,
    weight: 5,
    breed: "chihuahua",
    id: 2
  },
  {
    name: "good boi",
    age: 3,
    weight: 50,
    breed: "dog",
    id: 3
  }
];

let id = 4;

module.exports = {
  getdogs: (req, res) => {
    res.status(200).send(dogs);
  },
  adddog: (req, res) => {
    const { name, age, weight, breed } = req.body;
    dogs.push({
      name,
      age,
      weight,
      breed,
      id
    });
    id++;
    res.status(200).send(dogs);
  },
  deletedog: (req, res) => {
    const { id } = req.params;

    const index = dogs.findIndex(dog => dog.id == id);

    if (index === -1) {
      return res.status(400).send(dogs);
    } else {
      dogs.splice(index, 1);
    }

    res.status(200).send(dogs);
  },
  editdog: (req, res) => {
    const { id } = req.params;
    const { name, age, weight, breed } = req.body;
    let dogholder = {
      name,
      age,
      weight,
      breed,
      id: +id
    };

    const index = dogs.findIndex(dog => dog.id == id);

    if (index === -1) {
      return res.status(400).send(dogs);
    } else {
      dogs.splice(index, 1, dogholder);
    }

    res.status(200).send(dogs);
  }
};
