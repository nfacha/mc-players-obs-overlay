The server MUST send the player list, or MUST have QUERY enabled.

You can use the following URL as a OBS Browser Source:

`https://mc-obs.facha.dev/?server=SERVER&port=PORT&refresh=11`

Replacing `SERVER` and `PORT` by the correct parameters.

The `refresh` parameter is how frequently the overlay will update, 11 minutes is recomended as the backend API caches data for 10 minutes

A live example would be:
`https://mc-obs.facha.dev/?&server=play.mythichaven.net&port=25565&refresh=11`
