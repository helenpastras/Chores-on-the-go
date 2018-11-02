
module.exports = (sequelize, DataTypes) => {
  const Roommate = sequelize.define('Roommates', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmail: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlphanumeric: true, 
    },
    houseName: DataTypes.STRING, 
    active: {
      type:DataTypes.BOOLEAN,
      is: true
    },
    dateAdded:DataTypes.DATE
  }, 
  {});

    // Class methods for use in passport
    Roommate.authenticate = function(username, password, done) {
      console.log('hi from authenticate');
      console.log(username, password);
  
      Roommate.findOne({ where: {username: username} }).then(function(user) {
        if (!user) { return done(null, false); }
        if (user.password !== password) { return done(null, false); }
        console.log('we found a Roommate, ', Roommate);
        return done(null, user);
      }).catch(function(err) {
        return done(err);
      });
    };
  
    Roommate.serializeUser = function(user, done) {
      console.log('hi from serializeUser');
      done(null, user.id);
    };
  
    Roommate.deserializeUser = function(id, done) {
      console.log('hi from deserializeUser');
      Roommate.findOne({ where: {id: id} }).then(function(Roommate){
        console.log('found user in deserializeUser');
        done(null, Roommate);
      }).catch(function(err) {
        done(err);
      });
    };
  
  Roommate.associate = function(models) {

    models.Chores.belongsTo(models.Roommates)
    models.Houses.hasMany(models.Roommates)

    // associations can be defined here
  };
  return Roommate;
};