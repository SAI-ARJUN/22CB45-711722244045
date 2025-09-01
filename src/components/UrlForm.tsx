import React, { useState } from "react";

type UrlFormProps = {
  setShortUrl: React.Dispatch<React.SetStateAction<string>>;
};

const UrlForm: React.FC<UrlFormProps> = ({ setShortUrl }) => {
  const [url, setUrl] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setShortUrl("https://short.url/" + btoa(url).slice(0, 6));
    setUrl("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
        required
      />
      <button type="submit">Shorten</button>
    </form>
  );
};

export default UrlForm;