// vite.config.mts
import { defineConfig } from "file:///C:/Users/user/OneDrive/Desktop/Iris-extension-project/node_modules/.pnpm/vite@5.3.1_@types+node@20.14.10_sass@1.77.6_terser@5.28.1/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/user/OneDrive/Desktop/Iris-extension-project/node_modules/.pnpm/@vitejs+plugin-react-swc@3.7.0_vite@5.3.1_@types+node@20.14.10_sass@1.77.6_terser@5.28.1_/node_modules/@vitejs/plugin-react-swc/index.mjs";
import { resolve } from "path";
import { watchRebuildPlugin } from "file:///C:/Users/user/OneDrive/Desktop/Iris-extension-project/packages/hmr/dist/index.js";
var __vite_injected_original_dirname = "C:\\Users\\user\\OneDrive\\Desktop\\Iris-extension-project\\pages\\devtools-panel";
var rootDir = resolve(__vite_injected_original_dirname);
var srcDir = resolve(rootDir, "src");
var isDev = process.env.__DEV__ === "true";
var isProduction = !isDev;
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@src": srcDir
    }
  },
  base: "",
  plugins: [react(), isDev && watchRebuildPlugin({ refresh: true })],
  publicDir: resolve(rootDir, "public"),
  build: {
    outDir: resolve(rootDir, "..", "..", "dist", "devtools-panel"),
    sourcemap: isDev,
    minify: isProduction,
    reportCompressedSize: isProduction,
    rollupOptions: {
      external: ["chrome"]
    }
  },
  define: {
    "process.env.NODE_ENV": isDev ? `"development"` : `"production"`
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubXRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcdXNlclxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXElyaXMtZXh0ZW5zaW9uLXByb2plY3RcXFxccGFnZXNcXFxcZGV2dG9vbHMtcGFuZWxcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHVzZXJcXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxJcmlzLWV4dGVuc2lvbi1wcm9qZWN0XFxcXHBhZ2VzXFxcXGRldnRvb2xzLXBhbmVsXFxcXHZpdGUuY29uZmlnLm10c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvdXNlci9PbmVEcml2ZS9EZXNrdG9wL0lyaXMtZXh0ZW5zaW9uLXByb2plY3QvcGFnZXMvZGV2dG9vbHMtcGFuZWwvdml0ZS5jb25maWcubXRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2MnO1xyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XHJcbmltcG9ydCB7IHdhdGNoUmVidWlsZFBsdWdpbiB9IGZyb20gJ0BjaHJvbWUtZXh0ZW5zaW9uLWJvaWxlcnBsYXRlL2htcic7XHJcblxyXG5jb25zdCByb290RGlyID0gcmVzb2x2ZShfX2Rpcm5hbWUpO1xyXG5jb25zdCBzcmNEaXIgPSByZXNvbHZlKHJvb3REaXIsICdzcmMnKTtcclxuXHJcbmNvbnN0IGlzRGV2ID0gcHJvY2Vzcy5lbnYuX19ERVZfXyA9PT0gJ3RydWUnO1xyXG5jb25zdCBpc1Byb2R1Y3Rpb24gPSAhaXNEZXY7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICdAc3JjJzogc3JjRGlyLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJhc2U6ICcnLFxyXG4gIHBsdWdpbnM6IFtyZWFjdCgpLCBpc0RldiAmJiB3YXRjaFJlYnVpbGRQbHVnaW4oeyByZWZyZXNoOiB0cnVlIH0pXSxcclxuICBwdWJsaWNEaXI6IHJlc29sdmUocm9vdERpciwgJ3B1YmxpYycpLFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBvdXREaXI6IHJlc29sdmUocm9vdERpciwgJy4uJywgJy4uJywgJ2Rpc3QnLCAnZGV2dG9vbHMtcGFuZWwnKSxcclxuICAgIHNvdXJjZW1hcDogaXNEZXYsXHJcbiAgICBtaW5pZnk6IGlzUHJvZHVjdGlvbixcclxuICAgIHJlcG9ydENvbXByZXNzZWRTaXplOiBpc1Byb2R1Y3Rpb24sXHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIGV4dGVybmFsOiBbJ2Nocm9tZSddLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRlZmluZToge1xyXG4gICAgJ3Byb2Nlc3MuZW52Lk5PREVfRU5WJzogaXNEZXYgPyBgXCJkZXZlbG9wbWVudFwiYCA6IGBcInByb2R1Y3Rpb25cImAsXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBa2EsU0FBUyxvQkFBb0I7QUFDL2IsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsZUFBZTtBQUN4QixTQUFTLDBCQUEwQjtBQUhuQyxJQUFNLG1DQUFtQztBQUt6QyxJQUFNLFVBQVUsUUFBUSxnQ0FBUztBQUNqQyxJQUFNLFNBQVMsUUFBUSxTQUFTLEtBQUs7QUFFckMsSUFBTSxRQUFRLFFBQVEsSUFBSSxZQUFZO0FBQ3RDLElBQU0sZUFBZSxDQUFDO0FBRXRCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLFFBQVE7QUFBQSxJQUNWO0FBQUEsRUFDRjtBQUFBLEVBQ0EsTUFBTTtBQUFBLEVBQ04sU0FBUyxDQUFDLE1BQU0sR0FBRyxTQUFTLG1CQUFtQixFQUFFLFNBQVMsS0FBSyxDQUFDLENBQUM7QUFBQSxFQUNqRSxXQUFXLFFBQVEsU0FBUyxRQUFRO0FBQUEsRUFDcEMsT0FBTztBQUFBLElBQ0wsUUFBUSxRQUFRLFNBQVMsTUFBTSxNQUFNLFFBQVEsZ0JBQWdCO0FBQUEsSUFDN0QsV0FBVztBQUFBLElBQ1gsUUFBUTtBQUFBLElBQ1Isc0JBQXNCO0FBQUEsSUFDdEIsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLFFBQVE7QUFBQSxJQUNyQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLHdCQUF3QixRQUFRLGtCQUFrQjtBQUFBLEVBQ3BEO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
