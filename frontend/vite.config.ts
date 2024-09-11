import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

type ViteConfigInput = {
  mode: string,
  command: string
}

// https://vitejs.dev/config/
export default (args: ViteConfigInput) => {
  const generateScopedName = args.mode === 'production' ?
    "[hash:base64:5]" :
    "[name]_[local]_[hash:base64:2]"

  return defineConfig({
    plugins: [react()],
    css: {
      modules:{
        localsConvention: 'camelCaseOnly',
        generateScopedName
      }
    }
  })
}
