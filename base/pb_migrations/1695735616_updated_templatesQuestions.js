/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("19d2txocdffjxe5")

  // remove
  collection.schema.removeField("vztcivts")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qkscbkw1",
    "name": "meta",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("19d2txocdffjxe5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vztcivts",
    "name": "meta",
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

  // remove
  collection.schema.removeField("qkscbkw1")

  return dao.saveCollection(collection)
})
