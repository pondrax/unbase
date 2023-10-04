/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("range4u1qxh5t2g")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g3xjyjys",
    "name": "question",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "19d2txocdffjxe5",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("range4u1qxh5t2g")

  // remove
  collection.schema.removeField("g3xjyjys")

  return dao.saveCollection(collection)
})
