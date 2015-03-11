/**
* Way.js
*
* @description :: Represents ways, or roads.
* Schema : : http://chrisnatali.github.io/osm_notes/osm_schema.html#current_ways
*
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attachNodeIDs: function(ways, wayNodes) {
    // For each way, attach every node it contains using the wayNodes server response.
    for (var j = 0, jj = ways.length; j < jj; ++j) {
      var way = ways[j];
      var nodesInWay = [];
      for (var i = 0, ii = wayNodes.length; i < ii; ++i) {
        var wayNode = wayNodes[i];
        if (wayNode.way_id === way.way_id) {
          nodesInWay.push(wayNode);
        }
      }
      way.nodes = nodesInWay;
    }
    return ways;
  },

  attributes: {
    way_id: {
      type: 'integer',
      autoIncrement: true,
      unique: true,
      primaryKey: true,
      numerical: true
    },
    changeset_id: {
      type: 'integer',
      numerical: true,
      model: 'changesets'
    },
    timestamp: {
      type: 'datetime',
      date: true
    },
    visible: {
      type: 'boolean',
      boolean: true
    },
    version: {
      type: 'integer',
      numerical: true
    },

    //Foreign Keys
    // TODO this is the wrong column name, throws an error
    //ways_changeset_id_fkey: {
        //model: 'changesets'
    //}
  },

  //Translate the entity from the XML parser into a proper model
  fromJXEntity: function(entity, create) {
    var model = {
      changeset_id: parseInt(entity.changeset, 10),
      timestamp: new Date(),
      version: parseInt(entity.version, 10) || 0,
      visible: !!entity.visible
    };

    // Don't include an id if we're trying to create a new way.
    if (!create && entity.id) {
      model.way_id = parseInt(entity.id, 10)
    }
    return model;
  }
};

