function initMap() {
  var options = {
    center: { lat: 44.436459543149454, lng: 26.099935661467565 },
    zoom: 8
  };

  var map = new google.maps.Map(document.getElementById("map"), options);

  function addMarker(property) {
    const marker = new google.maps.Marker({
    position: property.location,
    map: map
    });

    if (property.content) {
      const detailWindow = new google.maps.InfoWindow({
        content: property.content
      });

      marker.addListener("click", () => {
        detailWindow.open(map, marker);
      })
    }

  }

  addMarker({ location: { lat: 44.436459543149454, lng: 26.099935661467565 }, content: `<p>Program: Luni - Vineri : 08:00 - 20:00</p>` });
  addMarker({ location: { lat: 44.770439, lng: 25.591423}, content: `<p>Program: Luni - Vineri : 08:00 - 20:00</p>` });
  addMarker({ location: { lat: 46.200439, lng: 26.591423}, content: `<p>Program: Luni - Vineri : 08:00 - 20:00</p>` });
  addMarker({ location: { lat: 44.770439, lng: 23.591423}, content: `<p>Program: Luni - Vineri : 08:00 - 20:00</p>` });
  addMarker({ location: { lat: 45.436459543149454, lng: 23.099935661467565 }, content: `<p>Program: Luni - Vineri : 08:00 - 20:00</p>` });
  addMarker({ location: { lat: 45.416459543149454, lng: 25.099935661467565 }, content: `<p>Program: Luni - Vineri : 08:00 - 20:00</p>` });
  addMarker({ location: { lat: 46.436459543149454, lng: 25.099935661467565 }, content: `<p>Program: Luni - Vineri : 08:00 - 20:00</p>` });
  addMarker({ location: { lat: 45.296459543149454, lng: 24.099935661467565 }, content: `<p>Program: Luni - Vineri : 08:00 - 20:00</p>` });
}
