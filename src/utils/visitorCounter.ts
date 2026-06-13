// CounterAPI V2 Client with automated V1 public fallback
const V1_API_BASE_URL = 'https://api.counterapi.dev/v1/maneesh_portfolio/visits';
const V2_API_BASE_URL = 'https://api.counterapi.dev/v2';

const FALLBACK_INITIAL_COUNT = 1247;

interface CounterResponse {
  count?: number;
  message?: string;
  code?: number | string;
}

// Retrieve configurations from environment
const getCounterConfig = () => {
  const apiKey = import.meta.env.VITE_COUNTER_API_KEY || 'ut_pc1e6hQp14fPZrSoevcgzYlMlQioA1ekfhpvvSDQ';
  const workspace = import.meta.env.VITE_COUNTER_WORKSPACE || '';
  return { apiKey, workspace };
};

/**
 * Helper to fetch with Bearer Authorization if credentials exist
 */
const fetchWithAuth = async (url: string, apiKey: string): Promise<Response> => {
  const headers: Record<string, string> = {};
  if (apiKey) {
    headers['Authorization'] = `Bearer ${apiKey}`;
  }
  return fetch(url, { headers });
};

/**
 * Gets the current unique visitor count.
 * Tries V2 if workspace is provided; otherwise, falls back to the public V1 endpoint.
 */
export const getVisitorCount = async (): Promise<number> => {
  const { apiKey, workspace } = getCounterConfig();

  if (workspace) {
    try {
      const url = `${V2_API_BASE_URL}/${workspace}/visits`;
      const res = await fetchWithAuth(url, apiKey);
      if (res.ok) {
        const data: CounterResponse = await res.json();
        return (data.count || 0) + FALLBACK_INITIAL_COUNT;
      }
      console.warn(`V2 query returned status ${res.status}. Falling back to public V1 counter.`);
    } catch (err) {
      console.warn('V2 request failed, falling back to public V1 counter:', err);
    }
  }

  // V1 Public Fallback
  try {
    const res = await fetch(`${V1_API_BASE_URL}/`);
    if (!res.ok) throw new Error('V1 CounterAPI fetch failed');
    const data: CounterResponse = await res.json();
    return (data.count || 0) + FALLBACK_INITIAL_COUNT;
  } catch (err) {
    console.warn('All CounterAPI fetches failed. Reading from local storage:', err);
    return getLocalFallbackCount();
  }
};

/**
 * Records a new unique visit.
 * Increments globally only if it's the visitor's first time in this browser.
 */
export const recordUniqueVisit = async (countryName: string, timezone: string): Promise<{ success: boolean; count: number }> => {
  console.log(`[Visitor Registration] Location: ${countryName || 'Unknown'}, Timezone: ${timezone || 'Unknown'}`);
  
  const hasVisited = localStorage.getItem('portfolio_has_visited');
  const { apiKey, workspace } = getCounterConfig();

  if (!hasVisited) {
    // Attempt V2 increment if workspace exists
    if (workspace) {
      try {
        const url = `${V2_API_BASE_URL}/${workspace}/visits/up`;
        const res = await fetchWithAuth(url, apiKey);
        if (res.ok) {
          const data: CounterResponse = await res.json();
          localStorage.setItem('portfolio_has_visited', 'true');
          const newCount = (data.count || 0) + FALLBACK_INITIAL_COUNT;
          localStorage.setItem('portfolio_local_visitor_count', newCount.toString());
          return { success: true, count: newCount };
        }
        console.warn(`V2 increment failed with status ${res.status}. Falling back to public V1.`);
      } catch (err) {
        console.warn('V2 increment request failed, falling back to V1:', err);
      }
    }

    // Public V1 Increment Fallback
    try {
      const res = await fetch(`${V1_API_BASE_URL}/up/`);
      if (!res.ok) throw new Error('V1 CounterAPI increment failed');
      const data: CounterResponse = await res.json();
      
      localStorage.setItem('portfolio_has_visited', 'true');
      const newCount = (data.count || 0) + FALLBACK_INITIAL_COUNT;
      localStorage.setItem('portfolio_local_visitor_count', newCount.toString());
      return { success: true, count: newCount };
    } catch (err) {
      console.warn('All CounterAPI increment efforts failed, using local storage:', err);
      const newLocalCount = await incrementLocalCount();
      return { success: false, count: newLocalCount };
    }
  } else {
    // Returning visitor: just read current total count
    try {
      const currentCount = await getVisitorCount();
      return { success: true, count: currentCount };
    } catch (err) {
      return { success: false, count: getLocalFallbackCount() };
    }
  }
};

// Local storage fallback helper
const getLocalFallbackCount = (): number => {
  const savedCount = localStorage.getItem('portfolio_local_visitor_count');
  if (savedCount) {
    return parseInt(savedCount, 10);
  }
  localStorage.setItem('portfolio_local_visitor_count', FALLBACK_INITIAL_COUNT.toString());
  return FALLBACK_INITIAL_COUNT;
};

// Local storage increment helper
const incrementLocalCount = async (): Promise<number> => {
  let count = getLocalFallbackCount();
  const hasVisited = localStorage.getItem('portfolio_has_visited');
  if (!hasVisited) {
    count += 1;
    localStorage.setItem('portfolio_local_visitor_count', count.toString());
    localStorage.setItem('portfolio_has_visited', 'true');
  }
  return count;
};
