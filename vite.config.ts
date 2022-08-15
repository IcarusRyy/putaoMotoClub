import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import vitePluginImp from "vite-plugin-imp"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name) => `antd/es/${name}/style/index.less`,
        },
      ],
    }),
  ],
  resolve: {
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
    alias: {
      "@": "/src",
    },
  },
  css: {
    // css 预处理器
    preprocessorOptions: {
      less: {
        // 支持内联 javascript
        javascriptEnabled: true,
      },
      scss: {
        /*
				引入var.scss全局预定义变量，
				如果引入多个文件，
				可以使用
				'@import "@/assets/scss/globalVariable1.scss";@import "@/assets/scss/globalVariable2.scss";'
				这种格式
				 */
        additionalData: `@import "@/styles/global.scss";`,
      },
    },
  },
})
