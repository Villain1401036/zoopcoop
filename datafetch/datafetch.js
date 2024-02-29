import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export function menuitemfetcher(url) {
  const { data, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher)

  return {
    data: data,
    isLoading,
    isError: error,
  }
}

export function learningitemfetcher(url) {
  const { data, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher)

  return {
    data: data,
    isLoading,
    isError: error,
  }
}

export function learningpodfetcher() {
  const { data, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher)

  return {
    data: data,
    isLoading,
    isError: error,
  }
}