/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "cada09hem0k4ivo",
    "created": "2023-09-26 00:54:51.855Z",
    "updated": "2023-09-26 00:54:51.855Z",
    "name": "permissions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "phjrdnde",
        "name": "path",
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
        "id": "mlo5fiwp",
        "name": "type",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("cada09hem0k4ivo");

  return dao.deleteCollection(collection);
})
