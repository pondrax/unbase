/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1ni6l5j0dbhj5ud")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o9lfzmrj",
    "name": "permissions",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "cada09hem0k4ivo",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1ni6l5j0dbhj5ud")

  // remove
  collection.schema.removeField("o9lfzmrj")

  return dao.saveCollection(collection)
})
