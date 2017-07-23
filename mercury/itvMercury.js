/**
@author openapi2js http://github.com/mermade/openapi2js
@copyright Copyright (c) 2017 Mike Ralphson
@license https://opensource.org/licenses/BSD-3-Clause
*/
/** Whether to return results in xml or json */
const commonTargetXml = 'xml';
const commonTargetJson = 'json';
/** The platform to return results for */
const commonPlatformDotcom = 'dotcom';
const commonPlatformMobile = 'mobile';
const commonPlatformAndroid = 'android';
const commonPlatformSamsung = 'samsung';
const commonPlatformPs3 = 'ps3';
const commonPlatformYouview = 'youview';
/** The target screen-size */
const commonScreensize = 'screensize';
const commonScreensizeBig = 'screensize=big';
const commonScreensizeSmall = 'screensize=small';
/** The ITV broadcaster to return results for */
const commonBroadcaster = 'broadcaster';
const commonBroadcasterItv = 'broadcaster=itv';
const commonBroadcasterStv = 'broadcaster=stv';
const commonBroadcasterUtv = 'broadcaster=utv';
const commonBroadcasterChannel = 'broadcaster=channel';
const commonBroadcasterUnknown = 'broadcaster=unknown';
/** The channel name to return results for */
const commonChannelnameItv1 = 'itv1';
const commonChannelnameItv2 = 'itv2';
const commonChannelnameItv3 = 'itv3';
const commonChannelnameItv4 = 'itv4';
const commonChannelnameItvbe = 'itvbe';
const commonChannelnameCitv = 'citv';
/** Width in pixels */
const commonW = 'w';
/** Height in pixels */
const commonH = 'h';

/** Get Mercury programme details
@param {string} target Whether to return results in xml or json
@param {string} platform The platform to return results for
@param {string} programmeId The programme id to find by
@return {string} The path to request
*/
function getApiEpisodeProgramme(target,platform,programmeid){
  var p = '/api/{target}/{platform}/Episode/Programme/{programmeId}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  p = p.replace('{programmeId}',programmeid);
  return p;
}

/** Get Mercury Episode by Date
@param {string} target Whether to return results in xml or json
@param {string} platform The platform to return results for
@param {number} year The year to return results for
@param {number} month The month to return results for
@param {number} day The day to return results for
@return {string} The path to request
*/
function getApiEpisodeBydate(target,platform,year,month,day){
  var p = '/api/{target}/{platform}/Episode/ByDate/{year}/{month}/{day}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  p = p.replace('{year}',year);
  p = p.replace('{month}',month);
  p = p.replace('{day}',day);
  return p;
}

/** Get Mercury audio-described (limited)
@param {string} target Whether to return results in xml or json
@param {string} platform The platform to return results for
@param {string} channelName The channel name to return results for
@param {number} resultCount The number of results to return
@return {string} The path to request
*/
function getApiProgrammePerchannelAd(target,platform,channelname,resultcount){
  var p = '/api/{target}/{platform}/programme/perchannel/AD/{channelName}/{resultCount}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  p = p.replace('{channelName}',channelname);
  p = p.replace('{resultCount}',resultcount);
  return p;
}

/** Get Mercury search
@param {string} target Whether to return results in xml or json
@param {string} platform The platform to return results for
@param {string} searchTerm The search term to search by
@return {string} The path to request
*/
function getApiProgrammeSearch(target,platform,searchterm){
  var p = '/api/{target}/{platform}/Programme/Search/{searchTerm}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  p = p.replace('{searchTerm}',searchterm);
  return p;
}

/** Get Mercury most-watched
@param {string} target Whether to return results in xml or json
@param {string} platform The platform to return results for
@return {string} The path to request
*/
function getApiEpisodeMostwatched(target,platform){
  var p = '/api/{target}/{platform}/Episode/MostWatched';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  return p;
}

/** Get Mercury per channel
@param {string} target Whether to return results in xml or json
@param {string} platform The platform to return results for
@param {string} channelName The channel name to return results for
@return {string} The path to request
*/
function getApiProgrammePerchannel(target,platform,channelname){
  var p = '/api/{target}/{platform}/Programme/PerChannel/{channelName}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  p = p.replace('{channelName}',channelname);
  return p;
}

