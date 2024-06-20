const { writeFile, readFile } = require("fs");
//nếu không có tham số thứ 2 thì result trả về buffer.
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log("err", err);
    return;
  }
  console.log(result);
  writeFile(
    "./content/subfolder/result-sync.txt",
    "đây là writefile của writefile bất đồng bộ",
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(result);
    }
  );
});
