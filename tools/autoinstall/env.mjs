import path from 'path';

export const APP_ROOT = process.cwd();

export const FRONTEND_BASE_DIR = process.env.FRONTEND_BASE_DIR
  ? path.resolve(process.env.FRONTEND_BASE_DIR)
  : path.resolve('../frontend-base');

export const PACK_DIR = path.resolve(FRONTEND_BASE_DIR, 'pack');
export const TGZ_FILENAME = 'openedx-frontend-base.tgz';
export const TGZ_PATH = path.join(PACK_DIR, TGZ_FILENAME);
export const HOST = '127.0.0.1';

if (!process.env.PORT) {
  throw new Error(
    '[frontend-dev-utils] PORT is required. Example: PORT=1234 devutils-dev-with-autoinstall'
  );
}
export const PORT = Number(process.env.PORT);

export const INSTALL_DEBOUNCE_MS = 350;
