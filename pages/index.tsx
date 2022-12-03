import axios from "axios"
import Head from "next/head"
import NoResults from "../components/NoResults"
import VideoCard from "../components/VideoCard"

import { Video } from "../types"

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

interface IProps {
  videos: Video[]
}

const Home = ({ videos }: IProps) => {
  console.log(videos)

  return (
    <div className="flex flex-col gap-10 videos h-full">
      <Head>
        <title>TikTik</title>
      </Head>
      {videos.length ? (
        videos.map((video: Video) => (
          <VideoCard post={video} key={video._id} />
        ))
      ) : (
        <NoResults text={'No videos'} />
      )}
    </div>
  )
}

export const getServerSideProps = async ({
  query: { topic }
}: {
  query: { topic: string }
}) => {
  let response = null

  if (topic) {
    response = await axios.get(`${BASE_URL}/api/discover/${topic}`)
  } else {
    response = await axios.get(`${BASE_URL}/api/post`)
  }

  return {
    props: {
      videos: response.data
    }
  }
}

export default Home
