import { createContext, useState} from 'react';

const FavouritesContext = createContext({
    favourites: [],
    totalFavourites: 0,
    addFavourite: (favouriteMeetup) => {},
    removeFavourite: (meetupId) => {},
    itemIsFavourite: (meetupId) => {}

});

export function FavouritesContextProvider(props) {
    const [useFavourites, setUserFavourites] = useState([]);

    function addFavouriteHandler(favouriteMeetup) {
        setUserFavourites((prevUserFavourites) => {
            return prevUserFavourites.concat(favouriteMeetup);
        });     
    }

    function removeFavouriteHandler(meetupId) {
        setUserFavourites(prevUserFavourites => {
            return prevUserFavourites.filter(meetup => meetup.id !== meetupId);
        })
    }

    function itemIsFavouriteHandler(meetupId) {
        return useFavourites.some(meetup => meetup.id === meetupId);
    }

    const context = {
        favourites: useFavourites,
        totalFavourites: setUserFavourites.length,
        addFavourite: addFavouriteHandler,
        removeFavourite: removeFavouriteHandler,
        itemIsFavourite: itemIsFavouriteHandler
    };

    return <FavouritesContext.Provider value={context}>
        {props.children}
    </FavouritesContext.Provider>
}

export default FavouritesContext;