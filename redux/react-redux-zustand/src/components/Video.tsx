import { next, useCurrentLesson } from '../store/slices/player'
import { useAppDispatch } from '../store'

import ReactPlayer from 'react-player'

export function Video() {
  const dispatch = useAppDispatch()

  const { currentLesson } = useCurrentLesson()

  function handlePlayNext() {
    dispatch(next())
  }

  if (!currentLesson) {
    return null
  }

  return (
    <div className='w-full bg-zinc-950 aspect-video'>
      <ReactPlayer
        width={"100%"}
        height={"100%"}
        url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
        onEnded={handlePlayNext}
        controls
        // playing
      />
    </div>
  )
}