import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(fileURLToPath(import.meta.url));
const project = path.join(root, "..");
const assets =
  "C:/Users/enesb/.cursor/projects/c-Users-enesb-Desktop-cagdas-ocakbasi-main/assets";

const sources = {
  gece: path.join(
    assets,
    "c__Users_enesb_AppData_Roaming_Cursor_User_workspaceStorage_bd9f79f8354385f1f915e6db8546b911_images_ma_aza-dis-gece-6f67f6c9-e3fb-459e-81d0-f02372f99060.png",
  ),
  tabela: path.join(
    assets,
    "c__Users_enesb_AppData_Roaming_Cursor_User_workspaceStorage_bd9f79f8354385f1f915e6db8546b911_images_tabela-ceed7f36-1c8d-4d34-9667-afe3c18861ea.png",
  ),
  bahce: path.join(
    assets,
    "c__Users_enesb_AppData_Roaming_Cursor_User_workspaceStorage_bd9f79f8354385f1f915e6db8546b911_images_bah_e-18677e9e-e495-4ca6-b2ce-4ef3a269070b.png",
  ),
};

const publicDir = path.join(project, "public");

await sharp(sources.gece)
  .resize(1920, 1080, { fit: "cover" })
  .webp({ quality: 85 })
  .toFile(path.join(publicDir, "magaza-dis-gece.webp"));

await sharp(sources.gece)
  .resize(1200, 900, { fit: "cover" })
  .webp({ quality: 82 })
  .toFile(path.join(publicDir, "magaza-dis-gece-gallery.webp"));

await sharp(sources.tabela)
  .resize(1200, 1600, { fit: "cover", position: "centre" })
  .jpeg({ quality: 85, mozjpeg: true })
  .toFile(path.join(publicDir, "tabela.jpg"));

await sharp(sources.bahce)
  .resize(1200, 1600, { fit: "cover", position: "centre" })
  .jpeg({ quality: 85, mozjpeg: true })
  .toFile(path.join(publicDir, "bahce.jpg"));

console.log("Imported: magaza-dis-gece.webp, magaza-dis-gece-gallery.webp, tabela.jpg, bahce.jpg");
