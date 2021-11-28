$('#bus-btn').click(function() {
    $('#bus-container').css('display','flex');
    $('.bus-navbar').css('display','block');

    $('#initial-page').css('display','none');
    $('#long-distance-container').css('display','none');
    $('#plan-container').css('display','none');
  });
  $('#long-distance-btn').click(function() {
    $('#long-distance-container').css('display','block');
    $('#initial-page').css('display','none');
    $('#bus-container').css('display','none');
    $('.bus-navbar').css('display','block');
    $('#plan-container').css('display','none');
  });
  $('#plan-btn').click(function() {
    $('#plan-container').css('display','block');
    $('.bus-navbar').css('display','block');
    $('#initial-page').css('display','none');
    $('#bus-container').css('display','none');
    $('#long-distance-container').css('display','none');
  });

  var map = L.map('map');

  // 設定經緯度座標
  map.setView(new L.LatLng(23.5, 121), 10);

  // 設定圖資來源

  var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  var osm = new L.TileLayer(
      osmUrl,
      {
          minZoom: 8,
          maxZoom: 18
      });
  map.addLayer(osm);

//   const customIcon = L.icon({
//       iconUrl: './img/bike-icon.png',
//       iconSize: [50, 60],
//   });
  response.data.forEach(function (data, ID) {
      const marker = L.marker([response.data[ID].StationPosition.PositionLat, response.data[ID].StationPosition.PositionLon], {
          icon: customIcon,
          // title: '跟 <a> 的 title 一樣', // 跟 <a> 的 title 一樣
          opacity: 1.0
      }).addTo(map);
  });
// function mapResponse() {
//     axios.get(
//         'https://ptx.transportdata.tw/MOTC/v2/Bus/Route/City/Taipei?$filter=BusRouteType%20eq%2011&$top=100&$format=JSON',

//         {
//             headers: getAuthorizationHeader()
//         }
//     )
//         .then((response) => {
//             var map = L.map('map');

//             // 設定經緯度座標
//             map.setView(new L.LatLng(23.5, 121), 10);

//             // 設定圖資來源

//             var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
//             var osm = new L.TileLayer(
//                 osmUrl,
//                 {
//                     minZoom: 8,
//                     maxZoom: 18
//                 });
//             map.addLayer(osm);

//             const customIcon = L.icon({
//                 iconUrl: './img/bike-icon.png',
//                 iconSize: [50, 60],
//             });
//             response.data.forEach(function (data, ID) {
//                 const marker = L.marker([response.data[ID].StationPosition.PositionLat, response.data[ID].StationPosition.PositionLon], {
//                     icon: customIcon,
//                     // title: '跟 <a> 的 title 一樣', // 跟 <a> 的 title 一樣
//                     opacity: 1.0
//                 }).addTo(map);
//             });

//         })
//         .catch((error) => console.log(error))
// }
// mapResponse();
// response.data[ID].NameType.Zh_tw