import "module-alias/register";
import app from "src/app";
import env from "src/util/validateEnv";
import * as fs from "fs";
import { join } from "path";
import { Sequelize } from "sequelize-typescript";

const PORT = env.PORT;

async function startServer() {
  try {
    // Connect to Postgres
    const sequelize = new Sequelize({
      models: [__dirname + "/models/*.model.ts"],
      dialect: "postgres",
      host: env.POSTGRES_HOST,
      port: env.POSTGRES_PORT,
      database: env.POSTGRES_DB,
      username: env.POSTGRES_USER,
      password: env.POSTGRES_PASSWORD,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
          ca: fs.readFileSync(join(__dirname, "..", "ca.pem")).toString(),
        },
      },
    });

    // Test DB Connection
    await sequelize.authenticate();

    // Sync models with database
    await sequelize.sync({ alter: true, match: /dev$/ });

    console.log("Database connection established.");

    // Start the Express server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}.`);
    });
  } catch (error) {
    console.error("Server initialization error:", error);
    process.exit(1); // Exit the process with an error code if initialization fails
  }
}

// Start the server
startServer();
