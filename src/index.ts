
import { sequelize as Sequelize } from "./modules/dbConnector";
import { Server } from "./modules/server";
import "dotenv-defaults/config";

(async () => {

  //init Sequelize
  let sequelize = Sequelize;

  console.log(`I was started 🚀🚀🚀 at directory: ${__dirname}`);
  
  new Server();


})();
