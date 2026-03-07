import { useEffect, useState } from "react"
import { useLang } from "@/context/LangContext"
import { basePath } from "@/utils/basePath";

export function useLangData<T = any>(path: string) {
  const { lang } = useLang()
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)

      try {
        const res = await fetch(`/out/data/${lang}/${path}.json`)
        if (!res.ok) throw new Error(`Failed to fetch ${path}`)
        const json = await res.json()
        setData(json)
      } catch (err: any) {
        console.error(err)
        setError(err.message)
      } finally {
        setLoading(false)
      }      
        console.error(`${basePath}/data/${lang}/${path}.json`)
    }

    fetchData()
  }, [lang, path])

  return { data, loading, error }
}
