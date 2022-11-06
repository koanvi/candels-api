
import { sequelize as Sequelize } from "./modules/dbConnector";
import { Server } from "./modules/server";

(async () => {
  try {

    let sequelize = Sequelize;

    console.log(`I am started 🚀🚀🚀`);
    console.log(`at directory: ${__dirname}`);

    new Server();

  } catch (error: any) {
    console.error(`❎ ${error?.message}`);
  }
})();
