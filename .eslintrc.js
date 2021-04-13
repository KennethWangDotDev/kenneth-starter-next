module.exports = {
    extends: ['./node_modules/poetic/config/eslint/eslint-config.js'],
    // Add custom rules here
    rules: {
        indent: ['error', 4],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        '@typescript-eslint/explicit-function-return-type': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
    globals: {
        JSX: true,
    },
};
