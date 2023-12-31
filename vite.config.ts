import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import { resolve } from 'pathe'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import ViteFonts from 'vite-plugin-fonts'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4000
  },
  resolve: {
    alias: {
      '/@': resolve(__dirname, './src')
    }
  },
  plugins: [
    vue(),
    // https://github.com/jpkleemans/vite-svg-loader
    svgLoader(),
    // https://github.com/antfu/vite-plugin-components
    Components({
      extensions: ['vue'],
      dts: 'src/components.d.ts'
    }),
    // https://github.com/stafyniaksacha/vite-plugin-fonts#readme
    ViteFonts({
      google: {
        families: ['Open Sans', 'Montserrat', 'Fira Sans']
      }
    }),

    Unocss({
      /* options */
    })
  ],

  optimizeDeps: {
    include: ['vue', '@vueuse/core'],
    exclude: ['vue-demi']
  }
})
