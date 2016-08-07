/* Whether to return results in xml or json */
const commonTargetXml = 'xml';
const commonTargetJson = 'json';
/* The platform to return results for */
const commonPlatformDotcom = 'dotcom';
const commonPlatformMobile = 'mobile';
const commonPlatformAndroid = 'android';
const commonPlatformSamsung = 'samsung';
const commonPlatformPs3 = 'ps3';
const commonPlatformYouview = 'youview';
/* The target screen-size */
const commonScreensize = 'screensize';
const commonScreensizeBig = 'screensize=big';
const commonScreensizeSmall = 'screensize=small';
/* The ITV broadcaster to return results for */
const commonBroadcaster = 'broadcaster';
const commonBroadcasterItv = 'broadcaster=itv';
const commonBroadcasterStv = 'broadcaster=stv';
const commonBroadcasterUtv = 'broadcaster=utv';
const commonBroadcasterChannel = 'broadcaster=channel';
const commonBroadcasterUnknown = 'broadcaster=unknown';
/* The channel name to return results for */
const commonChannelnameItv1 = 'itv1';
const commonChannelnameItv2 = 'itv2';
const commonChannelnameItv3 = 'itv3';
const commonChannelnameItv4 = 'itv4';
const commonChannelnameItvbe = 'itvbe';
const commonChannelnameCitv = 'citv';

/* Get Mercury programme details */
function getApiEpisodeProgramme(target,platform,programmeid){
  var p = '/api/{target}/{platform}/Episode/Programme/{programmeId}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  p = p.replace('{programmeId}',programmeid);
  return p;
}
/* The programme id to find by */

/* Get Mercury Episode by Date */
function getApiEpisodeBydate(target,platform,year,month,day){
  var p = '/api/{target}/{platform}/Episode/ByDate/{year}/{month}/{day}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  p = p.replace('{year}',year);
  p = p.replace('{month}',month);
  p = p.replace('{day}',day);
  return p;
}
/* The year to return results for */
/* The month to return results for */
/* The day to return results for */

/* Get Mercury audio-described (limited) */
function getApiProgrammePerchannelAd(target,platform,channelname,resultcount){
  var p = '/api/{target}/{platform}/programme/perchannel/AD/{channelName}/{resultCount}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  p = p.replace('{channelName}',channelname);
  p = p.replace('{resultCount}',resultcount);
  return p;
}
/* The number of results to return */

/* Get Mercury search */
function getApiProgrammeSearch(target,platform,searchterm){
  var p = '/api/{target}/{platform}/Programme/Search/{searchTerm}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  p = p.replace('{searchTerm}',searchterm);
  return p;
}
/* The search term to search by */

/* Get Mercury most-watched */
function getApiEpisodeMostwatched(target,platform){
  var p = '/api/{target}/{platform}/Episode/MostWatched';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  return p;
}

/* Get Mercury per channel */
function getApiProgrammePerchannel(target,platform,channelname){
  var p = '/api/{target}/{platform}/Programme/PerChannel/{channelName}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  p = p.replace('{channelName}',channelname);
  return p;
}

/* Get Mercury episode index */
function getApiEpisodeIndex(target,platform,episodeid){
  var p = '/api/{target}/{platform}/Episode/index/{episodeId}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  p = p.replace('{episodeId}',episodeid);
  return p;
}
/* The episode id to find by */

/* Get Mercury schedule today */
function getApiWhatsonscheduleToday(target,platform){
  var p = '/api/{target}/{platform}/whatsonschedule/today';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  return p;
}

/* Get Mercury audio-described */
function getApiProgrammePerchannelAd2(target,platform,channelname){
  var p = '/api/{target}/{platform}/programme/perchannel/AD/{channelName}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  p = p.replace('{channelName}',channelname);
  return p;
}

/* Get Mercury error log digest */
const getErrorlogAspxDigestrss = '//errorlog.aspx/digestrss';

/* Get Mercury episode/programme */
function getApiEpisodeProgramme2(target,platform,episodeid){
  var p = '/api/{target}/{platform}/episode/programme/{episodeId}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  p = p.replace('{episodeId}',episodeid);
  return p;
}
/* The episode id to find by */

