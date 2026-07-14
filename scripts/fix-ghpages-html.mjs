import { readFile, writeFile } from "node:fs/promises";

const indexPath = new URL("../dist/index.html", import.meta.url);
const html = await readFile(indexPath, "utf8");

await writeFile(
  indexPath,
  html
    .replaceAll("{{appName}}", "迎胜汇")
    .replaceAll("{{{appAvatar}}}", "/logo.png")
    .replaceAll("{{appAvatar}}", "/logo.png"),
);