/** Get Mercury episode index
@param {string} target Whether to return results in xml or json
@param {string} platform The platform to return results for
@param {string} episodeId The episode id to find by
@return {string} The path to request
*/
function getApiEpisodeIndex(target,platform,episodeid){
  var p = '/api/{target}/{platform}/Episode/index/{episodeId}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  p = p.replace('{episodeId}',episodeid);
  return p;
}

/** Get Mercury schedule today
@param {string} target Whether to return results in xml or json
@param {string} platform The platform to return results for
@return {string} The path to request
*/
function getApiWhatsonscheduleToday(target,platform){
  var p = '/api/{target}/{platform}/whatsonschedule/today';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  return p;
}

/** Get Mercury audio-described
@param {string} target Whether to return results in xml or json
@param {string} platform The platform to return results for
@param {string} channelName The channel name to return results for
@return {string} The path to request
*/
function getApiProgrammePerchannelAd2(target,platform,channelname){
  var p = '/api/{target}/{platform}/programme/perchannel/AD/{channelName}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  p = p.replace('{channelName}',channelname);
  return p;
}

/** Get Mercury error log digest*/
const getErrorlogAspxDigestrss = '/errorlog.aspx/digestrss';

/** Get Mercury episode/programme
@param {string} target Whether to return results in xml or json
@param {string} platform The platform to return results for
@param {string} episodeId The episode id to find by
@return {string} The path to request
*/
function getApiEpisodeProgramme2(target,platform,episodeid){
  var p = '/api/{target}/{platform}/episode/programme/{episodeId}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  p = p.replace('{episodeId}',episodeid);
  return p;
}

/** Get Mercury Postcode
@param {string} target Whether to return results in xml or json
@param {string} postcode The postcode to search by
@return {string} The path to request
*/
function getApiPostcode(target,postcode){
  var p = '/api/{target}/postcode/{postcode}';
  p = p.replace('{target}',target);
  p = p.replace('{postcode}',postcode);
  return p;
}

/** Get Mercury schedule by date
@param {string} target Whether to return results in xml or json
@param {string} platform The platform to return results for
@param {string} date The date to return the schedule for (format yyyymmdd)
@return {string} The path to request
*/
function getApiWhatsonschedule(target,platform,date){
  var p = '/api/{target}/{platform}/whatsonschedule/{date}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  p = p.replace('{date}',date);
  return p;
}

/** Get Mercury error log download*/
const getErrorlogAspxDownload = '/errorlog.aspx/download';

/** Get Mercury programme index
@param {string} target Whether to return results in xml or json
@param {string} platform The platform to return results for
@param {string} programmeId The programme id to find by
@return {string} The path to request
*/
function getApiProgrammeIndex(target,platform,programmeid){
  var p = '/api/{target}/{platform}/programme/index/{programmeId}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  p = p.replace('{programmeId}',programmeid);
  return p;
}

/** Get Mercury crucial
@param {string} target Whether to return results in xml or json
@param {string} platform The platform to return results for
@return {string} The path to request
*/
function getApiEpisodeCrucial(target,platform){
  var p = '/api/{target}/{platform}/Episode/Crucial';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  return p;
}

/** Get Mercury schedule yesterday
@param {string} target Whether to return results in xml or json
@param {string} platform The platform to return results for
@return {string} The path to request
*/
function getApiWhatsonscheduleYesterday(target,platform){
  var p = '/api/{target}/{platform}/whatsonschedule/yesterday';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  return p;
}

/** Get Mercury error log*/
const getErrorlogAspxRss = '/errorlog.aspx/rss';

/** Get Mercury current schedule
@param {string} target Whether to return results in xml or json
@param {string} platform The platform to return results for
@return {string} The path to request
*/
function getApiSchedule(target,platform){
  var p = '/api/{target}/{platform}/schedule';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  return p;
}

/** Get Mercury last week
@param {string} target Whether to return results in xml or json
@param {string} platform The platform to return results for
@return {string} The path to request
*/
function getApiLastweek(target,platform){
  var p = '/api/{target}/{platform}/lastweek';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  return p;
}

