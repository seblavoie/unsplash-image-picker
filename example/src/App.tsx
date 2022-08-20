import React from 'react'

import 'unsplash-image-picker/dist/index.css'
import UnsplashImagePickerModal from 'unsplash-image-picker'
import Photo from './component/photo'

const App = () => {
  const [active, setActive] = React.useState(false)
  const [photos, setActivePhotos] = React.useState<any[]>([])
  const unsplashAccessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY
  console.log(unsplashAccessKey)
  return (
    <div className='App flex flex-col item-start justify-center bg-gray-50'>
      <div className='flex flex-col items-center space-y-4 p-4 sm:p-0 '>
        <button
          className='button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded p-42 h-12'
          onClick={() => {
            setActive(true)
          }}
        >
          Search image
        </button>
        <UnsplashImagePickerModal
          unsplashAccessKey={unsplashAccessKey}
          active={active}
          setActive={setActive}
          initialPhotoSearchQuery=''
          onPhotoSelect={(photo: any) => {
            let list = (photos ?? []) as any[]
            list.push(photo)
            setActivePhotos(list)
            setActive(false)
          }}
        />
        <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center overflow-auto'>
          {photos?.map((photo: any, index: number) => (
            <Photo photo={photo} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