/* Get Mercury Postcode */
function getApiPostcode(target,postcode){
  var p = '/api/{target}/postcode/{postcode}';
  p = p.replace('{target}',target);
  p = p.replace('{postcode}',postcode);
  return p;
}
/* The postcode to search by */

/* Get Mercury schedule by date */
function getApiWhatsonschedule(target,platform,date){
  var p = '/api/{target}/{platform}/whatsonschedule/{date}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  p = p.replace('{date}',date);
  return p;
}
/* The date to return the schedule for (format yyyymmdd) */

/* Get Mercury error log download */
const getErrorlogAspxDownload = '//errorlog.aspx/download';

/* Get Mercury programme index */
function getApiProgrammeIndex(target,platform,programmeid){
  var p = '/api/{target}/{platform}/programme/index/{programmeId}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  p = p.replace('{programmeId}',programmeid);
  return p;
}
/* The programme id to find by */

/* Get Mercury crucial */
function getApiEpisodeCrucial(target,platform){
  var p = '/api/{target}/{platform}/Episode/Crucial';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  return p;
}

/* Get Mercury schedule yesterday */
function getApiWhatsonscheduleYesterday(target,platform){
  var p = '/api/{target}/{platform}/whatsonschedule/yesterday';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  return p;
}

/* Get Mercury error log */
const getErrorlogAspxRss = '//errorlog.aspx/rss';

/* Get Mercury current schedule */
function getApiSchedule(target,platform){
  var p = '/api/{target}/{platform}/schedule';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  return p;
}

/* Get Mercury last week */
function getApiLastweek(target,platform){
  var p = '/api/{target}/{platform}/lastweek';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  return p;
}

/* Get Mercury top ten */
function getApiEpisodeTopten(target,platform){
  var p = '/api/{target}/{platform}/Episode/TopTen';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  return p;
}

/* Get Mercury per channel (limited) */
function getApiProgrammePerchannel2(target,platform,channelname,resultcount){
  var p = '/api/{target}/{platform}/Programme/PerChannel/{channelName}/{resultCount}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  p = p.replace('{channelName}',channelname);
  p = p.replace('{resultCount}',resultcount);
  return p;
}
/* The number of results to return */

/* Get Mercury Search AtoZ */
function getApiProgrammeSearchatoz(target,platform,characterfilter){
  var p = '/api/{target}/{platform}/Programme/SearchAtoZ/{characterFilter}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  p = p.replace('{characterFilter}',characterfilter);
  return p;
}
/* The initial character to filter by */

/* Get Mercury Menu */
function getApi(target,platform){
  var p = '/api/{target}/{platform}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  return p;
}

/* Get Mercury image by programme id */
function getProgrammeImageJpg(platform,programmeid){
  var p = '/{platform}/programme/{programmeId}/image.jpg';
  p = p.replace('{platform}',platform);
  p = p.replace('{programmeId}',programmeid);
  return p;
}
/* Width in pixels */
const getProgrammeImageJpgW = 'w';
/* Height in pixels */
const getProgrammeImageJpgH = 'h';
/* The programme id to find by */

/* Get Mercury image by production id */
function getProductionImage(platform){
  var p = '/{platform}/production/image';
  p = p.replace('{platform}',platform);
  return p;
}
/* Width in pixels */
const getProductionImageW = 'w';
/* Height in pixels */
const getProductionImageH = 'h';
/* Quality */
const getProductionImageQuality = 'quality';
/* The image format to return */
const getProductionImageFormat = 'format';
/* The production id to find by */
const getProductionImageProductionid = 'productionId';

/* Get Mercury BBC Interlinking */
function getLinking(yyyymmdd){
  var p = '/linking/{yyyymmdd}';
  p = p.replace('{yyyymmdd}',yyyymmdd);
  return p;
}
/* The date to retrieve interlinking data for */

/* Get Mercury carousel */
function getApiEpisodeCarousel(target,platform){
  var p = '/api/{target}/{platform}/Episode/Carousel';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  return p;
}

