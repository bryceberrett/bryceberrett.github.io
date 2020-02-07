 var map;
 // Initialize and add the map
      function initMap() {
  // The location of Orem
  var Orem = {lat: 40.300524, lng: -111.702692};
  // The map, centered at Orem
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 12, center: Orem});
  // The marker, positioned at Orem
  // Don't need: var marker = new google.maps.Marker({position: Orem, map: map});
//Info Window Content for Mountain View
 var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">My Church</h1>'+
      '<div id="bodyContent">'+
      '<p><b>My Church</b>, also referred to as <b>The chapel on 400W</b>, was were I ' +
      'grew up going to church. ' +
      'Many of the great influences of my life were meet in this building. I learned a lot ' +
      'and can honestly say that a lot of who I am today comes from experiences with my ward which meet in that building.'
      '</p>'+
      '</div>'+
      '</div>';
  var ChurchInfo = new google.maps.InfoWindow({
    content: contentString
  });

 var contentString2 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">My Home</h1>'+
      '<div id="bodyContent">'+
      '<p><b>My Home</b>, also referred to as <b>Home</b>, was were I ' +
      'grew up. My parents still live there and I visit often. ' +
      'I have many good memories of that home. Everything from sliding down the stairs in sleeping bags to jumping on the trampoline ' +
      'Outside. I feel like I grew up in a good place.'
      '</p>'+
      '</div>'+
      '</div>';
  var HomeInfo = new google.maps.InfoWindow({
    content: contentString2
  });

   var contentString3 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">My High chool</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Mountain View High School</b> was were I ' +
      'I went to school for high school. ' +
      'I graduated in 2013 just before leaving to serve a mission for The Church of Jesus Christ of Latter-Day Saints. ' +
      'I leaned many things, had many wonderful experiences, and developed many cherished relationships at that school.'
      '</p>'+
      '</div>'+
      '</div>';
  var SchoolInfo = new google.maps.InfoWindow({
    content: contentString3
  });

   var contentString4 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Birth Hospital</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Utah Valley Hospital</b>, was were I was born. All my family but one of my sisters were born in Provo.' +
      'As you can see, I did not travel too far during my childhood. I grew up right near where I was born.' +
      '</p>'+
      '</div>'+
      '</div>';
  var HospitalInfo = new google.maps.InfoWindow({
    content: contentString4
  });

  // The location of Mountain View
  var MountainView = {lat: 40.295603, lng: -111.711145};
  // The marker, positioned at Mountain View
  var marker0 = new google.maps.Marker({animation: google.maps.Animation.DROP, position: MountainView, map: map, title: 'This is where I went to school!'});
  marker0.addListener('click', function() {
    SchoolInfo.open(map, marker0);
  });
  // The location of Utah Valley Hospital
  var UVH = {lat: 40.247849, lng: -111.665685};
  // The marker, positioned at Utah Valley Hospital
  var marker1 = new google.maps.Marker({animation: google.maps.Animation.DROP, position: UVH, map: map, title: 'This is where I was born!'});
  marker1.addListener('click', function() {
    HospitalInfo.open(map, marker1);
  });
    // The location of my Home
  var Home = {lat: 40.300581, lng: -111.702528};
  // The marker, positioned at my Home
  var marker2 = new google.maps.Marker({animation: google.maps.Animation.DROP, position: Home, map: map, title: 'This is where I grew up!'});
  marker2.addListener('click', function() {
    HomeInfo.open(map, marker2);
  });
  // The location of my Home ward building
  var Church = {lat: 40.299433, lng: -111.704613};
  // The marker, positioned at home ward building
  var marker3 = new google.maps.Marker({animation: google.maps.Animation.DROP, position: Church, map: map, title: 'This is where I grew up going to church!'});
  marker3.addListener('click', function() {
    ChurchInfo.open(map, marker3);
  });
}
//Notes
//To change location of a parker, that comes in the    ChurchInfo.open(map, marker3); part of the code with the "marker3" spot being what the marker name should be.