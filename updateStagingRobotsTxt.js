const fs = require("fs");
const path = require("path");

const robotsTxtPath = path.join(__dirname, "build", "robots.txt");
const disallowAll = "User-agent: *\nDisallow: /\n";

fs.writeFile(robotsTxtPath, disallowAll, (err) => {
  if (err) {
    console.error("Error updating robots.txt:", err);
    process.exit(1);
  }
  console.log("robots.txt updated for staging.");
});
