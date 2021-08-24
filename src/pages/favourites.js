import { useContext } from 'react';

import FavouritesContext from '../store/favourite-context';
import MeetupList from '../Components/meetups/MeetupList';

function FavouritesPage() {
    const favouritesCtx = useContext(FavouritesContext);

    let content;

    if (favouritesCtx.totalFavourites === 0) {
        content = <p>You don't have any favourites yet. Start adding some!</p>
    } else {
        content = <MeetupList meetups={favouritesCtx.favourites} />
    }


    return (
    <section>
        <h1>My Favourites</h1>
        {content}
    </section>
    );
}

export default FavouritesPage;