const favorites = ( state = [], action ) => {
    switch(action.type) {
        case 'FAVORITES':
            return action.favorites
        case 'ADD_FAVORITE': 
            return [action.favorite, ...state];
        case 'REMOVE_FAVORITE': {
            let favorites = state
            let filtered = favorites.filter(f => {
                return f.url !== action.favorite.url
            })
            return filtered
        }
        default:
            return state
    }
}

export default favorites;
