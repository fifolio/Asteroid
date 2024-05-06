import { appwriteConfig, databases } from '../../appwrite/config'
import { useEffect, useState } from 'react'

export default function data() {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    // const [loading, setLoading] = useState(true)

    useEffect(() => {

        const fetchData = async () => {
            // setLoading(true)
            try {
                const res =await databases.listDocuments(
                    appwriteConfig.database, 
                    appwriteConfig.collection_blog
                );
                setData(res.documents)
                // setLoading(false)
            } catch (error) {
                setError(error)
                // setLoading(false)
            }
        }

        fetchData()

    }, [])



    return { loading, error, data }
}
