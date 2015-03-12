
/**
* Nodes.js
*
* @description :: Represents nodes.
* Schema : : http://chrisnatali.github.io/osm_notes/osm_schema.html#current_nodes
*
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  tableName: 'current_nodes',

  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true,
      unique: true,
      primaryKey: true,
      index: true
    },
    latitude: {
      type: 'integer'
    },
    longitude: {
      type: 'integer'
    },
    changeset_id: {
      type: 'integer',
      model: 'changesets'
    },
    visible: {
      type: 'boolean',
    },
    timestamp: {
      type: 'datetime',
    },
    tile: {
      type: 'integer',
      index: true
    },
    version: {
      type: 'integer',
    },
  },

  //Translate the entity from the XML parser into a proper model
  fromJXEntity: function(entity, create) {
    var ratio = GeoInfo.ratio;
    var lat = parseFloat(entity.lat) * ratio | 0;
    var lon = parseFloat(entity.lon) * ratio | 0;

    var model = {
      latitude: lat,
      longitude: lon,
      tile: QuadTile.xy2tile(QuadTile.lon2x(lon), QuadTile.lat2y(lat)),
      changeset_id: parseInt(entity.changeset, 10),
      visible: (entity.visible !== 'false' && entity.visible !== false),
      version: parseInt(entity.version, 10) || 0,
      timestamp: new Date()
    };

    if (!create && entity.id) {
      model.id = parseInt(entity.id, 10);
    }
    return model;
  },

  configureIDs: function(id) {
    console.log(id);
  },
};
