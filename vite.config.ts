import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import vitePluginImp from "vite-plugin-imp"
import eslintPlugin from "vite-plugin-eslint"
import autoprefixer from 'autoprefixer'
import legacy from '@vitejs/plugin-legacy'
import reactRefresh from '@vitejs/plugin-react-refresh'
// https://vitejs.dev/config/
export default defineConfig({
  publicDir:'public',
  plugins: [
    reactRefresh(),
    react(),
    // 配置eslintPlugin
    eslintPlugin({
      cache: false,
      include: ["jsx", "tsx", "js", "ts"],
    }),
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name) => `antd/es/${name}/style/index.less`,
        },
      ],
    }),
    // 浏览器兼容
     process.env.NODE_ENV === "production" &&legacy({
      targets: [
        "Android > 39",
        "Chrome >= 60",
        "Safari >= 10.1",
        "iOS >= 10.3",
        "Firefox >= 54",
        "Edge >= 15",
        "ie >= 11",
      ],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    })
  ],
  server: {
    host: "localhost",
    port: 8000,
    cors: true, // 为开发服务器配置CORS，默认启用并允许任何源
    open: false, // 服务启动的时候不自动在浏览器中打开应用
    strictPort: false, // 设置为true时端口被占用则直接退出，不会尝试下一个可用端口
    force: true, // 是否强制依赖预构建
    hmr: true, // 禁用或配置HMR连接
  },
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
    postcss:{
      plugins:[
        // 给css添加前缀
        autoprefixer()
      ]
    }
  },
  // 打包配置
  build: {
    // 浏览器 兼容性 "esnext" | "modules"
    target: "modules",
    // 制定输出路径
    outDir: "dist",
    // 生成静态资源的存放路径
    assetsDir: "assets",
    // 小于此阀值的导入或引用资源将内联为 base64 编码， 以避免额外的 http 请求。 设置为0可以完全禁用此项
    assetsInlineLimit: 4096,
    // 启用/禁用 CSS 代码拆分
    cssCodeSplit: true,
    // 构建后是否生成source map文件
    sourcemap: false,
    // 自定义底层的 Rollup 打包配置
    rollupOptions: {},
    //@rollup/plugin-commonjs 插件的选项
    commonjsOptions: {},
    //当设置为 true，构建后将会生成 manifest.json 文件
    manifest: false,
    // 设置为 false 可以禁用最小化混淆，
    // 或是用来指定使用哪种混淆器
    // boolean | 'terser' | 'esbuild'
    minify: "terser", //terser 构建后文件体积更小
    //传递给 Terser 的更多 minify 选项。
    terserOptions: {
       compress:{
        drop_console:true,
        drop_debugger:true
      }
    },
    //设置为 false 来禁用将构建后的文件写入磁盘
    write: true,
    //默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。
    emptyOutDir: true,
    //chunk 大小警告的限制
    chunkSizeWarningLimit: 500,
  },
})
