migrate((db) => {
  const collection = new Collection({
    "id": "5nloh40k4kxlosb",
    "created": "2023-07-10 13:46:36.472Z",
    "updated": "2023-07-10 13:46:36.472Z",
    "name": "courses",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bwo0hanp",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 5,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "6f2mi316",
        "name": "description",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "1kev9oqx",
        "name": "thumbnail",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": [],
          "protected": false
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
  const collection = dao.findCollectionByNameOrId("5nloh40k4kxlosb");

  return dao.deleteCollection(collection);
})
