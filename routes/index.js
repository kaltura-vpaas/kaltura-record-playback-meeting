var express = require('express');
var router = express.Router();
var createRoom = require('../lib/createRoom');
var joinRoom = require('../lib/joinRoom');
var listMedia = require('../lib/mediaList');
var kaltura = require('kaltura-client');
const { v4: uuidv4 } = require('uuid');

const KalturaClientFactory = require('../lib/kalturaClientFactory');

/* GET home page. */
router.get('/', async function (req, res, next) {
  let adminKs = await KalturaClientFactory.getKS(process.env.KALTURA_USER_ID,
    { type: kaltura.enums.SessionType.ADMIN });
  if (req.cookies.adhoc_uuid) {
    let media = await listMedia(adminKs, req.cookies.adhoc_uuid);
    var ret;
    if (media.totalCount > 0) {
      ret = { recorded: media.objects[0].id }
    }
  }

  res.render('index', ret);
});

/* POST */
router.post('/', async function (req, res, next) {
  let adminKs = await KalturaClientFactory.getKS(process.env.KALTURA_USER_ID,
    { type: kaltura.enums.SessionType.ADMIN });

  var adhocUUID = uuidv4();
  //uuid will be stripped of - in Kaltura system. Strip now
  //so the correct string can be searched for.
  console.log(adhocUUID);
  adhocUUID = adhocUUID.replaceAll("-", "");
  res.cookie('adhoc_uuid', adhocUUID);

  let room = await createRoom(adminKs, req.body.question + " " + adhocUUID);

  let adminRoom = await joinRoom(null, room.id,
    true,
    "Admin Name",
    "Admin Last Name",
    "admin@admin.admin");

  let studentRoom = await joinRoom(null, room.id,
    false,
    req.body.firstName,
    req.body.lastName,
    req.body.email);

  res.render('start', {
    adminUrl: adminRoom,
    studentUrl: studentRoom
  });
});

module.exports = router;
