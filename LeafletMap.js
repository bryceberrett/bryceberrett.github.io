//var map = L.map('mapid').setView([40.300504,-111.702573], 13);

//L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//}).addTo(map);
var map = L.map('mapid').setView([40.300504,-111.702573], 13)
  L.esri.basemapLayer('Topographic').addTo(map);

L.marker([40.300504,-111.702573]).addTo(map)
    .bindPopup('<b>My Home</b>, also referred to as <b>Home</b>, was were I ' +
      'grew up. My parents still live there and I visit often. ' +
      'I have many good memories of that home. Everything from sliding down the stairs in sleeping bags to jumping on the trampoline ' +
      'Outside. I feel like I grew up in a good place.')
//    .openPopup();

L.marker([40.295603, -111.711145]).addTo(map)
    .bindPopup('<b>Mountain View High School</b> was were I ' +
      'I went to school for high school. ' +
      'I graduated in 2013 just before leaving to serve a mission for The Church of Jesus Christ of Latter-Day Saints. ' +
      'I leaned many things, had many wonderful experiences, and developed many cherished relationships at that school.')
//    .openPopup();

L.marker([40.247849, -111.665685]).addTo(map)
    .bindPopup('<b>Utah Valley Hospital</b>, was were I was born. All my family but one of my sisters were born in Provo.' +
      'As you can see, I did not travel too far during my childhood. I grew up right near where I was born.')
//    .openPopup();

L.marker([40.299433, -111.704613]).addTo(map)
    .bindPopup('<b>My Church</b>, also referred to as <b>The chapel on 400W</b>, was were I ' +
      'grew up going to church. ' +
      'Many of the great influences of my life were meet in this building. I learned a lot ' +
      'and can honestly say that a lot of who I am today comes from experiences with my ward which meet in that building.')
//    .openPopup();
var polygon = L.polygon([
    [40.300639,-111.702828],
    [40.300621,-111.702405],
    [40.300339,-111.702378],
    [40.300351,-111.702839]
]).addTo(map);

var circle = L.circle([40.300627,-111.702528], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 1100
}).addTo(map);