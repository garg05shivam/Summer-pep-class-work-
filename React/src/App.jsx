import FileUploadPreview from "./components/FileUploadPreview";
import RegistrationForm from "./components/RegistrationForm";
import "./App.css";

function App() {
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        alignItems: "flex-start",
        flexWrap: "wrap",
      }}
    >
      <RegistrationForm />
      <FileUploadPreview />
    </div>
  );
}

export default App;
