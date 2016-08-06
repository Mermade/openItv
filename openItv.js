const commonScreensize = 'screensize';
const commonBroadcaster = 'broadcaster';

/* Get Mercury programme details */
function getApiEpisodeProgramme(target,platform,programmeid){
  var p = '/api/{target}/{platform}/Episode/Programme/{programmeId}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  p = p.replace('{programmeId}',programmeid);
  return p;
}

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

/* Get Mercury audio-described (limited) */
function getApiProgrammePerchannelAd(target,platform,channelname,resultcount){
  var p = '/api/{target}/{platform}/programme/perchannel/AD/{channelName}/{resultCount}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  p = p.replace('{channelName}',channelname);
  p = p.replace('{resultCount}',resultcount);
  return p;
}

/* Get Mercury search */
function getApiProgrammeSearch(target,platform,searchterm){
  var p = '/api/{target}/{platform}/Programme/Search/{searchTerm}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  p = p.replace('{searchTerm}',searchterm);
  return p;
}

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

/* Get Mercury Postcode */
function getApiPostcode(target,postcode){
  var p = '/api/{target}/postcode/{postcode}';
  p = p.replace('{target}',target);
  p = p.replace('{postcode}',postcode);
  return p;
}

/* Get Mercury schedule by date */
function getApiWhatsonschedule(target,platform,date){
  var p = '/api/{target}/{platform}/whatsonschedule/{date}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  p = p.replace('{date}',date);
  return p;
}

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

/* Get Mercury lastweek */
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

/* Get Mercury Search AtoZ */
function getApiProgrammeSearchatoz(target,platform,characterfilter){
  var p = '/api/{target}/{platform}/Programme/SearchAtoZ/{characterFilter}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  p = p.replace('{characterFilter}',characterfilter);
  return p;
}

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
const getProgrammeImageJpgW = 'w';
const getProgrammeImageJpgH = 'h';

/* Get Mercury BBC Interlinking */
function getLinking(yyyymmdd){
  var p = '/linking/{yyyymmdd}';
  p = p.replace('{yyyymmdd}',yyyymmdd);
  return p;
}

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
const getEpisodeImageJpgW = 'w';
const getEpisodeImageJpgH = 'h';

/* Get Mercury Reverse Geocode */
function getApiGeoReversegeolookup(lat,long){
  var p = '/api/geo/reversegeolookup/{lat}/{long}';
  p = p.replace('{lat}',lat);
  p = p.replace('{long}',long);
  return p;
}

module.exports = {
  commonScreensize : commonScreensize,
  commonBroadcaster : commonBroadcaster,
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
  getLinking : getLinking,
  getApiEpisodeCarousel : getApiEpisodeCarousel,
  getEpisodeImageJpg : getEpisodeImageJpg,
  getApiGeoReversegeolookup : getApiGeoReversegeolookup,
  host : 'mercury.itv.com'
};
