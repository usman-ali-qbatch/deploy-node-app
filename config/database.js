import { connection, connect } from 'mongoose';

const { env: { MONGO_URL } } = process;

(function SetupDataBaseConnection() {
  const { readyState } = connection;

  if (
    readyState !== 1 || readyState !== 2
  ) {
    connect(MONGO_URL)
      .then(() => {
        console.log('INFO - MongoDB Database connected.');
      })
      .catch(err => console.log('ERROR - Unable to connect to the database:', err));
  }
}());
