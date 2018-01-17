export function getFilteredTracks(tracks, tags) {
	return tracks.filter(track => {
		return tags.every(tag => {
			return track.genres.some(genre => genre.name == tag)
		})
	})
}