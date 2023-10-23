
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SPOTIFY_APP_CLIENT_ID: string;
	export const SPOTIFY_APP_CLIENT_SECRET: string;
	export const SPOTIFY_BASE_URL: string;
	export const BASE_URL: string;
	export const REDIRECT_URI: string;
	export const SHELL: string;
	export const __ETC_PROFILE_DONE: string;
	export const XDG_CONFIG_DIRS: string;
	export const NIX_BUILD_CORES: string;
	export const TERM_PROGRAM_VERSION: string;
	export const configureFlags: string;
	export const npm_package_devDependencies_eslint_plugin_svelte: string;
	export const NIXPKGS_ALLOW_UNFREE: string;
	export const mesonFlags: string;
	export const TMUX: string;
	export const shell: string;
	export const depsHostHost: string;
	export const NODE: string;
	export const npm_package_devDependencies_tslib: string;
	export const npm_package_dependencies_pkce_gen: string;
	export const npm_package_scripts_check_watch: string;
	export const XDG_DATA_HOME: string;
	export const STRINGS: string;
	export const npm_package_private: string;
	export const XDG_CONFIG_HOME: string;
	export const depsTargetTarget: string;
	export const XCURSOR_PATH: string;
	export const stdenv: string;
	export const builder: string;
	export const NO_AT_BRIDGE: string;
	export const EDITOR: string;
	export const npm_package_scripts_test_unit: string;
	export const npm_package_dependencies_modern_normalize: string;
	export const PWD: string;
	export const NIX_PROFILES: string;
	export const SOURCE_DATE_EPOCH: string;
	export const npm_package_devDependencies_vite: string;
	export const LOGNAME: string;
	export const XDG_SESSION_TYPE: string;
	export const NIX_ENFORCE_NO_NATIVE: string;
	export const NIX_PATH: string;
	export const npm_package_devDependencies__typescript_eslint_parser: string;
	export const PNPM_HOME: string;
	export const npm_package_scripts_build: string;
	export const NIXPKGS_CONFIG: string;
	export const CXX: string;
	export const TEMPDIR: string;
	export const npm_package_devDependencies_prettier: string;
	export const system: string;
	export const npm_package_devDependencies_eslint_config_prettier: string;
	export const HOST_PATH: string;
	export const z: string;
	export const enableParallelBuilding: string;
	export const IN_NIX_SHELL: string;
	export const doInstallCheck: string;
	export const buildCommandPath: string;
	export const HOME: string;
	export const enableParallelChecking: string;
	export const NIX_BINTOOLS: string;
	export const SSH_ASKPASS: string;
	export const LANG: string;
	export const TMUX_TMPDIR: string;
	export const npm_package_devDependencies_typescript: string;
	export const LS_COLORS: string;
	export const depsTargetTargetPropagated: string;
	export const npm_package_version: string;
	export const LF_ICONS: string;
	export const npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
	export const cmakeFlags: string;
	export const outputs: string;
	export const NIX_STORE: string;
	export const npm_package_scripts_test_integration: string;
	export const TMPDIR: string;
	export const LD: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const SSH_CONNECTION: string;
	export const INIT_CWD: string;
	export const READELF: string;
	export const GTK_A11Y: string;
	export const npm_package_scripts_format: string;
	export const BING_COOKIE: string;
	export const npm_package_scripts_preview: string;
	export const XDG_CACHE_HOME: string;
	export const NIX_USER_PROFILE_DIR: string;
	export const INFOPATH: string;
	export const npm_lifecycle_script: string;
	export const doCheck: string;
	export const ANY_NIX_SHELL_PKGS: string;
	export const depsBuildBuild: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const XDG_SESSION_CLASS: string;
	export const npm_package_devDependencies__types_spotify_api: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const GTK_PATH: string;
	export const SRC_ACCESS_TOKEN: string;
	export const SIZE: string;
	export const propagatedNativeBuildInputs: string;
	export const LESSOPEN: string;
	export const npm_package_type: string;
	export const strictDeps: string;
	export const USER: string;
	export const npm_package_devDependencies_vitest: string;
	export const TMUX_PANE: string;
	export const TZDIR: string;
	export const AR: string;
	export const AS: string;
	export const TEMP: string;
	export const NIX_BINTOOLS_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const NIX_BUILD_TOP: string;
	export const NM: string;
	export const PAGER: string;
	export const npm_package_devDependencies_eslint: string;
	export const NIX_CFLAGS_COMPILE: string;
	export const QTWEBKIT_PLUGIN_PATH: string;
	export const patches: string;
	export const passAsFile: string;
	export const __NIXOS_SET_ENVIRONMENT_DONE: string;
	export const buildInputs: string;
	export const XDG_SESSION_ID: string;
	export const LOCALE_ARCHIVE: string;
	export const LESSKEYIN_SYSTEM: string;
	export const npm_config_user_agent: string;
	export const npm_package_scripts_lint: string;
	export const TERMINFO_DIRS: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const XDG_STATE_HOME: string;
	export const npm_execpath: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_devDependencies_svelte: string;
	export const MOZ_PLUGIN_PATH: string;
	export const npm_package_scripts_test: string;
	export const XDG_RUNTIME_DIR: string;
	export const npm_package_devDependencies_svelte_preprocess: string;
	export const npm_package_dependencies__fontsource_metropolis: string;
	export const SSH_CLIENT: string;
	export const NODE_PATH: string;
	export const depsBuildTarget: string;
	export const OBJCOPY: string;
	export const out: string;
	export const npm_package_dependencies__unsass_breakpoint: string;
	export const npm_package_scripts_dev: string;
	export const SCRIPT_FILE: string;
	export const KDEDIRS: string;
	export const STRIP: string;
	export const XDG_DATA_DIRS: string;
	export const npm_package_scripts_check: string;
	export const LIBEXEC_PATH: string;
	export const TMP: string;
	export const OBJDUMP: string;
	export const PATH: string;
	export const propagatedBuildInputs: string;
	export const npm_config_node_gyp: string;
	export const __fish_nixos_env_preinit_sourced: string;
	export const CC: string;
	export const SRC_ENDPOINT: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const NIX_CC: string;
	export const npm_package_devDependencies_sass: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_package_devDependencies__playwright_test: string;
	export const depsBuildTargetPropagated: string;
	export const depsBuildBuildPropagated: string;
	export const NIX_CC_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
	export const SSH_TTY: string;
	export const npm_config_registry: string;
	export const QT_PLUGIN_PATH: string;
	export const NIX_INDENT_MAKE: string;
	export const CONFIG_SHELL: string;
	export const npm_node_execpath: string;
	export const RANLIB: string;
	export const npm_config_engine_strict: string;
	export const NIX_HARDENING_ENABLE: string;
	export const NIX_LDFLAGS: string;
	export const nativeBuildInputs: string;
	export const name: string;
	export const TERM_PROGRAM: string;
	export const depsHostHostPropagated: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SPOTIFY_APP_CLIENT_ID: string;
		SPOTIFY_APP_CLIENT_SECRET: string;
		SPOTIFY_BASE_URL: string;
		BASE_URL: string;
		REDIRECT_URI: string;
		SHELL: string;
		__ETC_PROFILE_DONE: string;
		XDG_CONFIG_DIRS: string;
		NIX_BUILD_CORES: string;
		TERM_PROGRAM_VERSION: string;
		configureFlags: string;
		npm_package_devDependencies_eslint_plugin_svelte: string;
		NIXPKGS_ALLOW_UNFREE: string;
		mesonFlags: string;
		TMUX: string;
		shell: string;
		depsHostHost: string;
		NODE: string;
		npm_package_devDependencies_tslib: string;
		npm_package_dependencies_pkce_gen: string;
		npm_package_scripts_check_watch: string;
		XDG_DATA_HOME: string;
		STRINGS: string;
		npm_package_private: string;
		XDG_CONFIG_HOME: string;
		depsTargetTarget: string;
		XCURSOR_PATH: string;
		stdenv: string;
		builder: string;
		NO_AT_BRIDGE: string;
		EDITOR: string;
		npm_package_scripts_test_unit: string;
		npm_package_dependencies_modern_normalize: string;
		PWD: string;
		NIX_PROFILES: string;
		SOURCE_DATE_EPOCH: string;
		npm_package_devDependencies_vite: string;
		LOGNAME: string;
		XDG_SESSION_TYPE: string;
		NIX_ENFORCE_NO_NATIVE: string;
		NIX_PATH: string;
		npm_package_devDependencies__typescript_eslint_parser: string;
		PNPM_HOME: string;
		npm_package_scripts_build: string;
		NIXPKGS_CONFIG: string;
		CXX: string;
		TEMPDIR: string;
		npm_package_devDependencies_prettier: string;
		system: string;
		npm_package_devDependencies_eslint_config_prettier: string;
		HOST_PATH: string;
		z: string;
		enableParallelBuilding: string;
		IN_NIX_SHELL: string;
		doInstallCheck: string;
		buildCommandPath: string;
		HOME: string;
		enableParallelChecking: string;
		NIX_BINTOOLS: string;
		SSH_ASKPASS: string;
		LANG: string;
		TMUX_TMPDIR: string;
		npm_package_devDependencies_typescript: string;
		LS_COLORS: string;
		depsTargetTargetPropagated: string;
		npm_package_version: string;
		LF_ICONS: string;
		npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
		cmakeFlags: string;
		outputs: string;
		NIX_STORE: string;
		npm_package_scripts_test_integration: string;
		TMPDIR: string;
		LD: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		SSH_CONNECTION: string;
		INIT_CWD: string;
		READELF: string;
		GTK_A11Y: string;
		npm_package_scripts_format: string;
		BING_COOKIE: string;
		npm_package_scripts_preview: string;
		XDG_CACHE_HOME: string;
		NIX_USER_PROFILE_DIR: string;
		INFOPATH: string;
		npm_lifecycle_script: string;
		doCheck: string;
		ANY_NIX_SHELL_PKGS: string;
		depsBuildBuild: string;
		npm_package_devDependencies_svelte_check: string;
		XDG_SESSION_CLASS: string;
		npm_package_devDependencies__types_spotify_api: string;
		TERM: string;
		npm_package_name: string;
		GTK_PATH: string;
		SRC_ACCESS_TOKEN: string;
		SIZE: string;
		propagatedNativeBuildInputs: string;
		LESSOPEN: string;
		npm_package_type: string;
		strictDeps: string;
		USER: string;
		npm_package_devDependencies_vitest: string;
		TMUX_PANE: string;
		TZDIR: string;
		AR: string;
		AS: string;
		TEMP: string;
		NIX_BINTOOLS_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		NIX_BUILD_TOP: string;
		NM: string;
		PAGER: string;
		npm_package_devDependencies_eslint: string;
		NIX_CFLAGS_COMPILE: string;
		QTWEBKIT_PLUGIN_PATH: string;
		patches: string;
		passAsFile: string;
		__NIXOS_SET_ENVIRONMENT_DONE: string;
		buildInputs: string;
		XDG_SESSION_ID: string;
		LOCALE_ARCHIVE: string;
		LESSKEYIN_SYSTEM: string;
		npm_config_user_agent: string;
		npm_package_scripts_lint: string;
		TERMINFO_DIRS: string;
		PNPM_SCRIPT_SRC_DIR: string;
		XDG_STATE_HOME: string;
		npm_execpath: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_devDependencies_svelte: string;
		MOZ_PLUGIN_PATH: string;
		npm_package_scripts_test: string;
		XDG_RUNTIME_DIR: string;
		npm_package_devDependencies_svelte_preprocess: string;
		npm_package_dependencies__fontsource_metropolis: string;
		SSH_CLIENT: string;
		NODE_PATH: string;
		depsBuildTarget: string;
		OBJCOPY: string;
		out: string;
		npm_package_dependencies__unsass_breakpoint: string;
		npm_package_scripts_dev: string;
		SCRIPT_FILE: string;
		KDEDIRS: string;
		STRIP: string;
		XDG_DATA_DIRS: string;
		npm_package_scripts_check: string;
		LIBEXEC_PATH: string;
		TMP: string;
		OBJDUMP: string;
		PATH: string;
		propagatedBuildInputs: string;
		npm_config_node_gyp: string;
		__fish_nixos_env_preinit_sourced: string;
		CC: string;
		SRC_ENDPOINT: string;
		npm_package_devDependencies__sveltejs_kit: string;
		NIX_CC: string;
		npm_package_devDependencies_sass: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_package_devDependencies__playwright_test: string;
		depsBuildTargetPropagated: string;
		depsBuildBuildPropagated: string;
		NIX_CC_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
		SSH_TTY: string;
		npm_config_registry: string;
		QT_PLUGIN_PATH: string;
		NIX_INDENT_MAKE: string;
		CONFIG_SHELL: string;
		npm_node_execpath: string;
		RANLIB: string;
		npm_config_engine_strict: string;
		NIX_HARDENING_ENABLE: string;
		NIX_LDFLAGS: string;
		nativeBuildInputs: string;
		name: string;
		TERM_PROGRAM: string;
		depsHostHostPropagated: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
