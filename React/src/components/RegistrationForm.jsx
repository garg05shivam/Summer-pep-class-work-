import { useEffect, useRef, useState } from "react";

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
  const [submittedData, setSubmittedData] = useState([]);
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedData((currentData) => [...currentData, { ...formData }]);
    setFormData(emptyForm);
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  function handleFileChange(event) {
    const file = event.target.files?.[0] ?? null;
    setSelectedFile(file);
  }

  function openFilePicker() {
    fileInputRef.current?.click();
  }

  useEffect(() => {
    if (!selectedFile || !selectedFile.type.startsWith("image/")) {
      setPreviewUrl("");
      return undefined;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreviewUrl(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  return (
    <div>
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            File
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </label>
          <button type="button" onClick={openFilePicker}>
            Choose File
          </button>
        </div>
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

      {submittedData.length > 0 && (
        <div>
          <h2>Submitted Details</h2>
          {submittedData.map((data, index) => (
            <div key={`${data.regId}-${index}`}>
              <h3>Entry {index + 1}</h3>
              <p>Name: {data.name}</p>
              <p>Registration ID: {data.regId}</p>
              <p>Email: {data.email}</p>
              <p>Age: {data.age}</p>
              <p>City: {data.city}</p>
              <p>Role: {data.role}</p>
            </div>
          ))}
        </div>
      )}

      {selectedFile && selectedFile.type.startsWith("image/") && previewUrl && (
        <div>
          <h2>Selected Image</h2>
          <img
            src={previewUrl}
            alt={selectedFile.name}
            style={{ maxWidth: "250px", display: "block" }}
          />
        </div>
      )}

      {selectedFile && !selectedFile.type.startsWith("image/") && (
        <p>File selected</p>
      )}
    </div>
  );
}

export default RegistrationForm;
