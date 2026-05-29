import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const dirs = ["app", "components", "lib"].map((d) => path.join(root, d));
const exts = new Set([".js", ".jsx", ".css"]);
// public 根下被直接引用的静态目录
const roots = ["assets", "img"];

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const full = path.join(dir, name);
    if (statSync(full).isDirectory()) walk(full, files);
    else if (exts.has(path.extname(full))) files.push(full);
  }
  return files;
}

let changed = 0;
for (const dir of dirs) {
  for (const file of walk(dir)) {
    const src = readFileSync(file, "utf8");
    let out = src;
    for (const r of roots) {
      // 仅在路径起始处（引号或括号后）替换，避免误伤 /assets/img/ 这类内部子目录
      out = out
        .replaceAll(`"/${r}/`, `"/mmaicc/${r}/`)
        .replaceAll(`'/${r}/`, `'/mmaicc/${r}/`)
        .replaceAll(`(/${r}/`, `(/mmaicc/${r}/`);
    }
    if (out !== src) {
      writeFileSync(file, out);
      changed++;
      console.log("prefixed:", path.relative(root, file));
    }
  }
}
console.log("done, files changed:", changed);
