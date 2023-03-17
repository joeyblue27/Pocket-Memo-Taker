const util = require("util");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const readMemo = util.promisify(fs.readFile);
const writeMemo = util.promisify(fs.writeFile);

class onDisk {
  write(memo) {
    return writeMemo("db/db.json", JSON.stringify(memo));
  }

  read() {
    return readMemo("db/db.json", "utf8");
  }

  retrieveMemo() {
    return this.read().then((memos) => {
      let parsedMemos;
      try {
        parsedMemos = [].concat(JSON.parse(memos));
      } catch (err) {
        parsedMemos = [];
      }
      return parsedMemos;
    });
  }

  addMemo(memo) {
    const { title, text } = memo;

    const newMemo = { title, text, id: uuidv4() };

    return this.retrieveMemo()
      .then((memos) => [...memos, newMemo])
      .then((updated) => this.write(updated))
      .then(() => newMemo);
  }

  deleteMemo(id) {
    return this.retrieveMemo()
      .then((memos) => memos.filter((memo) => memo.id !== id))
      .then((filterMemos) => this.write(filterMemos));
  }
}

module.exports = new onDisk();
