const apiUrl = "https://jsonplaceholder.typicode.com/posts";

export async function getAllLocationsData() {
  const res = await fetch(new URL(apiUrl));
  const locations = await res.json();
  return locations;
}

export async function getAllLocationIds() {
  const res = await fetch(new URL(apiUrl));
  const locations = await res.json();

  return locations.map((location) => {
    return {
      params: {
        id: String(location.id),
      },
    };
  });
}

export async function getLocationData(id) {
  const res = await fetch(new URL(`${apiUrl}/${id}/`));
  const location = await res.json();

  return {
    location,
  };
}
