import styled from 'styled-components';
import { GlobalStyles } from './components/GlobalStyles';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Banner } from './components/Banner';
import banner from './assets/banner.png';
import { Gallery } from './components/Gallery';
import photos from './fotos.json';
import { ModalZoom } from './components/ModalZoom';
import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';


const GradientBackground = styled.div`
background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
width: 100%;
min-height: 100vh;
`

const AppContainer = styled.div`
  width: 95%;
  max-width: 100%;
  margin: 0 auto;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const GalleryContent = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const App = () => {

  const [galleryPhotos, setGalleryPhotos] = useState(photos);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [filter, setFilter] = useState('');
  const [tag, setTag] = useState(0);

  useEffect(() => {
    const leakedPhotos = photos.filter( photo => {
      const filterByTag = !tag || photo.tagId === tag;
      const filterByTitle = !filter || photo.title.toLowerCase().includes(filter.toLowerCase())
      return filterByTag && filterByTitle;
    })
    setGalleryPhotos(leakedPhotos)
  },[filter, tag])
  console.log(tag);
  const handleShowPhoto = ( photo ) => {
    setSelectedPhoto( photo )
  }

  const closeModal = () => {
    setSelectedPhoto(null)
  }

  const toggleFavorite = ( photo ) => {

    if(photo.id === selectedPhoto?.id){
      setSelectedPhoto({
        ...selectedPhoto,
        favorite: !photo.favorite
      })
    }
    setGalleryPhotos(galleryPhotos.map(galleryPhotos=> {
      return {
        ...galleryPhotos,
        favorite: galleryPhotos.id === photo.id ? !photo.favorite : galleryPhotos.favorite
      }
    }))
  }

  return (
    <>
      <GradientBackground>
        <GlobalStyles />
        <AppContainer>
          <Header 
            filter={filter}
            setFilter={setFilter}
          />
          <MainContainer>
            <Sidebar />
            <GalleryContent>
              <Banner
                text="La galería más completa de fotos del espacio"
                backgroundImage={banner}
              />
              <Gallery 
                handleShowPhoto={handleShowPhoto} 
                photos={galleryPhotos} 
                selectedPhoto={photo => setSelectedPhoto(photo)}
                toggleFavorite={toggleFavorite} 
                setTag={setTag}
              />
            </GalleryContent>
          </MainContainer>

        </AppContainer>
        <Footer />
        <ModalZoom 
          photo={selectedPhoto} 
          closeModal={closeModal} 
          toggleFavorite={toggleFavorite}
        />
      </GradientBackground>
    </>
  )
}

