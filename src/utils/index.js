export async function Fetch(url) {
    
  const response = await fetch(url);
  return response.json();
    
  }