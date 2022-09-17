import { Configuration } from "webpack";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { buildLoaders } from "./buildLoaders";
import { IBuildOptions } from "./types/config";

export function buildWebpackConfig(options: IBuildOptions): Configuration {
  const {mode, paths} = options
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
  };
}
