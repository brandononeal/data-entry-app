import { useState, useEffect } from "react";
import axios from "axios";

const initialFormValues = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
};

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [people, setPeople] = useState();

  const handleChanges = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const addPerson = (e) => {
    axios
      .post("http://localhost:5000/api/people", formValues)
      .then(() => {
        console.log("Success!");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/people")
      .then((res) => {
        setPeople(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!people) return <h4>Loading...</h4>;

  return (
    <div className="App">
      <h1>Data Entry App</h1>
      <form onSubmit={addPerson}>
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={formValues.first_name}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={formValues.last_name}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formValues.email}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formValues.phone}
          onChange={handleChanges}
        />
        <button>Save</button>
      </form>
      {people.map((person) => {
        return (
          <div>
            <h2>
              {person.first_name} {person.last_name}
            </h2>
            <p>{person.email}</p>
            <p>{person.phone}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
