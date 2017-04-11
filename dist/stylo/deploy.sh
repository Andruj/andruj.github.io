gulp
cd ../portfolio
cp -R ../stylo src/
rm -rf src/stylo/node_modules
gulp build
cd ../andruj.github.io
cp -R ../portfolio/dist .
git commit -am 'Deploy commit.'
git push
