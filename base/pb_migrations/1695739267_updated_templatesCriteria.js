/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4gk06mtkz5sc8nf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y3d1t5ny",
    "name": "template",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "lvquqcpjtl6188m",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4gk06mtkz5sc8nf")

  // remove
  collection.schema.removeField("y3d1t5ny")

  return dao.saveCollection(collection)
})
