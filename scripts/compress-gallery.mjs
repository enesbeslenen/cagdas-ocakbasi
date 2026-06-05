import sharp from "sharp";
import { readdir, rename, stat, unlink } from "fs/promises";
import path from "path";

const publicDir = path.join(process.cwd(), "public");
const files = (await readdir(publicDir)).filter(
  (f) => f.startsWith("yemek-") && f.endsWith(".jpeg"),
);

for (const file of files) {
  const input = path.join(publicDir, file);
  const tmp = `${input}.tmp`;
  const before = (await stat(input)).size;

  await sharp(input)
    .resize(1200, 1200, { fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 78, mozjpeg: true })
    .toFile(tmp);

  await unlink(input);
  await rename(tmp, input);

  const after = (await stat(input)).size;
  console.log(`${file}: ${Math.round(before / 1024)}KB → ${Math.round(after / 1024)}KB`);
}
