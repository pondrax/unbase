/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k8ed0v6xl9k5m8p")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ljcrll3l",
    "name": "metaAuditee",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lzlh55nm",
    "name": "metaAuditor",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m5dydcun",
    "name": "summary",
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
  const collection = dao.findCollectionByNameOrId("k8ed0v6xl9k5m8p")

  // remove
  collection.schema.removeField("ljcrll3l")

  // remove
  collection.schema.removeField("lzlh55nm")

  // remove
  collection.schema.removeField("m5dydcun")

  return dao.saveCollection(collection)
})
