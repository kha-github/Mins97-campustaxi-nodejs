var mysql = require("mysql");

const fs = require("fs");
const key = JSON.parse(
  fs.readFileSync("./src/config/mysql/secrets_nodejs.json")
);

// export const message_insertExample = (conn: any) => {
//   query(
//     conn,
//     "INSERT INTO `campustaxi_db`.`massage_tb` (`massage`, `room_id`,`created_at`, `massage_type`, `is_deleted`) VALUES ('hi~!', 75, now(), 'NORMAL', false);"
//   );
//   query(conn, "select * from massage_tb");
// };

var db_info = {
  host: key.DATABASE_HOST,
  port: key.DATABASE_PORT,
  user: key.DATABASE_USER,
  password: key.DATABASE_PASSWORD,
  database: key.DATABASE_NAME,
};

// console.log(db_info)

module.exports = {
  init: function () {
    return mysql.createConnection(db_info);
  },
  connect: function (conn) {
    conn.connect(function (err) {
      if (err) console.error("mysql connection error : " + err);
      else {
        console.log("mysql is connected successfully!");
      }
    });
  }
};
