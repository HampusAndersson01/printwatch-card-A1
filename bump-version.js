#!/usr/bin/env node

const fs = require("fs");
const { execSync } = require("child_process");

const args = process.argv.slice(2);
const versionType = args[0] || "patch"; // patch, minor, major

if (!["patch", "minor", "major"].includes(versionType)) {
  console.error("Usage: node bump-version.js [patch|minor|major]");
  process.exit(1);
}

try {
  // Get current version
  const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
  const currentVersion = packageJson.version;

  console.log(`Current version: ${currentVersion}`);

  // Bump version using npm
  execSync(`npm version ${versionType} --no-git-tag-version`, {
    stdio: "inherit",
  });

  // Read new version
  const newPackageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
  const newVersion = newPackageJson.version;

  console.log(`New version: ${newVersion}`);

  // Rebuild with new version
  console.log("Rebuilding project...");
  execSync("npm run build", { stdio: "inherit" });

  // Commit changes
  execSync("git add package.json dist/", { stdio: "inherit" });
  execSync(`git commit -m "Bump version to ${newVersion}"`, {
    stdio: "inherit",
  });

  console.log(`✅ Version bumped from ${currentVersion} to ${newVersion}`);
  console.log("📦 Project rebuilt");
  console.log("💾 Changes committed");
  console.log("");
  console.log("Next steps:");
  console.log("1. git push");
  console.log("2. GitHub Actions will automatically create a release");
} catch (error) {
  console.error("Error:", error.message);
  process.exit(1);
}
