const fs = require("fs");
const path = require("path");

const robotsTxtPath = path.join(__dirname, "build", "robots.txt");
const productionContent = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Sitemap: https://creditmitra.in/sitemap.xml
`;

fs.writeFile(robotsTxtPath, productionContent, (err) => {
  if (err) {
    console.error("Error setting up robots.txt for production:", err);
    process.exit(1);
  }
  console.log("robots.txt set up for production.");
});
