import sharp from "sharp";
import { readdir, rename, stat, unlink } from "fs/promises";
import path from "path";

const publicDir = path.join(process.cwd(), "public");
const files = (await readdir(publicDir)).filter((f) => f.endsWith(".jpg"));

for (const file of files) {
  const input = path.join(publicDir, file);
  const tmp = `${input}.tmp`;
  const before = (await stat(input)).size;
  const isHero = file === "magaza-dis-gorunum.jpg";
  const maxWidth = isHero ? 1920 : 1200;

  await sharp(input)
    .resize(maxWidth, maxWidth, { fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(tmp);

  await unlink(input);
  await rename(tmp, input);

  const after = (await stat(input)).size;
  console.log(`${file}: ${Math.round(before / 1024)}KB → ${Math.round(after / 1024)}KB`);
}
