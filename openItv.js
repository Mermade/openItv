const commonScreensize = 'screensize';
const commonBroadcaster = 'broadcaster';

/* No description */
function getApiepisodeProgramme(target,platform,programmeid){
  var p = '/api/{target}/{platform}/Episode/Programme/{programmeId}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  p = p.replace('{programmeId}',programmeid);
  return p;
}

/* No description */
function getApiepisodeBydate(target,platform,year,month,day){
  var p = '/api/{target}/{platform}/Episode/ByDate/{year}/{month}/{day}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  p = p.replace('{year}',year);
  p = p.replace('{month}',month);
  p = p.replace('{day}',day);
  return p;
}

/* No description */
function getApiprogrammePerchannelAd(target,platform,channelname,resultcount){
  var p = '/api/{target}/{platform}/programme/perchannel/AD/{channelName}/{resultCount}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  p = p.replace('{channelName}',channelname);
  p = p.replace('{resultCount}',resultcount);
  return p;
}

/* No description */
function getApiprogrammeSearch(target,platform,searchterm){
  var p = '/api/{target}/{platform}/Programme/Search/{searchTerm}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  p = p.replace('{searchTerm}',searchterm);
  return p;
}

/* No description */
function getApiepisodeMostwatched(target,platform){
  var p = '/api/{target}/{platform}/Episode/MostWatched';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  return p;
}

/* No description */
function getApiprogrammePerchannel(target,platform,channelname){
  var p = '/api/{target}/{platform}/Programme/PerChannel/{channelName}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  p = p.replace('{channelName}',channelname);
  return p;
}

/* No description */
function getApiepisodeIndex(target,platform,episodeid){
  var p = '/api/{target}/{platform}/Episode/index/{episodeId}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  p = p.replace('{episodeId}',episodeid);
  return p;
}

/* No description */
function getApiwhatsonscheduleToday(target,platform){
  var p = '/api/{target}/{platform}/whatsonschedule/today';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  return p;
}

/* No description */
function getApiprogrammePerchannelAd2(target,platform,channelname){
  var p = '/api/{target}/{platform}/programme/perchannel/AD/{channelName}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  p = p.replace('{channelName}',channelname);
  return p;
}

/* No description */
const getErrorlogAspxDigestrss = '//errorlog.aspx/digestrss';

/* No description */
function getApiepisodeProgramme2(target,platform,episodeid){
  var p = '/api/{target}/{platform}/episode/programme/{episodeId}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  p = p.replace('{episodeId}',episodeid);
  return p;
}

/* No description */
function getApiPostcode(target,postcode){
  var p = '/api/{target}/postcode/{postcode}';
  p = p.replace('{target}',target);
  p = p.replace('{postcode}',postcode);
  return p;
}

/* No description */
function getApiwhatsonschedule(target,platform,date){
  var p = '/api/{target}/{platform}/whatsonschedule/{date}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  p = p.replace('{date}',date);
  return p;
}

/* No description */
const getErrorlogAspxDownload = '//errorlog.aspx/download';

/* No description */
function getApiprogrammeIndex(target,platform,programmeid){
  var p = '/api/{target}/{platform}/programme/index/{programmeId}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  p = p.replace('{programmeId}',programmeid);
  return p;
}

/* No description */
function getApiepisodeCrucial(target,platform){
  var p = '/api/{target}/{platform}/Episode/Crucial';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  return p;
}

/* No description */
function getApiwhatsonscheduleYesterday(target,platform){
  var p = '/api/{target}/{platform}/whatsonschedule/yesterday';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  return p;
}

/* No description */
const getErrorlogAspxRss = '//errorlog.aspx/rss';

/* No description */
function getApischedule(target,platform){
  var p = '/api/{target}/{platform}/schedule';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  return p;
}

/* No description */
function getApilastweek(target,platform){
  var p = '/api/{target}/{platform}/lastweek';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  return p;
}

/* No description */
function getApiepisodeTopten(target,platform){
  var p = '/api/{target}/{platform}/Episode/TopTen';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  return p;
}

