const Fs = require("fs");
const Path = require("path");

function copyFolderRecursiveSync(source, target) {
  let files = [];

  // Check if folder needs to be created or integrated
  const targetFolder = Path.join(target, Path.basename(source));
  if (!Fs.existsSync(targetFolder)) {
    Fs.mkdirSync(targetFolder);
  }

  // Copy
  if (Fs.lstatSync(source).isDirectory()) {
    files = Fs.readdirSync(source);
    files.forEach(function (file) {
      const curSource = Path.join(source, file);
      if (Fs.lstatSync(curSource).isDirectory()) {
        copyFolderRecursiveSync(curSource, targetFolder);
      } else {
        Fs.copyFileSync(
          curSource,
          Path.join(targetFolder, Path.basename(curSource))
        );
      }
    });
  }
}

Fs.mkdirSync("./out/presentations/ocaml-road-to-oidc", { recursive: true });
copyFolderRecursiveSync(
  "./presentations/ocaml-road-to-oidc",
  "./out/presentations"
);

Fs.copyFileSync("./out/presentations.html", "./out/presentations/index.html");
