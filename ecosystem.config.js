module.exports = {
  apps: [
    {
      name: "Idecore",
      script: "npm",
      args: "npm run start",
      log_date_format: "YYYY-MM-DD HH:mm Z",
      max_memory_restart: '300M'
    },
  ],
};

