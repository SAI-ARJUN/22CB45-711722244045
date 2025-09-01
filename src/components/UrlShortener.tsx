import React, { useState } from "react";
import UrlForm from "./UrlForm";

const UrlShortener: React.FC = () => {
  const [shortUrl, setShortUrl] = useState<string>("");

  return (
    <div>
      <h1>URL Shortener</h1>
      <UrlForm setShortUrl={setShortUrl} />
      {shortUrl && (
        <div className="result">
          <p>Shortened URL: {shortUrl}</p>
        </div>
      )}
    </div>
  );
};

export default UrlShortener;