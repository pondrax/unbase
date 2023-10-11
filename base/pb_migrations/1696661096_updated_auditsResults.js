/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("czusyx7m742cyol")

  collection.options = {
    "query": "SELECT \n  t.id,\n  a.id as aid,\n  t.template,\n  a.audit,\n  a.answer,\n  a.finalScore,\n  a.media,\n  a.score,\n  a.validation,\n  t.code,\n  t.question,\n  t.options,\n  t.hint,\n  t.meta\nFROM templatesQuestions t\nLEFT JOIN auditsDetails a ON a.question = t.id "
  }

  // remove
  collection.schema.removeField("psgvnbzg")

  // remove
  collection.schema.removeField("zpdqqhbo")

  // remove
  collection.schema.removeField("c4v8gp5j")

  // remove
  collection.schema.removeField("remhss5l")

  // remove
  collection.schema.removeField("wwr2htw1")

  // remove
  collection.schema.removeField("4axgyr6a")

  // remove
  collection.schema.removeField("mcxv4pu1")

  // remove
  collection.schema.removeField("6eyptbmz")

  // remove
  collection.schema.removeField("2hqyfnbe")

  // remove
  collection.schema.removeField("mlbnnfuz")

  // remove
  collection.schema.removeField("o6aycekx")

  // remove
  collection.schema.removeField("upivwv6j")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "18ie0emb",
    "name": "aid",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "range4u1qxh5t2g",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zjxcihfk",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jsxdzxwz",
    "name": "audit",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "k8ed0v6xl9k5m8p",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xbxsupni",
    "name": "answer",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1vxqytrh",
    "name": "finalScore",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fshzvvhj",
    "name": "media",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 99,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qnubwoxt",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zhzxkvct",
    "name": "validation",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "flzcrau4",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rax8g5aj",
    "name": "question",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m8pf2ppo",
    "name": "options",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dy2mihuu",
    "name": "hint",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tqru54dn",
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
  const collection = dao.findCollectionByNameOrId("czusyx7m742cyol")

  collection.options = {
    "query": "SELECT \n  t.id,\n  a.id as aid,\n  t.template,\n  a.audit,\n  a.answer,\n  a.finalScore,\n  a.media,\n  a.score,\n  t.code,\n  t.question,\n  t.options,\n  t.hint,\n  t.meta\nFROM templatesQuestions t\nLEFT JOIN auditsDetails a ON a.question = t.id "
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "psgvnbzg",
    "name": "aid",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "range4u1qxh5t2g",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zpdqqhbo",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c4v8gp5j",
    "name": "audit",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "k8ed0v6xl9k5m8p",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "remhss5l",
    "name": "answer",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wwr2htw1",
    "name": "finalScore",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4axgyr6a",
    "name": "media",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 99,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mcxv4pu1",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6eyptbmz",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2hqyfnbe",
    "name": "question",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mlbnnfuz",
    "name": "options",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o6aycekx",
    "name": "hint",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "upivwv6j",
    "name": "meta",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("18ie0emb")

  // remove
  collection.schema.removeField("zjxcihfk")

  // remove
  collection.schema.removeField("jsxdzxwz")

  // remove
  collection.schema.removeField("xbxsupni")

  // remove
  collection.schema.removeField("1vxqytrh")

  // remove
  collection.schema.removeField("fshzvvhj")

  // remove
  collection.schema.removeField("qnubwoxt")

  // remove
  collection.schema.removeField("zhzxkvct")

  // remove
  collection.schema.removeField("flzcrau4")

  // remove
  collection.schema.removeField("rax8g5aj")

  // remove
  collection.schema.removeField("m8pf2ppo")

  // remove
  collection.schema.removeField("dy2mihuu")

  // remove
  collection.schema.removeField("tqru54dn")

  return dao.saveCollection(collection)
})
