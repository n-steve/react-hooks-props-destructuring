import React from "react";

function SocialMedia({ links }) {
  return (
    <div>
      <a href={links.github}>{links.github}</a>
      <a href={links.linkedin}>{links.linkedin}</a>
    </div>
  );
}

export default SocialMedia;
