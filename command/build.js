import { resolve } from "path";
import path from "path";
import { defineConfig, build } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { fileURLToPath } from "url";
import fsExtra from "fs-extra";
import fs from "fs";
const __filenameNew = fileURLToPath(import.meta.url);

const __dirnameNew = path.dirname(__filenameNew);
// 打包入口文件夹
const entryDir = resolve(__dirnameNew, "../packages");
// 出口文件夹
const outDir = resolve(__dirnameNew, "../lib");
// vite基础配置
const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()],
});
// rollup配置
const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "vue",
    },
  },
};

// 全量打包构建
const buildAll = async () => {
  await build({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: resolve(entryDir, "index.ts"),
        name: "tl-element-components",
        fileName: "tl-element-components",
        formats: ["es", "umd"],
      },
      outDir,
    },
  });
};

// 单组件打包构建
const buildSingle = async (name) => {
  await build({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(entryDir, name),
        name: "index",
        fileName: "index",
        formats: ["es", "umd"],
      },
      outDir: path.resolve(outDir, name),
    },
  });
};
// 每个组件生成package.json
const createPackageJson = (name) => {
  const fileStr = `
    {
        "name":"${name}",
        "main":"index.umd.cjs",
        "module":"index.js",
        "style":"style.css"
    }`;
  // 输出
  fsExtra.outputFile(
    path.resolve(outDir, `${name}/package.json`),
    fileStr,
    "utf-8"
  );
};

// 打包成库
const buildLib = async () => {
  await buildAll();
  //   获取组件名称组成的数组
  const components = fs.readdirSync(entryDir).filter((name) => {
    const componentDir = path.resolve(entryDir, name);
    const isDir = fs.lstatSync(componentDir).isDirectory();
    return isDir && fs.readdirSync(componentDir).includes("index.ts");
  });
  //   循环构建
  for (const name of components) {
    await buildSingle(name);
    createPackageJson(name);
  }
};
buildLib();
