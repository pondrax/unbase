/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cada09hem0k4ivo")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "phjrdnde",
    "name": "path",
    "type": "text",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cada09hem0k4ivo")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "phjrdnde",
    "name": "path",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
