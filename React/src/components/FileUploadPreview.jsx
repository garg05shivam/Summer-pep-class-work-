import { useEffect, useRef, useState } from "react";

function FileUploadPreview() {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

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
      <h1>File Upload Preview</h1>

      <div>
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <button type="button" onClick={openFilePicker}>
          Choose File
        </button>
      </div>

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

export default FileUploadPreview;