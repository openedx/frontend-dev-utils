# Serve Runtime Config

This tool starts a minimal express server for serving runtime config `.json` files.

## Usage

In an environment with the `frontend-dev-utils` package installed, run

```sh
PORT=1234 devutils-serve-runtime-config
```

to serve all the files in the configured config directory.

> [!NOTE]
> `PORT` is required.

> [!NOTE]
> By default, the directory served is `./runtime-config`. This can be changed by `RUNTIME_CONFIG_DIR`:
> ```sh
> RUNTIME_CONFIG_DIR=/path/to/my/config/dir PORT=1234 devutils-serve-runtime-config
> ```
