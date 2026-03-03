import citiesList from "../data/cities.js";

// Simulate network latency
const delay = (ms = 700) => new Promise((r) => setTimeout(r, ms));

export async function getHomestays() {
  await delay(600);
  // For demo we return the cities array (each city contains hotels)
  return citiesList;
}

export async function getHomestayById(id) {
  await delay(400);
  const idx = parseInt(id, 10);
  if (Number.isNaN(idx) || idx < 0 || idx >= citiesList.length) throw new Error("Not found");
  return citiesList[idx];
}

export async function getTours() {
  await delay(500);
  // collate sightseeing items across cities
  const tours = citiesList.flatMap((c) => c.sightseeing.map((s) => ({ ...s, city: c.city })));
  return tours;
}

export async function postBooking(booking) {
  await delay(400);
  // Use localStorage as persistent backend for bookings
  const key = "bookings";
  const raw = localStorage.getItem(key);
  const list = raw ? JSON.parse(raw) : [];
  const b = { ...booking, id: Date.now(), createdAt: new Date().toISOString() };
  localStorage.setItem(key, JSON.stringify([b, ...list]));
  return b;
}

export default { getHomestays, getHomestayById, getTours, postBooking };
