const { execSync } = require('child_process');

try {
    process.chdir('../../../');
    execSync("npx patch-package --patch-dir node_modules/@snowballtools/react-native-lit-patches/patches --error-on-fail", { stdio: 'inherit' });
} catch (error) {
    console.log(error);
}