import js from '@eslint/js' ;
import globals from 'globals';
export default [
{
    files: ['**/*.js'],
    languageOptions: {
        ecmaVersion: 2020,
        globals:  {
            ...globals.builtin,
            ...globals.node,
            ...globals.browser
          }
        },
    rules: {
        ... js.configs.recommended.rules,
        'no-unused-vars': 'warn'

    }
}

]

