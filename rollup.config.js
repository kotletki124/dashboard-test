import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

export default {
  input: {
    seed: './typeorm/seeding/index.ts'
  },
  output: {
    dir: '.output/server',
    format: 'es'
  },
  plugins: [
    nodeResolve({
      extensions: ['.js', '.mjs', '.ts'],
      moduleDirectories: ['typeorm']
    }),
    typescript()
  ]
}
