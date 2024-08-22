import { dirname } from "path";
import { fileURLToPath } from "url";

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const rootPath = dirname(__filename);

export default rootPath;
