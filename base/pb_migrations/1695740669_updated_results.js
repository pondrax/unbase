/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k8ed0v6xl9k5m8p")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "syouo8n8",
    "name": "organization",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "uyei80hqi00hyxc",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k8ed0v6xl9k5m8p")

  // remove
  collection.schema.removeField("syouo8n8")

  return dao.saveCollection(collection)
})
