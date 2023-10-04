/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1zrb3vpohyujrnt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wjvetubk",
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
  const collection = dao.findCollectionByNameOrId("1zrb3vpohyujrnt")

  // remove
  collection.schema.removeField("wjvetubk")

  return dao.saveCollection(collection)
})
