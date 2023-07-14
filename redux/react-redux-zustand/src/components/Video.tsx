import ReactPlayer from 'react-player'

export function Video() {
  return (
    <div className='w-full bg-zinc-950 aspect-video'>
      <ReactPlayer
        width={"100%"}
        height={"100%"}
        url={'https://www.youtube.com/watch?v=d6ie3PEmAr4&ab_channel=Hup'}
        controls
      />
    </div>
  )
}