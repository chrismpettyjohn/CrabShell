import 'dotenv/config';

// HTTP
export const HTTP_PORT = Number(process.env.HTTP_PORT);

// Database
export const DB_HOST = process.env.DB_HOST;
export const DB_USER = process.env.DB_USER;
export const DB_PASS = process.env.DB_PASS;
export const DB_NAME = process.env.DB_NAME;

// User Defaults
export const USER_DEFAULT_DUCKETS = Number(process.env.USER_DEFAULT_DUCKETS);
export const USER_DEFAULT_POINTS = Number(process.env.USER_DEFAULT_POINTS);
export const USER_DEFAULT_CREDITS = Number(process.env.USER_DEFAULT_CREDITS);

export const USER_DEFAULT_HOME_ROOM = Number(
  process.env.USER_DEFAULT_HOME_ROOM,
);

export const USER_DEFAULT_LOOK = process.env.USER_DEFAULT_LOOK;
export const USER_DEFAULT_MOTTO = process.env.USER_DEFAULT_MOTTO;
