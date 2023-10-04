/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("range4u1qxh5t2g")

  // remove
  collection.schema.removeField("samhkelp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bqnvrppe",
    "name": "score",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "obi2dr1y",
    "name": "answer",
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
  const collection = dao.findCollectionByNameOrId("range4u1qxh5t2g")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "samhkelp",
    "name": "answerAuditor",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // remove
  collection.schema.removeField("bqnvrppe")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "obi2dr1y",
    "name": "answerAuditee",
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
