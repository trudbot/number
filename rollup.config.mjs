import sizes from 'rollup-plugin-sizes';
import terser from '@rollup/plugin-terser';
export default {
  input: "components/number/index.js",
  output: {
    file: "lib/index.js",
    format: "es"
  },
  plugins: [
    terser(),
    sizes(),
  ]
}