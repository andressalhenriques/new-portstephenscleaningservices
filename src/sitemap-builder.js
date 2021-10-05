const es2015 = require('babel-preset-es2015');
const presetReact = require('babel-preset-react');
require("babel-register")({
  presets: [es2015, presetReact]
});

require.extensions['.png'] = function () {
    return null;
  };


const router = require("./routes").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
  return (
  new Sitemap(router())
  .build("http://portstephenscleaningservices.com.au/")

  .save("../public/sitemap.xml")
  );
}

generateSitemap();
