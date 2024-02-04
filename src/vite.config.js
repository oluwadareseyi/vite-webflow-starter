export default {
  root: "src",
  server: {
    host: "localhost",
    cors: "*",
    hmr: {
      host: "localhost",
      protocol: "ws",
    },
  },
  build: {
    minify: true,
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: "/js/index.js",
      output: {
        format: "umd",
        entryFileNames: "index.js",
        compact: true,
      },
    },
  },
  envDir: "../",
};
