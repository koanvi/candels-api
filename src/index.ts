
import { sequelize as Sequelize } from "./modules/dbConnector";
import { Server } from "./modules/server";

(async () => {
  try {
    
    //init Sequelize
    let sequelize = Sequelize;
    
    console.log(`I was started 🚀🚀🚀 at directory: ${__dirname}`);
    new Server();

  } catch (error: any) {
    console.error(`❎ ${error?.message}`);
  }
})();
