//declare var require: any;
  alert("hiyasa!");
require.config({
  baseUrl: './js',
  waitSeconds: 45,
  paths: {
    inversify : "../node_modules/inversify/dist/inversify"
  },
  // set cache off (disable in production)

  urlArgs: 'bust=' + (new Date()).getTime()
});