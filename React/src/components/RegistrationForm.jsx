import { useState } from "react";

const emptyForm = {
  name: "",
  regId: "",
  email: "",
  age: "",
  city: "",
  role: "Student",
};

function RegistrationForm() {
  const [formData, setFormData] = useState(emptyForm);
  const [submittedData, setSubmittedData] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedData({ ...formData });
  }

  return (
    <div>
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Registration ID
            <input
              type="text"
              name="regId"
              value={formData.regId}
              onChange={handleChange}
              placeholder="Enter registration ID"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Age
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your age"
              min="1"
              required
            />
          </label>
        </div>
        <div>
          <label>
            City
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter your city"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Role
            <select name="role" value={formData.role} onChange={handleChange}>
              <option value="Student">Student</option>
              <option value="Scholar">Scholar</option>
              <option value="Teacher">Teacher</option>
            </select>
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div >
          <h2>Submitted Details</h2>
          <p>Name: {submittedData.name}</p>
          <p>Registration ID: {submittedData.regId}</p>
          <p>Email: {submittedData.email}</p>
          <p>Age: {submittedData.age}</p>
          <p>City: {submittedData.city}</p>
          <p>Role: {submittedData.role}</p>
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;
