/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("19d2txocdffjxe5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "i2bojjxs",
    "name": "hint",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("19d2txocdffjxe5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "i2bojjxs",
    "name": "description",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  return dao.saveCollection(collection)
})
