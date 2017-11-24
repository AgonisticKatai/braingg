const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt')

const Player = require('../../../../models/Player')

const { SECRET } = process.env
//console.log(SECRET)

const jwtOptions = {
  secretOrKey: SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

const strategy = new JwtStrategy( jwtOptions, (jwt_payload, done) => {
  console.log(jwt_payload)
  User.findById( jwt_payload.id )
    .then(user => {
      if (user) done(null, user);
      else done(null, false);
    })
    .catch(err => done(err, false) )
})

module.exports = strategy