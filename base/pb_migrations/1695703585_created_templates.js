/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "lvquqcpjtl6188m",
    "created": "2023-09-26 04:46:25.445Z",
    "updated": "2023-09-26 04:46:25.445Z",
    "name": "templates",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wlkvnmyb",
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
      },
      {
        "system": false,
        "id": "rojatalk",
        "name": "version",
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
  const collection = dao.findCollectionByNameOrId("lvquqcpjtl6188m");

  return dao.deleteCollection(collection);
})
