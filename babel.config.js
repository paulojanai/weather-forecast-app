module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@assets": "./assets",
            "@components": "./src/components",
            "@pages": "./src/pages",
            "@utils": "./src/utils",
            "@services": "./src/services",
            "@theme": "./src/theme",
            "@animated": "./src/animated",
          },
        },
      ],
    ],
  };
};
