exports = module.exports = function() {
  
  // https://docs.layer.com/sdk/web/authentication
  // https://docs.layer.com/sdk/ios/authentication
  
  // https://docs.layer.com/reference/server_api/concepts
  // https://docs.layer.com/reference/client_api/authentication.out
  // https://github.com/layerhq/layer-identity-token-nodejs
  // https://github.com/layerhq/instastart-identity-provider
  
  return function translateToLayer(ctx, options, cb) {
    var claims = {};
    
    if (ctx.user) {
      claims.prn = ctx.user.id;
    }
    
    return cb(null, claims);
  };
};

exports['@implements'] = 'http://i.bixbyjs.org/tokens/translateContextFunc';
exports['@dialect'] = 'http://schemas.modulate.io/tokens/jwt/layer';
