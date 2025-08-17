
export async function getVisaServices() {
  try {
    const res = await fetch('/Services.json', {
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch visa services: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching Services.json:', error);
    throw error;
  }
}