// import {
//     createStyleImportPlugin,
//    } from 'vite-plugin-style-import'
//    import { defineConfig } from 'vite';
//    //这个函数可以由 UI库来实现并对外暴露，业务应用中引入进行使用即可
//    export function resolvelibStyleRule() {
//    //这里是有样式文件的组件列表
//     const comps = [
//     'Input',
//     'Button',
//     'Menu', 
//     'Autocomplete', 
//     ]
    
//     return {
//       libraryName: '@ikee-components',
//       esModule: false,
//       resolveStyle: (compName) => {
//         if (comps.includes(compName)) {
//           return `@ikee-components/dist/esm/comps/${compName}/index.css`
//         }
//         return ''
//       }
//     }
//    }
   
//    export default defineConfig(({ mode }) => {
//     return {
//       plugins: [
//        createStyleImportPlugin({
//           libs: [
//             resolvelibStyleRule()
//           ]
//         })
//       ]
//      }
//    })
      
// vite.config.js
import { defineConfig } from 'vite';
import { createStyleImportPlugin } from 'vite-plugin-style-import';

export function resolvelibStyleRule() {
  const comps = [
    'Input',
    'Button',
    'Menu', 
    'Autocomplete',
  ];
  
  return {
    libraryName: '@iKee-components',
    esModule: true,
    resolveStyle: (compName) => {
      switch (compName) {
        case 'Input':
          return `./src/components/Input/Input.scss`; // 指向 Sass 文件
        case 'Button':
          return `./src/components/Button/Button.scss`;
        case 'Menu':
          return `./src/components/Menu/Menu.scss`;
        case 'Autocomplete':
          return `./src/components/Autocomplete/Autocomplete.scss`;
        default:
          return '';
      }
    }
  };
}

export default defineConfig({
  plugins: [
    createStyleImportPlugin({
      libs: [
        resolvelibStyleRule() // 使用自定义样式导入规则
      ]
    })
  ]
});