/* No description */
function getApiprogrammePerchannel2(target,platform,channelname,resultcount){
  var p = '/api/{target}/{platform}/Programme/PerChannel/{channelName}/{resultCount}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  p = p.replace('{channelName}',channelname);
  p = p.replace('{resultCount}',resultcount);
  return p;
}

/* No description */
function getApiprogrammeSearchatoz(target,platform,characterfilter){
  var p = '/api/{target}/{platform}/Programme/SearchAtoZ/{characterFilter}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  p = p.replace('{characterFilter}',characterfilter);
  return p;
}

/* No description */
function getApi(target,platform){
  var p = '/api/{target}/{platform}';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  return p;
}

/* No description */
function getProgrammeImageJpg(platform,programmeid){
  var p = '/{platform}/programme/{programmeId}/image.jpg';
  p = p.replace('{platform}',platform);
  p = p.replace('{programmeId}',programmeid);
  return p;
}
const getProgrammeImageJpgW = 'w';
const getProgrammeImageJpgH = 'h';

/* No description */
function getLinking(yyyymmdd){
  var p = '/linking/{yyyymmdd}';
  p = p.replace('{yyyymmdd}',yyyymmdd);
  return p;
}

/* No description */
function getApiepisodeCarousel(target,platform){
  var p = '/api/{target}/{platform}/Episode/Carousel';
  p = p.replace('{target}',target);
  p = p.replace('{platform}',platform);
  return p;
}

/* No description */
function getEpisodeImageJpg(platform,episodeid){
  var p = '/{platform}/episode/{episodeId}/image.jpg';
  p = p.replace('{platform}',platform);
  p = p.replace('{episodeId}',episodeid);
  return p;
}
const getEpisodeImageJpgW = 'w';
const getEpisodeImageJpgH = 'h';

/* No description */
function getApiGeoReversegeolookup(lat,long){
  var p = '/api/geo/reversegeolookup/{lat}/{long}';
  p = p.replace('{lat}',lat);
  p = p.replace('{long}',long);
  return p;
}

module.exports = {
  commonScreensize : commonScreensize,
  commonBroadcaster : commonBroadcaster,
  getApiepisodeProgramme : getApiepisodeProgramme,
  getApiepisodeBydate : getApiepisodeBydate,
  getApiprogrammePerchannelAd : getApiprogrammePerchannelAd,
  getApiprogrammeSearch : getApiprogrammeSearch,
  getApiepisodeMostwatched : getApiepisodeMostwatched,
  getApiprogrammePerchannel : getApiprogrammePerchannel,
  getApiepisodeIndex : getApiepisodeIndex,
  getApiwhatsonscheduleToday : getApiwhatsonscheduleToday,
  getApiprogrammePerchannelAd2 : getApiprogrammePerchannelAd2,
  getErrorlogAspxDigestrss : getErrorlogAspxDigestrss,
  getApiepisodeProgramme2 : getApiepisodeProgramme2,
  getApiPostcode : getApiPostcode,
  getApiwhatsonschedule : getApiwhatsonschedule,
  getErrorlogAspxDownload : getErrorlogAspxDownload,
  getApiprogrammeIndex : getApiprogrammeIndex,
  getApiepisodeCrucial : getApiepisodeCrucial,
  getApiwhatsonscheduleYesterday : getApiwhatsonscheduleYesterday,
  getErrorlogAspxRss : getErrorlogAspxRss,
  getApischedule : getApischedule,
  getApilastweek : getApilastweek,
  getApiepisodeTopten : getApiepisodeTopten,
  getApiprogrammePerchannel2 : getApiprogrammePerchannel2,
  getApiprogrammeSearchatoz : getApiprogrammeSearchatoz,
  getApi : getApi,
  getProgrammeImageJpg : getProgrammeImageJpg,
  getLinking : getLinking,
  getApiepisodeCarousel : getApiepisodeCarousel,
  getEpisodeImageJpg : getEpisodeImageJpg,
  getApiGeoReversegeolookup : getApiGeoReversegeolookup,
  host : 'mercury.itv.com'
};
