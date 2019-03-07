module.exports = {
  src_folders: ['./e2e/tests'],
  output_folder: './e2e/reports',
  disable_colors: false,
  test_workers: false,

  webdriver: {
    start_process: true,
    host: 'localhost',
    port: 9515,
  },

  test_settings: {
    default: {
      webdriver: {
        port: 9515,
        default_path_prefix: '',
        server_path: './driver/chromedriver.exe',
        cli_args: ['--verbose'],
      },
      desiredCapabilities: {
        browserName: 'chrome',
        loggingPrefs: { driver: 'INFO', server: 'OFF', browser: 'INFO' },
      },
    },
  },
}
