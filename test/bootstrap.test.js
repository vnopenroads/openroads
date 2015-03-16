var Sails = require('sails');
require('should');
var _ = require('lodash')
// Global before hook
before(function (done) {
  // Lift Sails with test database
  Sails.lift({
    log: {
      level: 'info'
    }
  }, function(err, sails) {
    if (err) {
      return done(err);
    }
    done(err, sails);
  });
});

// Global after hook
after(function (done) {
  sails.log.info('Destroying changeset 1');

  var nodes, waynodes, ways;
  Nodes.find({changeset_id: 1})
  .then(function(found_nodes) {
    nodes = found_nodes;
    return Way_Nodes.find({node_id: _.pluck(nodes, 'id')})
  })
  .then(function(found_waynodes) {
    waynodes = found_waynodes;
    return Ways.find({id: _.pluck(waynodes, 'way_id')})
  })
  .then(function(found_ways) {
    ways = found_ways;
    sails.log.info(nodes.length + ' nodes')
    sails.log.info(waynodes.length + ' way_nodes')   
    sails.log.info(ways.length + ' ways')
    return Way_Nodes.destroy({node_id: _.pluck(waynodes, 'node_id')})
  })
  .then(Ways.destroy({id: _.pluck(ways, 'id')}))
  .then(function() {
    Nodes.destroy({changeset_id: 1}).exec(function() {
      sails.log.info('Success')
      console.log();
      sails.lower(done);      
    })
  })
  .catch(function(err) {
    console.log(err)
    return done(err)
  })

});