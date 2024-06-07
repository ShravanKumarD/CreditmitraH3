import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

export default function SEO({ title, description, name, type, keywords, imageUrl, canonicalUrl }) {

  useEffect(()=>{
    console.log(title,description,name,type,keywords,"seo params");
  })
  return (
    <Helmet>
      <title>{title}</title>
      {/* Standard metadata tags */}
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {/* End standard metadata tags */}
      {/* Canonical URL */}
      {/* {canonicalUrl && <link rel="canonical" href={canonicalUrl} />} */}
      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* {imageUrl && <meta property="og:image" content={imageUrl} />} */}
      {/* End Facebook tags */}
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* {imageUrl && <meta name="twitter:image" content={imageUrl} />} */}
      {/* End Twitter tags */}
    </Helmet>
  );
}