/* Get Mercury image by episodeId */
function getEpisodeImageJpg(platform,episodeid){
  var p = '/{platform}/episode/{episodeId}/image.jpg';
  p = p.replace('{platform}',platform);
  p = p.replace('{episodeId}',episodeid);
  return p;
}
/* The episode id to find by */
/* Width in pixels */
const getEpisodeImageJpgW = 'w';
/* Height in pixels */
const getEpisodeImageJpgH = 'h';

/* Get Mercury Reverse Geocode */
function getApiGeoReversegeolookup(lat,long){
  var p = '/api/geo/reversegeolookup/{lat}/{long}';
  p = p.replace('{lat}',lat);
  p = p.replace('{long}',long);
  return p;
}
/* Lattitude */
/* Longitude */

module.exports = {
  commonTargetXml : commonTargetXml,
  commonTargetJson : commonTargetJson,
  commonPlatformDotcom : commonPlatformDotcom,
  commonPlatformMobile : commonPlatformMobile,
  commonPlatformAndroid : commonPlatformAndroid,
  commonPlatformSamsung : commonPlatformSamsung,
  commonPlatformPs3 : commonPlatformPs3,
  commonPlatformYouview : commonPlatformYouview,
  commonScreensize : commonScreensize,
  commonScreensizeBig : commonScreensizeBig,
  commonScreensizeSmall : commonScreensizeSmall,
  commonBroadcaster : commonBroadcaster,
  commonBroadcasterItv : commonBroadcasterItv,
  commonBroadcasterStv : commonBroadcasterStv,
  commonBroadcasterUtv : commonBroadcasterUtv,
  commonBroadcasterChannel : commonBroadcasterChannel,
  commonBroadcasterUnknown : commonBroadcasterUnknown,
  commonChannelnameItv1 : commonChannelnameItv1,
  commonChannelnameItv2 : commonChannelnameItv2,
  commonChannelnameItv3 : commonChannelnameItv3,
  commonChannelnameItv4 : commonChannelnameItv4,
  commonChannelnameItvbe : commonChannelnameItvbe,
  commonChannelnameCitv : commonChannelnameCitv,
  getApiEpisodeProgramme : getApiEpisodeProgramme,
  getApiEpisodeBydate : getApiEpisodeBydate,
  getApiProgrammePerchannelAd : getApiProgrammePerchannelAd,
  getApiProgrammeSearch : getApiProgrammeSearch,
  getApiEpisodeMostwatched : getApiEpisodeMostwatched,
  getApiProgrammePerchannel : getApiProgrammePerchannel,
  getApiEpisodeIndex : getApiEpisodeIndex,
  getApiWhatsonscheduleToday : getApiWhatsonscheduleToday,
  getApiProgrammePerchannelAd2 : getApiProgrammePerchannelAd2,
  getErrorlogAspxDigestrss : getErrorlogAspxDigestrss,
  getApiEpisodeProgramme2 : getApiEpisodeProgramme2,
  getApiPostcode : getApiPostcode,
  getApiWhatsonschedule : getApiWhatsonschedule,
  getErrorlogAspxDownload : getErrorlogAspxDownload,
  getApiProgrammeIndex : getApiProgrammeIndex,
  getApiEpisodeCrucial : getApiEpisodeCrucial,
  getApiWhatsonscheduleYesterday : getApiWhatsonscheduleYesterday,
  getErrorlogAspxRss : getErrorlogAspxRss,
  getApiSchedule : getApiSchedule,
  getApiLastweek : getApiLastweek,
  getApiEpisodeTopten : getApiEpisodeTopten,
  getApiProgrammePerchannel2 : getApiProgrammePerchannel2,
  getApiProgrammeSearchatoz : getApiProgrammeSearchatoz,
  getApi : getApi,
  getProgrammeImageJpg : getProgrammeImageJpg,
  getProductionImage : getProductionImage,
  getLinking : getLinking,
  getApiEpisodeCarousel : getApiEpisodeCarousel,
  getEpisodeImageJpg : getEpisodeImageJpg,
  getApiGeoReversegeolookup : getApiGeoReversegeolookup,
  host : 'mercury.itv.com'
};
