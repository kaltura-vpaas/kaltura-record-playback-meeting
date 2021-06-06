var kaltura = require('kaltura-client');
const KalturaClientFactory = require('./kalturaClientFactory');

async function listMedia(adminKs, nameLike) {
    const client = await KalturaClientFactory.getClient(adminKs);

     // *** https://developer.kaltura.com/console/service/media/action/list
     let filter = new kaltura.objects.MediaEntryFilter();
     filter.nameLike = nameLike;
     let pager = new kaltura.objects.FilterPager();
     
     return kaltura.services.media.listAction(filter, pager)
     .execute(client)
     .then(result => {
         console.log(result);
         return result;
     });
}

module.exports = listMedia;