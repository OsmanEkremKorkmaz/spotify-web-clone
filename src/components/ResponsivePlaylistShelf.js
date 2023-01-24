import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import PlaylistItem from './HomePlaylistItem'
import Title from './Title'

export default function ResponsivePlaylistShelf({title, items}) {
  return (
    <div className='pt-6 px-4 flex flex-col gap-y-3'>
        <Title title={title} />
        <ScrollContainer className='flex gap-x-4 pb-2 w-full flex-nowrap'>
            {items.map((item, i) => <PlaylistItem item={item} />)}
        </ScrollContainer  >
    </div>
  )
}
