/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "1zrb3vpohyujrnt",
    "created": "2023-09-26 07:28:30.178Z",
    "updated": "2023-09-26 07:28:30.178Z",
    "name": "templatesCategory",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "64pxtrwi",
        "name": "code",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "4r3loory",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("1zrb3vpohyujrnt");

  return dao.deleteCollection(collection);
})