/** Get Mercury top ten
@param {string} target Whether to return results in xml or json
@param {string} platform The platform to return results for
@return {string} The path to request
*/
function getApiEpisodeTopten(target,platform){
  var p = '/api/{target}/{platform}/Episode/TopTen';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  return p;
}

/** Get Mercury per channel (limited)
@param {string} target Whether to return results in xml or json
@param {string} platform The platform to return results for
@param {string} channelName The channel name to return results for
@param {number} resultCount The number of results to return
@return {string} The path to request
*/
function getApiProgrammePerchannel2(target,platform,channelname,resultcount){
  var p = '/api/{target}/{platform}/Programme/PerChannel/{channelName}/{resultCount}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  p = p.replace('{channelName}',channelname);
  p = p.replace('{resultCount}',resultcount);
  return p;
}

/** Get Mercury Search AtoZ
@param {string} target Whether to return results in xml or json
@param {string} platform The platform to return results for
@param {string} characterFilter The initial character to filter by
@return {string} The path to request
*/
function getApiProgrammeSearchatoz(target,platform,characterfilter){
  var p = '/api/{target}/{platform}/Programme/SearchAtoZ/{characterFilter}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  p = p.replace('{characterFilter}',characterfilter);
  return p;
}

/** Get Mercury Menu
@param {string} target Whether to return results in xml or json
@param {string} platform The platform to return results for
@return {string} The path to request
*/
function getApi(target,platform){
  var p = '/api/{target}/{platform}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  return p;
}

/** Get Mercury image by programme id
@param {string} platform The platform to return results for
@param {string} programmeId The programme id to find by
@return {string} The path to request
*/
function getProgrammeImageJpg(platform,programmeid){
  var p = '/{platform}/programme/{programmeId}/image.jpg';
  p = p.replace('{platform}',platform);
  p = p.replace('{programmeId}',programmeid);
  return p;
}

/** Get Mercury image by production id
@param {string} platform The platform to return results for
@return {string} The path to request
*/
function getProductionImage(platform){
  var p = '/{platform}/production/image';
  p = p.replace('{platform}',platform);
  return p;
}
/** Quality */
const getProductionImageQuality = 'quality';
/** The image format to return */
const getProductionImageFormat = 'format';
/** The production id to find by */
const getProductionImageProductionid = 'productionId';

/** Get Mercury BBC Interlinking
@param {string} yyyymmdd The date to retrieve interlinking data for
@return {string} The path to request
*/
function getLinking(yyyymmdd){
  var p = '/linking/{yyyymmdd}';
  p = p.replace('{yyyymmdd}',yyyymmdd);
  return p;
}

/** Get Mercury carousel
@param {string} target Whether to return results in xml or json
@param {string} platform The platform to return results for
@return {string} The path to request
*/
function getApiEpisodeCarousel(target,platform){
  var p = '/api/{target}/{platform}/Episode/Carousel';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  return p;
}

/** Get Mercury image by episodeId
@param {string} platform The platform to return results for
@param {string} episodeId The episode id to find by
@return {string} The path to request
*/
function getEpisodeImageJpg(platform,episodeid){
  var p = '/{platform}/episode/{episodeId}/image.jpg';
  p = p.replace('{platform}',platform);
  p = p.replace('{episodeId}',episodeid);
  return p;
}

/** Get Mercury Reverse Geocode
@param {number} lat Lattitude
@param {number} long Longitude
@return {string} The path to request
*/
function getApiGeoReversegeolookup(lat,long){
  var p = '/api/geo/reversegeolookup/{lat}/{long}';
  p = p.replace('{lat}',lat);
  p = p.replace('{long}',long);
  return p;
}

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
  commonW : commonW,
  commonH : commonH,
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
  getProductionImageQuality : getProductionImageQuality,
  getProductionImageFormat : getProductionImageFormat,
  getProductionImageProductionid : getProductionImageProductionid,
  getLinking : getLinking,
  getApiEpisodeCarousel : getApiEpisodeCarousel,
  getEpisodeImageJpg : getEpisodeImageJpg,
  getApiGeoReversegeolookup : getApiGeoReversegeolookup,
  host : 'mercury.itv.com'
};
