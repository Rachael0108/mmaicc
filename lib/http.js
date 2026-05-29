const BASE_URL = "https://yy.mmaicc.com/operation_platform";

const TIMEOUT = 115000;

function buildQuery(params) {
  if (!params) return "";
  const usp = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      usp.append(key, String(value));
    }
  });
  const query = usp.toString();
  return query ? `?${query}` : "";
}

export async function request({ url, method = "GET", params, data } = {}) {
  const upperMethod = method.toUpperCase();
  const fullUrl =
    BASE_URL + url + (upperMethod === "GET" ? buildQuery(params) : "");

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT);

  const options = {
    method: upperMethod,
    headers: { "Content-Type": "application/json" },
    signal: controller.signal,
  };

  if (data !== undefined && upperMethod !== "GET") {
    options.body = JSON.stringify(data);
  }

  try {
    const res = await fetch(fullUrl, options);
    if (!res.ok) {
      throw new Error(`请求错误: ${res.status}`);
    }
    // 对应原拦截器中的 Promise.resolve(res.data)
    return await res.json();
  } finally {
    clearTimeout(timer);
  }
}
