const baseURL = "https://api.songkick.com/api/3.0/artists/66370/calendar.json?apikey=Lgtx6JjjaSzawzsh";

async function renderToUI() {
  let eventData = await getEventData();
  eventData = eventData.slice(0, 4);

  for (let item of eventData) {
    // Here we'll get the container to place the
    let VenueBody = document.querySelector("container");

    // Next create the new elements
    let VenueDiv = document.createElement("div");
    let VenueName = document.createElement("h2");
    let location = document.createElement("h3")
    let time = document.createElement("h4");
    let type = document.createElement("h4");
    let Link = document.createElement("a");

    
    Link.href = item.venue.uri; // Tells "Link" has a href and where to get it from
    Link.target = "_Blank"; // Tells "Link" to open the href in a new tab

    // Set the classes of the new elements
    VenueDiv.className = "VenueContainer col-12 col-md-6"
    //VenueName.className = "header";
    //Link.className = "link";

    // Create the text nodes where we'll place the new data
  let VenueText = document.createTextNode(`Venue: ${item.venue.displayName}`);
    let LocationText = document.createTextNode(`Location: ${item.location.city}`)
    let TypeText = document.createTextNode(`Type of event: ${item.type}`);
    let DateText = document.createTextNode(`Date: ${item.start.date} - Time: ${item.start.time}`);
    let Linktext = document.createTextNode("Ticket Link");
    

    // Append the text nodes to their appropriate elements
    VenueName.appendChild(VenueText);
    location.appendChild(LocationText);
    Link.appendChild(Linktext);
    time.appendChild(DateText);
    type.appendChild(TypeText);

    // Add the new header and paragraph to containing div
    VenueDiv.appendChild(VenueName);
    VenueDiv.appendChild(location);
    VenueDiv.appendChild(type);
    VenueDiv.appendChild(time);
    VenueDiv.appendChild(Link);

    // Append the div to the body
    VenueBody.appendChild(VenueDiv);
  }
}

async function getEventData() {
  let response = await fetch(baseURL);
  let data = await response.json()
  return await data.resultsPage.results.event;
}

renderToUI()